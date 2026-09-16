import React, { useState } from 'react';
import { Sparkles, Volume2, CheckCircle2, RotateCcw, Award, Check, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { VOCABULARY_LIST, MATCHING_PAIRS, VOCABULARY_FILL_EXERCISES } from '../data/curriculumData';
import { playEnglishSpeech } from '../utils/speech';

export const VocabularySection: React.FC = () => {
  const [selectedWordId, setSelectedWordId] = useState<string>(VOCABULARY_LIST[0].id);

  // Matching game state
  const [matchedPairs, setMatchedPairs] = useState<Record<number, string>>({});
  const [selectedTermAId, setSelectedTermAId] = useState<number | null>(null);
  const [matchingFeedback, setMatchingFeedback] = useState<string>('');

  // Fill in blanks state
  const [fillAnswers, setFillAnswers] = useState<Record<number, string>>({});
  const [fillResults, setFillResults] = useState<Record<number, boolean>>({});

  const activeWord = VOCABULARY_LIST.find(w => w.id === selectedWordId) || VOCABULARY_LIST[0];

  const handleTermAClick = (id: number) => {
    setSelectedTermAId(id);
    setMatchingFeedback('');
  };

  const handleTermBClick = (matchKey: string) => {
    if (selectedTermAId === null) {
      setMatchingFeedback('يرجى اختيار الكلمة من العمود A أولاً ثم اختيار تعريفها من العمود B');
      return;
    }

    const pair = MATCHING_PAIRS.find(p => p.id === selectedTermAId);
    if (!pair) return;

    if (pair.matchKey === matchKey) {
      // Correct match!
      setMatchedPairs(prev => ({ ...prev, [selectedTermAId]: matchKey }));
      setMatchingFeedback('إجابة صحيحة! أحسنت ✨');
      setSelectedTermAId(null);

      // Check if all matched
      if (Object.keys(matchedPairs).length + 1 === MATCHING_PAIRS.length) {
        try {
          confetti({ particleCount: 80, spread: 60 });
        } catch {
          // ignore
        }
      }
    } else {
      setMatchingFeedback('إجابة غير صحيحة، حاول مجدداً مع هذا المصطلح.');
    }
  };

  const resetMatchingGame = () => {
    setMatchedPairs({});
    setSelectedTermAId(null);
    setMatchingFeedback('');
  };

  const handleFillOptionSelect = (exerciseId: number, option: string) => {
    setFillAnswers(prev => ({ ...prev, [exerciseId]: option }));
    const ex = VOCABULARY_FILL_EXERCISES.find(e => e.id === exerciseId);
    if (ex) {
      const isCorrect = option === ex.correctAnswer;
      setFillResults(prev => ({ ...prev, [exerciseId]: isCorrect }));
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900/60 via-slate-900 to-cyan-900/40 border border-emerald-800/60 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/30 text-emerald-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Section 3 • Unit 1: Future Plans</span>
            <h2 className="text-2xl font-bold text-white">Vocabulary & Key Words • المفردات والكلمات المفتاحية</h2>
          </div>
        </div>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          حفظ وإتقان الكلمات المفتاحية للمنهاج، النطق الصوتي الصحيح، والتدرب التفاعلي على تمارين التوصيل وملء الفراغات.
        </p>
      </div>

      {/* Vocabulary Flashcards Hub */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-2">
          بطاقات المفردات التفاعلية (Interactive Flashcards)
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          انقر على الكلمة للاطلاع على معناها باللغة العربية، وتعريفها الإنجليزي الدقيق، ومثالها وسماع نطقها الصوتي:
        </p>

        {/* Word Chips Slider */}
        <div className="flex flex-wrap gap-2 mb-6">
          {VOCABULARY_LIST.map(item => (
            <button
              key={item.id}
              id={`chip-vocab-${item.id}`}
              type="button"
              onClick={() => setSelectedWordId(item.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-english font-bold transition cursor-pointer flex items-center gap-1.5 ${
                selectedWordId === item.id
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                  : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <span>{item.word}</span>
            </button>
          ))}
        </div>

        {/* Active Word Showcase Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-3">
                <h4 className="text-2xl sm:text-3xl font-extrabold font-english text-white tracking-wide">
                  {activeWord.word}
                </h4>
                {activeWord.partOfSpeech && (
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-semibold font-english">
                    {activeWord.partOfSpeech}
                  </span>
                )}
              </div>
              <p className="text-base font-bold text-amber-300 mt-1">
                {activeWord.translation}
              </p>
            </div>

            <button
              id="btn-speech-active-word"
              type="button"
              onClick={() => playEnglishSpeech(activeWord.word)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-600/20 transition cursor-pointer shrink-0"
            >
              <Volume2 className="w-4 h-4" />
              <span>استمع للنطق الصوتي</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                English Definition (التعريف بالإنجليزية):
              </span>
              <p className="text-sm font-english text-slate-200 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 leading-relaxed text-left" dir="ltr">
                {activeWord.definition}
              </p>
              {activeWord.definitionAr && (
                <p className="text-xs text-slate-400 mt-1 mr-1">
                  {activeWord.definitionAr}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Example in Context (مثال في جملة):
              </span>
              <p className="text-sm font-english text-cyan-200 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 leading-relaxed text-left italic" dir="ltr">
                "{activeWord.example}"
              </p>
              <button
                id="btn-speech-example-sentence"
                type="button"
                onClick={() => playEnglishSpeech(activeWord.example || '')}
                className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer mt-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>استمع للجملة كاملة</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Matching Activity: Column A with Column B */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>لعبة التوصيل التفاعلية (Match Column A with Column B)</span>
            </h3>
            <p className="text-xs text-slate-400">
              اختر الكلمة من العمود A ثم اختر التعريف المناسب لها من العمود B:
            </p>
          </div>

          <button
            id="btn-reset-matching-game"
            type="button"
            onClick={resetMatchingGame}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>إعادة التعيين</span>
          </button>
        </div>

        {matchingFeedback && (
          <div className="mb-4 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 text-xs text-center font-bold">
            {matchingFeedback}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column A */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              العمود A (المصطلح الإنجليزي)
            </div>
            {MATCHING_PAIRS.map((item) => {
              const isMatched = !!matchedPairs[item.id];
              const isSelected = selectedTermAId === item.id;

              return (
                <button
                  key={item.id}
                  id={`match-a-${item.id}`}
                  type="button"
                  disabled={isMatched}
                  onClick={() => handleTermAClick(item.id)}
                  className={`w-full p-3.5 rounded-xl border text-right transition cursor-pointer flex items-center justify-between ${
                    isMatched
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300 opacity-80 cursor-default'
                      : isSelected
                      ? 'bg-cyan-600/30 border-cyan-400 text-white ring-2 ring-cyan-500/30'
                      : 'bg-slate-950 hover:bg-slate-800/80 border-slate-800 text-slate-200'
                  }`}
                >
                  <div>
                    <span className="font-english font-bold text-sm ml-2 text-white">{item.id}- {item.termA}</span>
                    <span className="text-xs text-slate-400">({item.termAr})</span>
                  </div>
                  {isMatched && <Check className="w-4 h-4 text-emerald-400" />}
                </button>
              );
            })}
          </div>

          {/* Column B */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              العمود B (التعريف المطابق)
            </div>
            {MATCHING_PAIRS.map((item) => {
              const isAlreadyMatched = Object.values(matchedPairs).includes(item.matchKey);

              return (
                <button
                  key={item.matchKey}
                  id={`match-b-${item.matchKey}`}
                  type="button"
                  disabled={isAlreadyMatched}
                  onClick={() => handleTermBClick(item.matchKey)}
                  className={`w-full p-3.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between font-english text-xs sm:text-sm ${
                    isAlreadyMatched
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300 opacity-80 cursor-default'
                      : 'bg-slate-950 hover:bg-slate-800/80 border-slate-800 text-slate-300 hover:text-white'
                  }`}
                  dir="ltr"
                >
                  <span>
                    <strong className="text-cyan-400 mr-2">{item.matchKey}-</strong>
                    {item.termB}
                  </span>
                  {isAlreadyMatched && <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fill in the blanks with vocabulary words */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-2">
          تمرين ملء الفراغات بالمفردات (Complete with Vocabulary)
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          اختر الكلمة المناسبة لكل جملة وفق المعنى السياقي:
        </p>

        <div className="space-y-4">
          {VOCABULARY_FILL_EXERCISES.map((ex) => {
            const currentAnswer = fillAnswers[ex.id];
            const isEvaluated = currentAnswer !== undefined;
            const isCorrect = fillResults[ex.id];

            return (
              <div key={ex.id} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-english text-base text-white text-left font-medium" dir="ltr">
                      {ex.id}- {ex.sentenceEn.replace('________', currentAnswer ? `[ ${currentAnswer} ]` : '________')}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {ex.sentenceAr}
                    </p>
                  </div>

                  {isEvaluated && (
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                      isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                    }`}>
                      {isCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                      <span>{isCorrect ? 'صحيح' : 'خطأ'}</span>
                    </span>
                  )}
                </div>

                {/* Options Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {ex.options.map((opt) => (
                    <button
                      key={opt}
                      id={`btn-fill-opt-${ex.id}-${opt}`}
                      type="button"
                      onClick={() => handleFillOptionSelect(ex.id, opt)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-english font-bold transition cursor-pointer ${
                        currentAnswer === opt
                          ? (opt === ex.correctAnswer
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white')
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
