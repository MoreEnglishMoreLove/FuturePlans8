import React, { useState } from 'react';
import { BookOpen, Volume2, Languages, HelpCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { READING_PASSAGES } from '../data/curriculumData';
import { playEnglishSpeech } from '../utils/speech';

export const ReadingSection: React.FC = () => {
  const [selectedPassageId, setSelectedPassageId] = useState<string>('school-life');
  const [showArabicTranslation, setShowArabicTranslation] = useState<boolean>(true);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const activePassage = READING_PASSAGES.find(p => p.id === selectedPassageId) || READING_PASSAGES[0];

  const toggleAnswer = (key: string) => {
    setRevealedAnswers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-cyan-900/60 via-slate-900 to-blue-900/40 border border-cyan-800/60 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-600/30 text-cyan-400 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold">Section 2 • Unit 1: Future Plans</span>
            <h2 className="text-2xl font-bold text-white">Reading & Comprehension • القراءة والفهم والاستيعاب</h2>
          </div>
        </div>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          نصوص القراءة المعتمدة في المنهاج مع إمكانية الاستماع الصوتي والترجمة الموازية المفصلة وأسئلة الفهم الدقيقة.
        </p>
      </div>

      {/* Passage Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          {READING_PASSAGES.map(p => (
            <button
              key={p.id}
              id={`btn-select-passage-${p.id}`}
              type="button"
              onClick={() => setSelectedPassageId(p.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-2 ${
                selectedPassageId === p.id
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{p.titleAr} ({p.title})</span>
            </button>
          ))}
        </div>

        {/* Toggle Arabic Translation */}
        <button
          id="btn-toggle-arabic-translation"
          type="button"
          onClick={() => setShowArabicTranslation(!showArabicTranslation)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition cursor-pointer"
        >
          <Languages className="w-4 h-4 text-cyan-400" />
          <span>{showArabicTranslation ? 'إخفاء الترجمة العربية' : 'إظهار الترجمة العربية'}</span>
        </button>
      </div>

      {/* Main Reading Passage Text Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xl font-bold text-white font-english flex items-center gap-2">
            <span>{activePassage.title}</span>
            <span className="text-sm font-sans font-normal text-cyan-400">({activePassage.titleAr})</span>
          </h3>
          <span className="text-xs text-slate-400">
            اضغط على زر الاستماع لسماع كل فقرة بوضوح
          </span>
        </div>

        {activePassage.paragraphs.map((para, idx) => (
          <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-wider font-english">
                <span className="w-5 h-5 rounded bg-cyan-500/20 flex items-center justify-center">
                  P{idx + 1}
                </span>
                <span>Paragraph {idx + 1}</span>
              </div>

              <button
                id={`btn-read-paragraph-${idx}`}
                type="button"
                onClick={() => playEnglishSpeech(para.en)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600/30 text-slate-300 hover:text-cyan-300 border border-slate-700 text-xs transition cursor-pointer shrink-0"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>قراءة الفقرة</span>
              </button>
            </div>

            {/* English Text */}
            <p className="text-base sm:text-lg font-english text-slate-100 leading-relaxed text-left tracking-wide" dir="ltr">
              {para.en}
            </p>

            {/* Parallel Arabic Translation */}
            {showArabicTranslation && (
              <div className="pt-3 border-t border-slate-800/80 text-sm text-cyan-200/90 leading-relaxed bg-cyan-950/15 p-3.5 rounded-xl border border-cyan-500/20">
                <div className="text-[11px] font-bold text-cyan-400 mb-1">الترجمة المعتمدة:</div>
                {para.ar}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Interactive Comprehension Q&A */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" />
          <span>أسئلة الفهم والاستيعاب المعتمدة (Comprehension Questions)</span>
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          حاول الإجابة بنفسك أولاً، ثم اضغط على زر "عرض الإجابة النموذجية" للمطابقة والتحقق.
        </p>

        <div className="space-y-4">
          {[
            {
              id: 'q1',
              question: 'In your opinion, is school important? Why?',
              questionAr: 'هل المدرسة مهمة برأيك؟ ولماذا؟',
              answer: 'Yes, it is. Because it helps us learn and build our future.',
              answerAr: 'نعم، إنها مهمة لأنها تساعدنا على التعلم وبناء مستقبلنا.'
            },
            {
              id: 'q2',
              question: 'What is a kindergarten?',
              questionAr: 'ما هي رياض الأطفال؟',
              answer: 'It is a school for little children at an early age.',
              answerAr: 'هي مدرسة للأطفال الصغار في سن مبكرة.'
            },
            {
              id: 'q3',
              question: 'Why do little children feel depressed on their first day at school?',
              questionAr: 'لماذا يشعر الأطفال الصغار بالاكتئاب والحزن في يومهم الأول؟',
              answer: 'Because they are in a strange place away from their parents.',
              answerAr: 'لأنهم في مكان غريب بعيداً عن والديهم.'
            },
            {
              id: 'q4',
              question: 'When can people decide their future career?',
              questionAr: 'متى يستطيع الناس تحديد مهنتهم المستقبلية؟',
              answer: 'When they grow up and discover their abilities and interests.',
              answerAr: 'عندما يكبرون ويكتشفون قدراتهم واهتماماتهم.'
            },
            {
              id: 'q5',
              question: 'How have the 21st century schools changed?',
              questionAr: 'كيف تغيرت مدارس القرن الحادي والعشرين؟',
              answer: 'They have integrated modern technology (Internet, computers, laptops, mobiles) into education.',
              answerAr: 'لقد دمجت التكنولوجيا الحديثة (الإنترنت والحواسيب والأجهزة الذكية) في التعليم.'
            },
            {
              id: 'q6',
              question: "What does 'they' in bold in the text refer to?",
              questionAr: "إلى ماذا يعود الضمير they في النص؟",
              answer: 'It refers to future schools / schools.',
              answerAr: 'يعود إلى مدارس المستقبل / المدارس.'
            }
          ].map((item) => {
            const isRevealed = revealedAnswers[item.id];
            return (
              <div key={item.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h4 className="text-base font-english font-bold text-white text-left" dir="ltr">
                      {item.question}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.questionAr}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      id={`btn-speech-reading-q-${item.id}`}
                      type="button"
                      onClick={() => playEnglishSpeech(item.question)}
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 cursor-pointer"
                      title="استمع للسؤال"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>

                    <button
                      id={`btn-reveal-reading-ans-${item.id}`}
                      type="button"
                      onClick={() => toggleAnswer(item.id)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold cursor-pointer transition"
                    >
                      <span>{isRevealed ? 'إخفاء الإجابة' : 'عرض الإجابة'}</span>
                      {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {isRevealed && (
                  <div className="mt-3.5 pt-3.5 border-t border-slate-800 p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-emerald-200 animate-fadeIn">
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Model Answer • الإجابة المعتمدة:</span>
                    </div>
                    <div className="text-sm font-english font-semibold text-white text-left" dir="ltr">
                      {item.answer}
                    </div>
                    <div className="text-xs text-emerald-300/90 mt-1">
                      {item.answerAr}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
