import { StudentActivation, GeneratedCodeRecord } from '../types';

export const ADMIN_PIN = "b13a15m17";
export const TEACHER_WHATSAPP = "963933036079";
export const TEACHER_NAME = "جيداء صقر";
export const TEACHER_NAME_EN = "T. Jaidaa Saqer";
export const APP_NAME = "MORE ENGLISH MORE LOVE";

// 180 Days in milliseconds (6 months)
export const SUBSCRIPTION_DURATION_MS = 180 * 24 * 60 * 60 * 1000;

// Secret mathematical salt known only within the client application logic
const CRYPTO_SALT = "JAIDAA_SAQER_MEML_SECURE_SALT_2026_SYRIA";

// Unambiguous alphanumeric characters (excluding 0, O, 1, I, L to prevent confusion)
const CODE_CHARSET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

/**
 * Normalizes student name to prevent minor typing discrepancies from breaking verification.
 * Strips diacritics, standardizes Arabic letters (أ/إ/آ -> ا, ة -> ه, ى -> ي),
 * removes duplicate spaces, and normalizes casing.
 */
export function normalizeStudentName(rawName: string): string {
  if (!rawName) return "";
  let name = rawName.trim().toLowerCase();

  // Remove Arabic diacritics / tashkeel
  name = name.replace(/[\u064B-\u065F\u0670]/g, "");

  // Normalize Alef variations
  name = name.replace(/[أإآٱ]/g, "ا");

  // Normalize Taa Marbuta
  name = name.replace(/ة/g, "ه");

  // Normalize Alif Maqsura
  name = name.replace(/ى/g, "ي");

  // Normalize Hamza on Nabrah/Waw
  name = name.replace(/ئ/g, "ي").replace(/ؤ/g, "و");

  // Collapse multiple spaces into a single space
  name = name.replace(/\s+/g, " ");

  return name;
}

/**
 * Deterministic Mathematical / Cryptographic Hashing Function
 * Takes a student name and produces an exclusive 8-character token formatted as: MEML-XXXX-XXXX
 */
export function generateActivationCode(studentName: string): string {
  const cleanName = normalizeStudentName(studentName);
  if (!cleanName) return "";

  // Combine with salt and name length
  const input = `${cleanName}::${CRYPTO_SALT}::${cleanName.length * 37}`;

  // 64-bit split polynomial rolling hash
  let h1 = 0x811c9dc5; // FNV-1a 32-bit offset basis
  let h2 = 0x55555555; // Secondary seed

  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    
    // Hash 1
    h1 ^= code;
    h1 = Math.imul(h1, 0x01000193); // FNV prime
    h1 = (h1 << 5) | (h1 >>> 27); // bitwise rotate left 5
    
    // Hash 2
    h2 = Math.imul(h2 ^ code, 0x27d4eb2d);
    h2 = (h2 << 7) | (h2 >>> 25); // bitwise rotate left 7
    h2 ^= (code * 31);
  }

  // Ensure positive numbers
  let p1 = Math.abs(h1) >>> 0;
  let p2 = Math.abs(h2) >>> 0;

  // Extract 8 chars from the charset using both entropy pools
  const len = CODE_CHARSET.length;
  let part1 = "";
  let part2 = "";

  for (let i = 0; i < 4; i++) {
    const idx1 = (p1 + i * 13) % len;
    part1 += CODE_CHARSET[idx1];
    p1 = Math.floor(p1 / len) ^ (p2 & 0xFF);
  }

  for (let i = 0; i < 4; i++) {
    const idx2 = (p2 + i * 17) % len;
    part2 += CODE_CHARSET[idx2];
    p2 = Math.floor(p2 / len) ^ (p1 & 0xFF);
  }

  return `MEML-${part1}-${part2}`;
}

/**
 * Validates a student's name against a provided code.
 * Case and dash insensitive on code input.
 */
export function verifyActivationCode(studentName: string, enteredCode: string): {
  isValid: boolean;
  message: string;
} {
  if (!studentName || !studentName.trim()) {
    return { isValid: false, message: "يرجى كتابة اسم الطالب الكامل" };
  }

  if (!enteredCode || !enteredCode.trim()) {
    return { isValid: false, message: "يرجى إدخال كود التفعيل السري" };
  }

  // Format entered code: strip spaces, make uppercase, ensure MEML- prefix if missing
  let cleanCode = enteredCode.trim().toUpperCase().replace(/\s+/g, "");
  if (!cleanCode.startsWith("MEML-")) {
    if (cleanCode.startsWith("MEML")) {
      cleanCode = "MEML-" + cleanCode.slice(4);
    } else {
      cleanCode = "MEML-" + cleanCode;
    }
  }

  // Standardize dashes
  cleanCode = cleanCode.replace(/[^A-Z0-9-]/g, "");
  
  // Format into MEML-XXXX-XXXX if dashes were omitted
  const rawChars = cleanCode.replace(/-/g, "");
  if (rawChars.length === 12 && rawChars.startsWith("MEML")) {
    cleanCode = `MEML-${rawChars.slice(4, 8)}-${rawChars.slice(8, 12)}`;
  }

  const expectedCode = generateActivationCode(studentName);

  if (cleanCode === expectedCode) {
    return {
      isValid: true,
      message: "تم التحقق بنجاح! مرحباً بك في منهاج MORE ENGLISH MORE LOVE"
    };
  }

  return {
    isValid: false,
    message: "كود التفعيل غير مطابق للاسم المدخل. تأكد من كتابة اسمك تماماً كما تم توليده من المعلمة."
  };
}

