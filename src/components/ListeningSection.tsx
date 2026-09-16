import React, { useState } from 'react';
import { Headphones, Play, Pause, Volume2, CheckCircle2, Check, X, Sparkles } from 'lucide-react';
import { LISTENING_DIALOGUES } from '../data/curriculumData';
import { playEnglishSpeech } from '../utils/speech';

export const ListeningSection: React.FC = () => {
  const [selectedDialogueId, setSelectedDialogueId] = useState<string>('vacation-dialogue');
  const [tfAnswers, setTfAnswers] = useState<Record<number, boolean>>({});
  const [mcqAnswers, setMcqAnswers] = useState<Record<number, string>>({});

  const activeDialogue = LISTENING_DIALOGUES.find(d => d.id === selectedDialogueId) || LISTENING_DIALOGUES[0];

  const handleTfSelect = (id: number, val: boolean) => {
    setTfAnswers(prev => ({ ...prev, [id]: val }));
  };

  const handleMcqSelect = (id: number, opt: string) => {
    setMcqAnswers(prev => ({ ...prev, [id]: opt }));
  };

  const playEntireDialogue = () => {
    const fullText = activeDialogue.transcript
      .map(t => `${t.speaker}: ${t.text}`)
      .join('. ');
    playEnglishSpeech(fullText, 0.85);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-900/60 via-slate-900 to-orange-900/40 border border-amber-800/60 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-amber-600/30 text-amber-400 flex items-center justify-center">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Section 5 • Unit 1: Future Plans</span>
            <h2 className="text-2xl font-bold text-white">Listening & Dialogues • مهارة الاستماع والحوارات</h2>
          </div>
        </div>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          الاستماع إلى المحادثات الإنجليزية الصفية والنكات المدرسية التفاعلية مع أسئلة الصح/الخطأ والاختيارات المعتمدة.
        </p>
      </div>

      {/* Dialogue Selection Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          {LISTENING_DIALOGUES.map(d => (
            <button
              key={d.id}
              id={`btn-select-dialogue-${d.id}`}
              type="button"
              onClick={() => {
                setSelectedDialogueId(d.id);
                setTfAnswers({});
                setMcqAnswers({});
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-2 ${
                selectedDialogueId === d.id
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Headphones className="w-4 h-4" />
              <span>{d.titleAr}</span>
            </button>
          ))}
        </div>

        {/* Play entire track */}
        <button
          id="btn-play-entire-dialogue"
          type="button"
          onClick={playEntireDialogue}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition cursor-pointer shadow-lg shadow-amber-600/25"
        >
          <Volume2 className="w-4 h-4" />
          <span>تشغيل المقطع الصوتي كاملاً</span>
        </button>
      </div>

      {/* Dialogue Transcript Hub */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-bold text-white font-english">
            {activeDialogue.title}
          </h3>
          <span className="text-xs text-slate-400">
            انقر على أي سطر للاستماع إليه منفرداً
          </span>
        </div>

        <div className="space-y-3">
          {activeDialogue.transcript.map((line, idx) => (
            <div 
              key={idx} 
              className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 flex items-start justify-between gap-4 hover:border-amber-500/40 transition group"
            >
              <div className="space-y-1 text-left" dir="ltr">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-english">
                  {line.speaker}
                </span>
                <p className="text-sm sm:text-base font-english text-slate-200 leading-relaxed">
                  "{line.text}"
                </p>
              </div>

              <button
                id={`btn-speech-dialogue-line-${idx}`}
                type="button"
                onClick={() => playEnglishSpeech(line.text)}
                className="p-2 rounded-lg bg-slate-900 group-hover:bg-amber-600/30 text-slate-400 group-hover:text-amber-300 transition shrink-0 cursor-pointer"
                title="استمع لهذا السطر"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Task A: True or False Statements */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>التمرين الأول: صح أم خطأ (Decide if the statements are True or False)</span>
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          استمع للمحادثة واختر (True / False) لكل عبارة مع التحقق الفوري:
        </p>

        <div className="space-y-4">
          {activeDialogue.trueFalse.map((item) => {
            const userChoice = tfAnswers[item.id];
            const isAnswered = userChoice !== undefined;
            const isCorrect = userChoice === item.answer;

            return (
              <div key={item.id} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-english text-base text-white text-left font-semibold" dir="ltr">
                      {item.id}- {item.question}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.questionAr}
                    </p>
                  </div>

                  {/* Buttons True / False */}
                  <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                    <button
                      id={`btn-tf-${item.id}-true`}
                      type="button"
                      onClick={() => handleTfSelect(item.id, true)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                        userChoice === true
                          ? (item.answer === true
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white')
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      True (صح)
                    </button>

                    <button
                      id={`btn-tf-${item.id}-false`}
                      type="button"
                      onClick={() => handleTfSelect(item.id, false)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                        userChoice === false
                          ? (item.answer === false
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white')
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      False (خطأ)
                    </button>
                  </div>
                </div>

                {isAnswered && (
                  <div className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                    isCorrect
                      ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-950/20 border-rose-500/30 text-rose-300'
                  }`}>
                    <span>{item.explanation}</span>
                    <span className="font-bold font-english uppercase">
                      Answer: {item.answer ? 'True' : 'False'}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Task B: Multiple Choice Questions */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-2">
          التمرين الثاني: اختيار الإجابة الصحيحة (Choose the right answer a, b or c)
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          اختر الإجابة الأدق لكل سؤال:
        </p>

        <div className="space-y-4">
          {activeDialogue.mcqs.map((mcq) => {
            const userChoice = mcqAnswers[mcq.id];
            const isAnswered = userChoice !== undefined;
            const isCorrect = userChoice === mcq.correctAnswer;

            return (
              <div key={mcq.id} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <div>
                  <h4 className="font-english text-base text-white text-left font-semibold" dir="ltr">
                    {mcq.id}- {mcq.question}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {mcq.questionAr}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                  {mcq.options.map((opt, i) => (
                    <button
                      key={i}
                      id={`mcq-btn-${mcq.id}-${i}`}
                      type="button"
                      onClick={() => handleMcqSelect(mcq.id, opt)}
                      className={`p-3 rounded-xl text-xs font-english text-left border transition cursor-pointer ${
                        userChoice === opt
                          ? (opt === mcq.correctAnswer
                              ? 'bg-emerald-600 border-emerald-500 text-white font-bold'
                              : 'bg-rose-600 border-rose-500 text-white font-bold')
                          : 'bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                      }`}
                      dir="ltr"
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {isAnswered && (
                  <div className={`p-2.5 rounded-lg text-xs flex items-center gap-2 ${
                    isCorrect ? 'text-emerald-400 bg-emerald-950/20' : 'text-rose-400 bg-rose-950/20'
                  }`}>
                    {isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                    <span>الإجابة النموذجية المعتمدة: <strong>{mcq.correctAnswer}</strong></span>
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
