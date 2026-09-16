import React, { useState } from 'react';
import { PenTool, Volume2, CheckCircle2, Copy, Check, Sparkles, HelpCircle } from 'lucide-react';
import { WRITING_SECTION_DATA } from '../data/curriculumData';
import { playEnglishSpeech } from '../utils/speech';

export const WritingSection: React.FC = () => {
  const [studentComposition, setStudentComposition] = useState('');
  const [copiedModel, setCopiedModel] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<'firstDay' | 'futureSchool'>('firstDay');

  // Future school slot puzzle state
  const [slotSelections, setSlotSelections] = useState<Record<number, string>>({});
  const [showFutureAnswers, setShowFutureAnswers] = useState(false);

  const wordCount = studentComposition.trim() ? studentComposition.trim().split(/\s+/).length : 0;

  const handleCopyModel = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedModel(true);
    setTimeout(() => setCopiedModel(false), 2000);
  };

  const handleSlotSelect = (slotIndex: number, phrase: string) => {
    setSlotSelections(prev => ({ ...prev, [slotIndex]: phrase }));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-900/60 via-slate-900 to-pink-900/40 border border-rose-800/60 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-rose-600/30 text-rose-400 flex items-center justify-center">
            <PenTool className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-rose-400 font-bold">Section 6 • Unit 1: Future Plans</span>
            <h2 className="text-2xl font-bold text-white">Writing & Paragraph Construction • مهارة الكتابة والإنشاء</h2>
          </div>
        </div>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          إتقان بناء الفقرات الإنجليزية، قواعد الترقيم، الموضوعات الإنشائية المقررة ونماذج الإجابة الكاملة بإشراف المعلمة جيداء صقر.
        </p>
      </div>

      {/* Topic Selection Bar */}
      <div className="flex items-center gap-3 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
        <button
          id="btn-tab-topic-first-day"
          type="button"
          onClick={() => setSelectedTopic('firstDay')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-2 ${
            selectedTopic === 'firstDay'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25'
              : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <PenTool className="w-4 h-4" />
          <span>الموضوع الأول: يومي الأول في المدرسة (First Day at School)</span>
        </button>

        <button
          id="btn-tab-topic-future-school"
          type="button"
          onClick={() => setSelectedTopic('futureSchool')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-2 ${
            selectedTopic === 'futureSchool'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25'
              : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>الموضوع الثاني: مدرستي المستقبلية (My Future School)</span>
        </button>
      </div>

      {/* TOPIC 1: FIRST DAY AT SCHOOL */}
      {selectedTopic === 'firstDay' && (
        <div className="space-y-6">
          {/* Writing Mechanics Rules Checklist */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-400" />
              <span>قواعد كتابة الفقرة وعلامات الترقيم (Paragraph Writing Rules)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {WRITING_SECTION_DATA.firstDayParagraph.rules.map((item, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800/80 p-3 rounded-xl flex items-center gap-2.5 text-xs text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-[10px] shrink-0 font-english">
                    {idx + 1}
                  </span>
                  <span>{item.rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Model Paragraph Showcase */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-rose-400 font-bold">Standard Model • النموذج المعتمد</span>
                <h4 className="text-xl font-bold text-white font-english">
                  My First Day at School
                </h4>
                <div className="text-xs text-slate-400">موضوع تعبير يومي الأول في المدرسة</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="btn-speech-first-day-model"
                  type="button"
                  onClick={() => playEnglishSpeech(WRITING_SECTION_DATA.firstDayParagraph.modelEn)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                  <span>استمع للنموذج</span>
                </button>

                <button
                  id="btn-copy-first-day-model"
                  type="button"
                  onClick={() => handleCopyModel(WRITING_SECTION_DATA.firstDayParagraph.modelEn)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold cursor-pointer"
                >
                  {copiedModel ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedModel ? 'تم النسخ!' : 'نسخ النص'}</span>
                </button>
              </div>
            </div>

            {/* Model English text */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-base sm:text-lg font-english text-slate-100 leading-relaxed text-left" dir="ltr">
              {WRITING_SECTION_DATA.firstDayParagraph.modelEn}
            </div>

            {/* Model Arabic translation */}
            <div className="bg-rose-950/15 border border-rose-500/20 p-4 rounded-xl text-xs sm:text-sm text-rose-200 leading-relaxed">
              <strong className="text-rose-300 block mb-1">الترجمة العربية النموذجية:</strong>
              {WRITING_SECTION_DATA.firstDayParagraph.modelAr}
            </div>
          </div>

          {/* Student Interactive Scratchpad */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <PenTool className="w-4 h-4 text-cyan-400" />
                <span>مساحة كتابة الطالب التفاعلية (Student Writing Pad)</span>
              </h3>
              <div className="text-xs text-slate-400 font-english font-medium">
                Word Count: <span className="text-cyan-400 font-bold">{wordCount}</span> words
              </div>
            </div>

            <textarea
              id="textarea-student-writing"
              value={studentComposition}
              onChange={(e) => setStudentComposition(e.target.value)}
              placeholder="Start writing your paragraph here in English... (My first day at school was...)"
              rows={6}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white font-english text-sm sm:text-base outline-none focus:border-rose-500 leading-relaxed"
              dir="ltr"
            />

            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>تأكد من بدء كل جملة بحرف كبير (Capital Letter) وإنهائها بنقطة (.)</span>
              {studentComposition.trim() && (
                <button
                  id="btn-copy-student-composition"
                  type="button"
                  onClick={() => handleCopyModel(studentComposition)}
                  className="text-cyan-400 hover:text-cyan-300 cursor-pointer font-bold"
                >
                  نسخ كتابتك
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TOPIC 2: FUTURE SCHOOL PARAGRAPH COMPLETION */}
      {selectedTopic === 'futureSchool' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white font-english">
                  My Future School (تمرين إكمال فقرة مدرستي المستقبلية)
                </h3>
                <p className="text-xs text-slate-400">
                  تمرين الصفحة 11 من كتاب المنهاج: أكمل الفراغات باستخدام العبارات الخمس في الصندوق:
                </p>
              </div>

              <button
                id="btn-toggle-future-school-answers"
                type="button"
                onClick={() => setShowFutureAnswers(!showFutureAnswers)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-rose-300 transition cursor-pointer self-start"
              >
                {showFutureAnswers ? 'إخفاء الإجابة النموذجية' : 'إظهار الإجابة النموذجية الكاملة'}
              </button>
            </div>

            {/* Phrases Box */}
            <div className="bg-slate-950 p-4 rounded-xl border border-dashed border-slate-700 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Box of Phrases (الصندوق المعتمد):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {WRITING_SECTION_DATA.futureSchoolParagraph.boxPhrases.map((phrase, i) => (
                  <div key={phrase.id} className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-english font-bold text-xs text-white" dir="ltr">{phrase.text}</div>
                      <div className="text-[10px] text-slate-400">{phrase.textAr}</div>
                    </div>
                    <span className="w-5 h-5 rounded bg-slate-800 text-slate-400 text-[10px] font-bold flex items-center justify-center font-english">
                      {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Paragraph with Slots */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                Full Paragraph Text:
              </h4>

              <p className="text-base sm:text-lg font-english text-slate-100 leading-relaxed text-left" dir="ltr">
                My future school <strong className="text-cyan-400 underline decoration-cyan-500 underline-offset-4">(1) should be designed</strong> with much care on health and well-being. Students can easily surf the net from 3D screens. <strong className="text-cyan-400 underline decoration-cyan-500 underline-offset-4">(2) Teachers and students</strong> will be engaged in virtual reality screens and discuss different topics <strong className="text-cyan-400 underline decoration-cyan-500 underline-offset-4">(3) in their laboratories</strong>. Exams can <strong className="text-cyan-400 underline decoration-cyan-500 underline-offset-4">(4) be done electronically</strong>. Planners and designers should <strong className="text-cyan-400 underline decoration-cyan-500 underline-offset-4">(5) put safety as their major concern</strong>.
              </p>

              {/* Translation */}
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200 leading-relaxed">
                <strong className="text-cyan-400 block mb-1">الترجمة الكاملة للفقرة:</strong>
                {WRITING_SECTION_DATA.futureSchoolParagraph.translationAr}
              </div>

              {/* Audio Listen */}
              <button
                id="btn-speech-future-school-paragraph"
                type="button"
                onClick={() => playEnglishSpeech(WRITING_SECTION_DATA.futureSchoolParagraph.paragraphTemplate.replace(/\[|\]|\(\d\)/g, ''))}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>استمع لقراءة الفقرة كاملة بنطق إنجليزي</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
