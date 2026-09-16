import React, { useState } from 'react';
import { Volume2, MessageSquare, Check, Sparkles, Image as ImageIcon } from 'lucide-react';
import { SPEAKING_ACTIVITIES, SPEAKING_PHOTO_ANALYSIS, UNIT_QUOTES } from '../data/curriculumData';
import { playEnglishSpeech } from '../utils/speech';

export const SpeakingSection: React.FC = () => {
  const [photoAnswers, setPhotoAnswers] = useState<Record<number, string>>({});
  const [showPhotoAnswers, setShowPhotoAnswers] = useState(false);

  const handlePhotoEraSelect = (id: number, era: string) => {
    setPhotoAnswers(prev => ({ ...prev, [id]: era }));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-blue-900/60 via-slate-900 to-cyan-900/40 border border-blue-800/60 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-cyan-400 flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold">Section 1 • Unit 1: Future Plans</span>
            <h2 className="text-2xl font-bold text-white">Speaking & Conversation • مهارة المحادثة والتحدث</h2>
          </div>
        </div>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          تطوير مهارة التحدث باللغة الإنجليزية، التعبير عن المشاعر المدرسية، ومقارنة التعليم بين الماضي والحاضر والمستقبل.
        </p>
      </div>

      {/* Inspiring Quotes */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-base font-bold text-cyan-300 mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>مقولات ملهمة في التعليم (Inspiring Quotes on Education)</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {UNIT_QUOTES.map((q, idx) => (
            <div key={idx} className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-500/40 transition group">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-english font-medium text-slate-200 italic leading-relaxed">
                    "{q.quote}"
                  </p>
                  <button
                    id={`btn-speech-quote-${idx}`}
                    type="button"
                    onClick={() => playEnglishSpeech(q.quote)}
                    title="استمع للنطق الإنجليزي"
                    className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-cyan-600/30 text-slate-400 group-hover:text-cyan-300 transition shrink-0 cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-slate-400">
                  {q.quoteAr}
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] font-semibold text-cyan-400">
                — {q.author}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schooldays Questions & Model Answers */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <span>أسئلة المحادثة المدرسية وإجاباتها النموذجية (Speaking Questions)</span>
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          اضغط على أيقونة الصوت لسماع السؤال والإجابة بنطق إنجليزي سليم ومتقن:
        </p>

        <div className="space-y-4">
          {SPEAKING_ACTIVITIES.map((act) => (
            <div key={act.id} className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center font-english">
                      {act.id}
                    </span>
                    <h4 className="text-base font-english font-bold text-white">
                      {act.question}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 mr-8">
                    {act.questionAr}
                  </p>
                </div>

                <button
                  id={`btn-speech-speaking-q-${act.id}`}
                  type="button"
                  onClick={() => playEnglishSpeech(`${act.question}. Answer: ${act.modelAnswer}`)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600/30 text-slate-300 hover:text-cyan-300 border border-slate-700 text-xs transition shrink-0 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>استماع</span>
                </button>
              </div>

              {/* Model Answer Box */}
              <div className="mt-3.5 mr-8 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  Model Answer • الإجابة النموذجية:
                </div>
                <div className="text-sm font-english font-semibold text-white">
                  {act.modelAnswer}
                </div>
                <div className="text-xs text-emerald-300/90 mt-0.5">
                  {act.modelAnswerAr}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Comparison Interactive Activity */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-cyan-400" />
              <span>نشاط تصنيف الصور (Look at the Photos: Past, Present, Future)</span>
            </h3>
            <p className="text-xs text-slate-400">
              صنف كل صورة وفق الزمن المناسب لها (الماضي Past - الحاضر Present - المستقبل Future)
            </p>
          </div>

          <button
            id="btn-toggle-photo-answers"
            type="button"
            onClick={() => setShowPhotoAnswers(!showPhotoAnswers)}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-cyan-300 transition cursor-pointer self-start"
          >
            {showPhotoAnswers ? 'إخفاء الحل النموذجي' : 'إظهار الحل النموذجي المعتمد'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SPEAKING_PHOTO_ANALYSIS.map((item) => {
            const selected = photoAnswers[item.id];
            const isCorrect = selected === item.era;

            return (
              <div key={item.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-blue-600/30 text-cyan-300 font-bold flex items-center justify-center text-xs font-english">
                    #{item.id}
                  </span>
                  <button
                    id={`btn-speech-photo-${item.id}`}
                    type="button"
                    onClick={() => playEnglishSpeech(item.label)}
                    className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div>
                  <h4 className="font-english font-bold text-sm text-white">{item.label}</h4>
                  <p className="text-xs text-slate-400">{item.labelAr}</p>
                </div>

                {/* Selection Buttons */}
                <div className="grid grid-cols-3 gap-1.5 pt-2">
                  {(['past', 'present', 'future'] as const).map(eraKey => (
                    <button
                      key={eraKey}
                      id={`btn-photo-${item.id}-${eraKey}`}
                      type="button"
                      onClick={() => handlePhotoEraSelect(item.id, eraKey)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-bold transition cursor-pointer capitalize ${
                        selected === eraKey
                          ? (eraKey === item.era
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white')
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      {eraKey}
                    </button>
                  ))}
                </div>

                {/* Model Answer preview */}
                {showPhotoAnswers && (
                  <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-300 flex items-center justify-between">
                    <span>الحل الصحيح:</span>
                    <span className="font-bold capitalize font-english">{item.era}</span>
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