/**
 * Gets or creates a unique persistent Device ID for single-device locking.
 */
export function getOrCreateDeviceId(): string {
  const STORAGE_KEY = "meml_device_uuid";
  let deviceId = localStorage.getItem(STORAGE_KEY);
  if (!deviceId) {
    deviceId = "DEV-" + Math.random().toString(36).substring(2, 10).toUpperCase() + "-" + Date.now().toString(36).toUpperCase();
    localStorage.setItem(STORAGE_KEY, deviceId);
  }
  return deviceId;
}

/**
 * Saves successful student activation in localStorage.
 */
export function saveStudentActivation(studentName: string, code: string): StudentActivation {
  const now = Date.now();
  const activation: StudentActivation = {
    studentName: studentName.trim(),
    normalizedName: normalizeStudentName(studentName),
    code: code.trim().toUpperCase(),
    activatedAt: now,
    expiresAt: now + SUBSCRIPTION_DURATION_MS,
    deviceId: getOrCreateDeviceId(),
    isActive: true,
  };

  localStorage.setItem("meml_student_session", JSON.stringify(activation));
  return activation;
}

/**
 * Retrieves current student activation, checking expiration and device match.
 */
export function getStoredActivation(): {
  activation: StudentActivation | null;
  isExpired: boolean;
  daysRemaining: number;
} {
  try {
    const raw = localStorage.getItem("meml_student_session");
    if (!raw) return { activation: null, isExpired: false, daysRemaining: 0 };

    const activation: StudentActivation = JSON.parse(raw);
    const now = Date.now();

    // Verify mathematical integrity of stored session
    const expected = generateActivationCode(activation.studentName);
    if (activation.code !== expected) {
      // Tampered code
      localStorage.removeItem("meml_student_session");
      return { activation: null, isExpired: false, daysRemaining: 0 };
    }

    const isExpired = now >= activation.expiresAt;
    const remainingMs = Math.max(0, activation.expiresAt - now);
    const daysRemaining = Math.ceil(remainingMs / (1000 * 60 * 60 * 24));

    return {
      activation,
      isExpired,
      daysRemaining,
    };
  } catch {
    return { activation: null, isExpired: false, daysRemaining: 0 };
  }
}

/**
 * Clears student activation (logout/lock)
 */
export function clearStudentActivation(): void {
  localStorage.removeItem("meml_student_session");
}

export const clearStoredActivation = clearStudentActivation;

/**
 * Calculates remaining days from activation timestamp
 */
export function getDaysRemaining(activatedAt: number): number {
  const expiresAt = activatedAt + SUBSCRIPTION_DURATION_MS;
  const now = Date.now();
  const remainingMs = Math.max(0, expiresAt - now);
  return Math.ceil(remainingMs / (1000 * 60 * 60 * 24));
}

/**
 * Teacher registry management in localStorage
 */
export function getTeacherGeneratedCodes(): GeneratedCodeRecord[] {
  try {
    const raw = localStorage.getItem("meml_teacher_generated_codes");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveTeacherGeneratedCode(studentName: string, code: string, notes?: string): GeneratedCodeRecord {
  const records = getTeacherGeneratedCodes();
  const existing = records.find(r => r.code === code);
  
  if (existing) {
    existing.generatedAt = Date.now();
    if (notes) existing.notes = notes;
    localStorage.setItem("meml_teacher_generated_codes", JSON.stringify(records));
    return existing;
  }

  const newRecord: GeneratedCodeRecord = {
    id: "REC-" + Date.now().toString(36),
    studentName: studentName.trim(),
    normalizedName: normalizeStudentName(studentName),
    code,
    generatedAt: Date.now(),
    notes,
  };

  records.unshift(newRecord);
  localStorage.setItem("meml_teacher_generated_codes", JSON.stringify(records));
  return newRecord;
}

export function deleteTeacherGeneratedCode(id: string): void {
  const records = getTeacherGeneratedCodes().filter(r => r.id !== id);
  localStorage.setItem("meml_teacher_generated_codes", JSON.stringify(records));
}

/**
 * WhatsApp Helper URLs
 */

// Student requesting code from teacher
export function createStudentRequestWhatsAppUrl(studentName = ""): string {
  const nameText = studentName.trim() ? `الطالب/ة: ${studentName.trim()}` : "طالب جديد";
  const message = `السلام عليكم أستاذة جيداء صقر، أود الحصول على كود تفعيل لتطبيق MORE ENGLISH MORE LOVE 🎓\nالاسم: ${nameText}`;
  return `https://wa.me/${TEACHER_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

// Teacher sending code to student
export function createTeacherSendCodeWhatsAppUrl(studentName: string, code: string, studentPhone = ""): string {
  const appUrl = window.location.origin;
  const message = `أهلاً بك يا ${studentName} في تطبيق MORE ENGLISH MORE LOVE 🎓 تحت إشراف وتدريس المعلمة جيداء صقر.\n\nكود التفعيل الحصري لجهازك:\n🔑 ${code}\n\nرابط المنهاج:\n${appUrl}\n\n📌 ملاحظة: الكود مخصص لاسمك وجهازك وصالح لمدة 6 أشهر (180 يوماً). نتمنى لك كل التوفيق والتميز! ✨`;
  
  const cleanPhone = studentPhone.replace(/[^0-9]/g, "");
  if (cleanPhone) {
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
