import React, { useState } from 'react';
import { 
  KeyRound, 
  UserCheck, 
  Sparkles, 
  MessageCircle, 
  Lock, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  verifyActivationCode, 
  saveStudentActivation, 
  createStudentRequestWhatsAppUrl, 
  TEACHER_WHATSAPP, 
  ADMIN_PIN,
  TEACHER_NAME
} from '../utils/security';
import { StudentActivation } from '../types';
import { SocialFooter } from './SocialFooter';

interface LockScreenProps {
  onSuccessfulActivation: (activation: StudentActivation) => void;
  onOpenTeacherPortal: () => void;
  isExpiredSession?: boolean;
}

export const LockScreen: React.FC<LockScreenProps> = ({
  onSuccessfulActivation,
  onOpenTeacherPortal,
  isExpiredSession = false,
}) => {
  const [studentName, setStudentName] = useState('');
  const [activationCode, setActivationCode] = useState('');
  const [errorMsg, setErrorMsg] = useState(isExpiredSession ? 'انتهت صلاحية اشتراكك السابق (6 أشهر). يرجى تجديد كود التفعيل مع المعلمة.' : '');
  const [loading, setLoading] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');

  // Handle format of activation code input (auto-prefix MEML- if user starts typing)
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.toUpperCase();
    setActivationCode(val);
    if (errorMsg) setErrorMsg('');
  };

  const handleActivation = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!studentName.trim()) {
      setErrorMsg('يرجى كتابة اسمك الكامل كما سُجّل عند المعلمة');
      return;
    }

    if (!activationCode.trim()) {
      setErrorMsg('يرجى إدخال كود التفعيل السري (MEML-XXXX-XXXX)');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const result = verifyActivationCode(studentName, activationCode);

      if (result.isValid) {
        // Fire celebration confetti!
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }

        const activation = saveStudentActivation(studentName, activationCode);
        onSuccessfulActivation(activation);
      } else {
        setErrorMsg(result.message);
      }
      setLoading(false);
    }, 450);
  };

  const handleTeacherPinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === ADMIN_PIN) {
      setShowPinModal(false);
      setPinInput('');
      setPinError('');
      onOpenTeacherPortal();
    } else {
      setPinError('الرمز السري للمعلمة غير صحيح!');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden selection:bg-cyan-500 selection:text-white">
      {/* Ambient background glow effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Navbar Header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="font-english font-bold text-sm tracking-wider text-white">
              MORE ENGLISH MORE LOVE
            </div>
            <div className="text-[11px] text-cyan-300 font-medium">
              المنهاج التفاعلي المعتمد
            </div>
          </div>
        </div>

        {/* Teacher Portal Trigger Button */}
        <button
          id="btn-teacher-portal-trigger"
          type="button"
          onClick={() => setShowPinModal(true)}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-300 hover:text-white transition shadow-sm hover:border-cyan-500/50 cursor-pointer"
        >
          <Lock className="w-3.5 h-3.5 text-cyan-400" />
          <span>بوابة المعلمة</span>
        </button>
      </header>

      {/* Main Lock Screen Card Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl">
          
          {/* Main Card */}
          <div className="bg-slate-900/85 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-blue-950/40 relative overflow-hidden">
            {/* Top Cyan Glowing Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

            {/* Title & Teacher Supervisor Branding */}
            <div className="text-center space-y-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>النسخة التعليمية الذكية الحصرية</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold font-english tracking-wide bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent">
                MORE ENGLISH MORE LOVE
              </h1>

              <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-amber-300/95 bg-amber-500/10 border border-amber-500/20 rounded-xl py-2 px-4 max-w-md mx-auto">
                <GraduationCap className="w-5 h-5 text-amber-400 shrink-0" />
                <span>بإشراف وتدريس المعلمة جيداء صقر</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                هذا التطبيق مقفل ومحمي، يُرجى إدخال اسمك وكود التفعيل الحصري الممنوح لك من قبل المعلمة للدخول للمنهاج.
              </p>
            </div>

            {/* Error Notification Alert */}
            {errorMsg && (
              <div className="mb-6 p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs sm:text-sm flex items-start gap-2.5 animate-shake">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div className="flex-1 leading-relaxed">{errorMsg}</div>
              </div>
            )}

            {/* Activation Form */}
            <form onSubmit={handleActivation} className="space-y-5">
              {/* Student Full Name Input */}
              <div className="space-y-1.5 text-right">
                <label 
                  htmlFor="input-student-name"
                  className="block text-xs font-semibold text-slate-300"
                >
                  اسم الطالب الكامل:
                </label>
                <div className="relative">
                  <input
                    id="input-student-name"
                    type="text"
                    value={studentName}
                    onChange={(e) => {
                      setStudentName(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="مثال: أحمد محمد خالد"
                    className="w-full bg-slate-950/70 border border-slate-700/80 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 text-sm transition outline-none"
                    dir="auto"
                    required
                  />
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                    <UserCheck className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400">
                  اكتب اسمك كما زودت المعلمة به تماماً (مطابق للكود المشفر).
                </p>
              </div>

              {/* Secret Activation Code Input */}
              <div className="space-y-1.5 text-right">
                <label 
                  htmlFor="input-activation-code"
                  className="block text-xs font-semibold text-slate-300"
                >
                  كود التفعيل السري:
                </label>
                <div className="relative">
                  <input
                    id="input-activation-code"
                    type="text"
                    value={activationCode}
                    onChange={handleCodeChange}
                    placeholder="MEML-XXXX-XXXX"
                    className="w-full bg-slate-950/70 border border-slate-700/80 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 rounded-xl px-4 py-3.5 text-cyan-300 font-english font-mono text-base tracking-widest placeholder:tracking-normal placeholder:font-sans placeholder:text-slate-500 transition outline-none uppercase text-left"
                    dir="ltr"
                    required
                  />
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                    <KeyRound className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400">
                  صيغة الكود المعتمدة: <span className="font-mono text-cyan-400 font-english">MEML-XXXX-XXXX</span>
                </p>
              </div>

              {/* Submit Activation Button */}
              <button
                id="btn-activate-submit"
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/30 transition transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    <span>تفعيل الحساب والدخول للمنهاج</span>
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </>
                )}
              </button>
            </form>

            {/* How to get a code section with WhatsApp Direct Button */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 text-center space-y-3">
              <div className="text-xs text-slate-300 font-medium">
                كيف أحصل على كود تفعيل؟
              </div>
              <p className="text-xs text-slate-400">
                تواصل مباشرة مع المعلمة <span className="text-cyan-300 font-semibold">{TEACHER_NAME}</span> عبر واتساب للحصول على كود التفعيل المخصص لجهازك:
              </p>

              <a
                id="btn-whatsapp-request-code"
                href={createStudentRequestWhatsAppUrl(studentName)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-700/25 transition cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition" />
                <span>طلب الكود عبر واتساب المعلمة (+963933036079)</span>
              </a>
              
              <div className="text-[11px] text-slate-500">
                ⚡ سيتم إرسال رسالة ترحيبية تلقائية تطلب الكود باسمك من المعلمة مباشرة
              </div>
            </div>

          </div>

          {/* Quick Features Micro Badge */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              صلاحية 6 أشهر (180 يوماً)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              كود مشفر حصري لكل طالب
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              حفظ تلقائي لجهاز الطالب
            </span>
          </div>

        </div>
      </main>

      {/* PIN Authentication Modal for Teacher Portal */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-sm w-full p-6 shadow-2xl relative">
            <button
              id="btn-close-pin-modal"
              type="button"
              onClick={() => {
                setShowPinModal(false);
                setPinError('');
                setPinInput('');
              }}
              className="absolute top-4 left-4 text-slate-400 hover:text-white text-sm cursor-pointer"
            >
              ✕
            </button>

            <div className="text-center space-y-2 mb-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">بوابة المعلمة جيداء صقر</h3>
              <p className="text-xs text-slate-400">
                أدخلي الرمز السري الإداري الدائم للوصول للوحة تحكم وتوليد الأكواد
              </p>
            </div>

            {pinError && (
              <div className="mb-4 p-2.5 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs text-center">
                {pinError}
              </div>
            )}

            <form onSubmit={handleTeacherPinSubmit} className="space-y-4">
              <div className="space-y-1 text-right">
                <label 
                  htmlFor="input-teacher-pin"
                  className="block text-xs font-semibold text-slate-300"
                >
                  الرمز السري (Admin PIN):
                </label>
                <input
                  id="input-teacher-pin"
                  type="password"
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError('');
                  }}
                  placeholder="أدخلي الرمز السري هنا..."
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-center font-mono text-base text-white tracking-widest outline-none"
                  autoFocus
                  required
                />
              </div>

              <div className="flex gap-2">
                <button
                  id="btn-confirm-teacher-pin"
                  type="submit"
                  className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition cursor-pointer"
                >
                  دخول اللوحة
                </button>
                <button
                  id="btn-cancel-teacher-pin"
                  type="button"
                  onClick={() => setShowPinModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Social Footer */}
      <SocialFooter />
    </div>
  );
};
