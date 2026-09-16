import React, { useState, useEffect } from 'react';
import { 
  KeyRound, 
  Copy, 
  Check, 
  Send, 
  MessageCircle, 
  Trash2, 
  Search, 
  UserPlus, 
  BookOpen, 
  LogOut, 
  CheckCircle2, 
  Sparkles,
  Phone,
  Calendar,
  Shield,
  FileSpreadsheet
} from 'lucide-react';
import { 
  generateActivationCode, 
  saveTeacherGeneratedCode, 
  getTeacherGeneratedCodes, 
  deleteTeacherGeneratedCode,
  createTeacherSendCodeWhatsAppUrl,
  TEACHER_NAME,
  TEACHER_NAME_EN,
  verifyActivationCode
} from '../utils/security';
import { GeneratedCodeRecord } from '../types';

interface TeacherDashboardProps {
  onBackToCurriculum: () => void;
  onLogoutTeacher: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  onBackToCurriculum,
  onLogoutTeacher,
}) => {
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [records, setRecords] = useState<GeneratedCodeRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'generate' | 'records' | 'verify'>('generate');

  // Verify tab states
  const [verifyName, setVerifyName] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [verifyResult, setVerifyResult] = useState<{ isValid: boolean; message: string } | null>(null);

  useEffect(() => {
    setRecords(getTeacherGeneratedCodes());
  }, []);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;

    const code = generateActivationCode(studentName);
    setGeneratedCode(code);
    
    // Save record to teacher history
    const saved = saveTeacherGeneratedCode(studentName, code, notes || (studentPhone ? `هاتف: ${studentPhone}` : undefined));
    setRecords(getTeacherGeneratedCodes());
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDeleteRecord = (id: string) => {
    if (window.confirm("هل أنتِ متأكدة من حذف هذا السجل؟")) {
      deleteTeacherGeneratedCode(id);
      setRecords(getTeacherGeneratedCodes());
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const result = verifyActivationCode(verifyName, verifyCode);
    setVerifyResult(result);
  };

  const filteredRecords = records.filter(r => 
    r.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-700 flex items-center justify-center text-white shadow-md">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white">لوحة تحكم المعلمة</span>
                <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-cyan-500/20">
                  إشراف: {TEACHER_NAME}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-english">
                Exclusive Activation Code Engine • {TEACHER_NAME_EN}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              id="btn-teacher-view-curriculum"
              type="button"
              onClick={onBackToCurriculum}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold transition cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>استعراض المنهاج</span>
            </button>

            <button
              id="btn-teacher-logout"
              type="button"
              onClick={onLogoutTeacher}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/40 text-slate-300 hover:text-rose-300 border border-slate-700 hover:border-rose-500/30 text-xs font-semibold transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>تسجيل الخروج</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl w-full mx-auto px-4 py-8 flex-1">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
          <button
            id="tab-btn-generate"
            type="button"
            onClick={() => setActiveTab('generate')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === 'generate'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>توليد كود لطالب جديد</span>
          </button>

          <button
            id="tab-btn-records"
            type="button"
            onClick={() => setActiveTab('records')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === 'records'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>سجل الطلاب المولدين ({records.length})</span>
          </button>

          <button
            id="tab-btn-verify"
            type="button"
            onClick={() => setActiveTab('verify')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === 'verify'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>التحقق من كود موجود</span>
          </button>
        </div>

        {/* TAB 1: GENERATE CODE */}
        {activeTab === 'generate' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Form Column */}
            <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="space-y-1 mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>توليد كود التفعيل الرياضي الحصري</span>
                </h2>
                <p className="text-xs text-slate-400">
                  اكتبي اسم الطالب، وسيقوم النظام بتوليد كود بصيغة <span className="font-mono text-cyan-400 font-english">MEML-XXXX-XXXX</span> مبرمج رياضياً لهذا الاسم فقط وصالح لمدة 6 أشهر.
                </p>
              </div>

              <form onSubmit={handleGenerate} className="space-y-4">
                <div className="space-y-1.5 text-right">
                  <label htmlFor="input-gen-student-name" className="block text-xs font-semibold text-slate-300">
                    اسم الطالب الكامل (إلزامي):
                  </label>
                  <input
                    id="input-gen-student-name"
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="مثال: يوسف أحمد العلي"
                    className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition"
                    required
                  />
                  <p className="text-[11px] text-slate-500">
                    الخوارزمية الذكية تتعامل تلقائياً مع الهمزات والتاء المربوطة لتفادي أخطاء الطباعة لدى الطالب.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-right">
                    <label htmlFor="input-gen-phone" className="block text-xs font-semibold text-slate-300">
                      رقم هاتف الطالب / ولي الأمر (اختياري):
                    </label>
                    <input
                      id="input-gen-phone"
                      type="text"
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      placeholder="+963..."
                      className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-white text-sm outline-none transition font-english"
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-1.5 text-right">
                    <label htmlFor="input-gen-notes" className="block text-xs font-semibold text-slate-300">
                      ملاحظات أو الصف (اختياري):
                    </label>
                    <input
                      id="input-gen-notes"
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="مثال: الصف التاسع - شعبة 2"
                      className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-white text-sm outline-none transition"
                    />
                  </div>
                </div>

                <button
                  id="btn-generate-code-submit"
                  type="submit"
                  className="w-full mt-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-cyan-600/25 transition transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <KeyRound className="w-5 h-5" />
                  <span>توليد كود التفعيل فوراً</span>
                </button>
              </form>
            </div>

            {/* Generated Result Column */}
            <div className="lg:col-span-5 flex flex-col">
              {generatedCode ? (
                <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-xl flex-1 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>تم توليد الكود بنجاح</span>
                    </div>

                    <div>
                      <span className="text-xs text-slate-400">الطالب:</span>
                      <h3 className="text-xl font-bold text-white">{studentName}</h3>
                    </div>

                    <div className="bg-slate-950 border-2 border-dashed border-cyan-500/50 rounded-2xl p-5 text-center space-y-2">
                      <span className="text-[11px] text-cyan-300 font-semibold uppercase tracking-wider block">
                        كود التفعيل الحصري
                      </span>
                      <div className="text-2xl sm:text-3xl font-mono font-extrabold text-cyan-300 tracking-wider select-all font-english">
                        {generatedCode}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        صلاحية 180 يوماً من لحظة إدخاله في جهاز الطالب
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2.5 pt-2">
                      <button
                        id="btn-copy-generated-code"
                        type="button"
                        onClick={() => handleCopy(generatedCode)}
                        className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer border border-slate-700 text-xs sm:text-sm"
                      >
                        {copiedCode ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400">تم نسخ الكود للحافظة!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-slate-300" />
                            <span>نسخ الكود</span>
                          </>
                        )}
                      </button>

                      <a
                        id="btn-send-whatsapp-student"
                        href={createTeacherSendCodeWhatsAppUrl(studentName, generatedCode, studentPhone)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer shadow-lg shadow-emerald-700/20 text-xs sm:text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>إرسال رسالة ترحيبية + الكود عبر واتساب</span>
                      </a>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 mt-6 pt-4 border-t border-slate-800/80 text-center">
                    سيفتح التطبيق بهذا الكود على جهاز الطالب فقط، ويبقى مفتوحاً تلقائياً حتى انتهاء الـ 180 يوماً.
                  </div>
                </div>
              ) : (
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex-1 flex flex-col items-center justify-center text-center text-slate-500">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800/60 flex items-center justify-center text-slate-400 mb-4">
                    <KeyRound className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-slate-300 mb-1">لم يتم توليد كود بعد</h4>
                  <p className="text-xs text-slate-500 max-w-xs">
                    اكتبي اسم الطالب في الخانة على اليمين واضغطي "توليد كود التفعيل" لإنشاء كود مشفر فوري.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: RECORDS LIST */}
        {activeTab === 'records' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">سجل الأكواد المولدّة</h3>
                <p className="text-xs text-slate-400">قائمة بجميع الطلاب الذين تم توليد أكواد تفعيل لهم</p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <input
                  id="input-search-records"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="بحث باسم الطالب أو الكود..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 pr-9 text-xs text-white outline-none focus:border-cyan-500"
                />
                <Search className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {filteredRecords.length === 0 ? (
              <div className="text-center py-12 text-slate-500 text-sm">
                لا توجد سجلات مطابقة.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/40">
                      <th className="p-3">اسم الطالب</th>
                      <th className="p-3">كود التفعيل (MEML)</th>
                      <th className="p-3">تاريخ التوليد</th>
                      <th className="p-3">ملاحظات</th>
                      <th className="p-3 text-center">إجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredRecords.map((r) => (
                      <tr key={r.id} className="hover:bg-slate-800/40 transition">
                        <td className="p-3 font-semibold text-white">{r.studentName}</td>
                        <td className="p-3">
                          <span className="font-mono text-cyan-400 font-bold bg-slate-950 px-2.5 py-1 rounded border border-slate-800 font-english">
                            {r.code}
                          </span>
                        </td>
                        <td className="p-3 text-slate-400">
                          {new Date(r.generatedAt).toLocaleDateString('ar-EG', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </td>
                        <td className="p-3 text-slate-400">{r.notes || '-'}</td>
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              id={`btn-copy-${r.id}`}
                              type="button"
                              onClick={() => handleCopy(r.code)}
                              title="نسخ الكود"
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>

                            <a
                              id={`btn-wa-${r.id}`}
                              href={createTeacherSendCodeWhatsAppUrl(r.studentName, r.code)}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="إرسال عبر واتساب"
                              className="p-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 transition cursor-pointer"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </a>

                            <button
                              id={`btn-del-${r.id}`}
                              type="button"
                              onClick={() => handleDeleteRecord(r.id)}
                              title="حذف"
                              className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/25 text-rose-400 transition cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: VERIFY EXISTING CODE */}
        {activeTab === 'verify' && (
          <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="space-y-1 mb-6 text-center">
              <h3 className="text-lg font-bold text-white">التحقق الرياضي من مطابقة كود</h3>
              <p className="text-xs text-slate-400">
                يمكنك التحقق فوراً مما إذا كان أي كود تفعيل مطابقاً لاسم طالب معين
              </p>
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <div className="space-y-1 text-right">
                <label htmlFor="verify-student-name" className="block text-xs font-semibold text-slate-300">
                  اسم الطالب:
                </label>
                <input
                  id="verify-student-name"
                  type="text"
                  value={verifyName}
                  onChange={(e) => {
                    setVerifyName(e.target.value);
                    setVerifyResult(null);
                  }}
                  placeholder="اكتبي اسم الطالب هنا..."
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-white text-sm outline-none"
                  required
                />
              </div>

              <div className="space-y-1 text-right">
                <label htmlFor="verify-student-code" className="block text-xs font-semibold text-slate-300">
                  كود التفعيل للمطابقة:
                </label>
                <input
                  id="verify-student-code"
                  type="text"
                  value={verifyCode}
                  onChange={(e) => {
                    setVerifyCode(e.target.value);
                    setVerifyResult(null);
                  }}
                  placeholder="MEML-XXXX-XXXX"
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-cyan-300 font-mono text-sm uppercase outline-none font-english"
                  dir="ltr"
                  required
                />
              </div>

              <button
                id="btn-verify-match"
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm transition cursor-pointer"
              >
                فحص المطابقة الآن
              </button>
            </form>

            {verifyResult && (
              <div className={`mt-6 p-4 rounded-xl border text-xs sm:text-sm ${
                verifyResult.isValid
                  ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200'
                  : 'bg-rose-500/15 border-rose-500/30 text-rose-200'
              }`}>
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  {verifyResult.isValid ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>الكود صحيح ومطابق بنسبة 100%!</span>
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4 text-rose-400" />
                      <span>الكود غير مطابق لهذا الاسم!</span>
                    </>
                  )}
                </div>
                <div>{verifyResult.message}</div>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
};
