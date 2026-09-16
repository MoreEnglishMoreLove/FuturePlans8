import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronDown, ChevronUp, BookOpen, Volume2, Check, X } from 'lucide-react';
import { GRAMMAR_EXERCISES } from '../data/curriculumData';
import { playEnglishSpeech } from '../utils/speech';

export const GrammarSection: React.FC = () => {
  const [selectedTenseTab, setSelectedTenseTab] = useState<'all' | 'simple' | 'progressive' | 'future'>('all');
  const [studentInputs, setStudentInputs] = useState<Record<number, string>>({});
  const [revealedGrammarAnswers, setRevealedGrammarAnswers] = useState<Record<number, boolean>>({});

  const handleInputChange = (id: number, val: string) => {
    setStudentInputs(prev => ({ ...prev, [id]: val }));
  };

  const toggleReveal = (id: number) => {
    setRevealedGrammarAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900/60 via-slate-900 to-purple-900/40 border border-indigo-800/60 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/30 text-indigo-400 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">Section 4 • Unit 1: Future Plans</span>
            <h2 className="text-2xl font-bold text-white">Grammar: Revision of Tenses • قواعد مراجعة الأزمنة</h2>
          </div>
        </div>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          شرح متكامل ومقارنة شاملة بين المضارع البسيط، المضارع المستمر، وزمن المستقبل (will و be going to)، مع تمارين تطبيقية واختبارات تفاعلية.
        </p>
      </div>

      {/* Grammar Rules Comparison Matrix */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">
              جدول المقارنة الذهبي للأزمنة (Tenses Comparison Table)
            </h3>
            <p className="text-xs text-slate-400">
              كما هو معتمد في كراسة المنهاج بإشراف المعلمة جيداء صقر
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start">
            {(['all', 'simple', 'progressive', 'future'] as const).map(tabKey => (
              <button
                key={tabKey}
                id={`tab-grammar-${tabKey}`}
                type="button"
                onClick={() => setSelectedTenseTab(tabKey)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  selectedTenseTab === tabKey
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tabKey === 'all' && 'الكل'}
                {tabKey === 'simple' && 'المضارع البسيط'}
                {tabKey === 'progressive' && 'المضارع المستمر'}
                {tabKey === 'future' && 'المستقبل'}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Present Simple */}
          {(selectedTenseTab === 'all' || selectedTenseTab === 'simple') && (
            <div className="bg-slate-950 border border-indigo-500/30 rounded-2xl p-5 space-y-4 hover:border-indigo-400 transition">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block">Tense 1</span>
                <h4 className="text-lg font-bold text-white font-english">Present Simple Tense</h4>
                <div className="text-xs text-slate-400">المضارع البسيط</div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-slate-300">الاستخدام (Use):</div>
                <p className="text-slate-400 leading-relaxed">
                  Facts which are always true, habits, things we do regularly.
                  <br />
                  (حقائق ثابتة، عادات، أمور تتكرر بانتظام).
                </p>
              </div>

              <div className="space-y-1.5 text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="font-bold text-cyan-400">الظروف الدالة (Adverbs):</div>
                <div className="text-slate-300 font-english">
                  always, often, usually, sometimes, never, everyday, every week...
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-slate-300">أشكال الجملة (Forms):</div>
                <div className="space-y-1 text-slate-300 font-english text-[11px]">
                  <div><strong className="text-emerald-400">(+)</strong> Water boils at 100°C. / I drink coffee.</div>
                  <div><strong className="text-rose-400">(-)</strong> I don't drink. / He doesn't drink.</div>
                  <div><strong className="text-cyan-400">(?)</strong> Does water boil? / Do you drink?</div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Present Progressive */}
          {(selectedTenseTab === 'all' || selectedTenseTab === 'progressive') && (
            <div className="bg-slate-950 border border-cyan-500/30 rounded-2xl p-5 space-y-4 hover:border-cyan-400 transition">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">Tense 2</span>
                <h4 className="text-lg font-bold text-white font-english">Present Progressive Tense</h4>
                <div className="text-xs text-slate-400">المضارع المستمر</div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-slate-300">الاستخدام (Use):</div>
                <p className="text-slate-400 leading-relaxed">
                  Activities happening at the moment of speaking, temporary activities.
                  <br />
                  (أفعال تحدث في لحظة التكلم، أو أنشطة مؤقتة).
                </p>
              </div>

              <div className="space-y-1.5 text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="font-bold text-cyan-400">الظروف الدالة (Adverbs):</div>
                <div className="text-slate-300 font-english">
                  now, at the moment, these days, this week, look!, listen!
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-slate-300">أشكال الجملة (Forms):</div>
                <div className="space-y-1 text-slate-300 font-english text-[11px]">
                  <div><strong className="text-emerald-400">(+)</strong> The water is boiling now. / I am working.</div>
                  <div><strong className="text-rose-400">(-)</strong> I'm not watching TV right now.</div>
                  <div><strong className="text-cyan-400">(?)</strong> Are you drinking coffee? / Is he playing?</div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Future Tense */}
          {(selectedTenseTab === 'all' || selectedTenseTab === 'future') && (
            <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-5 space-y-4 hover:border-emerald-400 transition">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">Tense 3</span>
                <h4 className="text-lg font-bold text-white font-english">Future Tense (will / going to)</h4>
                <div className="text-xs text-slate-400">زمن المستقبل</div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-slate-300">الاستخدام (Use):</div>
                <p className="text-slate-400 leading-relaxed">
                  <strong>will:</strong> decisions, promises, predictions.
                  <br />
                  <strong>going to:</strong> planned events, predictions with evidence.
                </p>
              </div>

              <div className="space-y-1.5 text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="font-bold text-cyan-400">الظروف الدالة (Adverbs):</div>
                <div className="text-slate-300 font-english">
                  tomorrow, next week/year/month, soon, in the future.
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-slate-300">أشكال الجملة (Forms):</div>
                <div className="space-y-1 text-slate-300 font-english text-[11px]">
                  <div><strong className="text-emerald-400">(+)</strong> We will visit the museum. / He is going to travel.</div>
                  <div><strong className="text-rose-400">(-)</strong> We won't come. / He is not going to travel.</div>
                  <div><strong className="text-cyan-400">(?)</strong> Will you come? / Is he going to spend...?</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Exercises: Put verbs in brackets into correct tense */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-2">
          تمرين تصحيح الأفعال بين القوسين (Make the verbs in brackets in the correct tense)
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          اكتب التصريف الصحيح للفعل في الخانة، ثم انقر "التحقق والحل النموذجي":
        </p>

        <div className="space-y-4">
          {GRAMMAR_EXERCISES.map((ex) => {
            const userInput = studentInputs[ex.id] || '';
            const isRevealed = revealedGrammarAnswers[ex.id];
            const isInputCorrect = userInput.trim().toLowerCase() === ex.correctAnswer.toLowerCase();

            return (
              <div key={ex.id} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-english text-base text-white text-left font-semibold" dir="ltr">
                      {ex.id}- {ex.promptEn}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {ex.promptAr}
                    </p>
                  </div>

                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-english self-start sm:self-auto">
                    {ex.tense}
                  </span>
                </div>

                {/* Input & Check row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <div className="relative flex-1">
                    <input
                      id={`input-grammar-${ex.id}`}
                      type="text"
                      value={userInput}
                      onChange={(e) => handleInputChange(ex.id, e.target.value)}
                      placeholder="اكتب التصريف الصحيح بالإنجليزية..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white font-english text-sm outline-none focus:border-indigo-500"
                      dir="ltr"
                    />
                    {userInput.trim() && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {isInputCorrect ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <X className="w-4 h-4 text-rose-400" />
                        )}
                      </div>
                    )}
                  </div>

                  <button
                    id={`btn-reveal-grammar-${ex.id}`}
                    type="button"
                    onClick={() => toggleReveal(ex.id)}
                    className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-cyan-300 cursor-pointer transition"
                  >
                    <span>{isRevealed ? 'إخفاء الشرح' : 'التحقق والشرح النموذجي'}</span>
                    {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Model Answer & Rule Explanation Box */}
                {isRevealed && (
                  <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-xs space-y-1.5 animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">الإجابة النموذجية:</span>
                      <span className="font-english font-bold text-sm text-emerald-400 select-all">
                        {ex.correctAnswer}
                      </span>
                    </div>
                    <div className="text-slate-300 leading-relaxed">
                      <strong>تعليل القاعدة:</strong> {ex.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Advanced Rules: Modal 'should' & Passive Voice 'be done' */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-2">
          قواعد إضافية مقررة: Modal Verb 'should' و المبني للمجهول (Passive Voice)
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          قواعد الصفحة 11 من كتاب الطالب الخاصة بالمدرسة المستقبلية
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-english font-bold text-base text-cyan-300">Modal Verb 'should'</h4>
              <span className="text-xs text-slate-400">ينبغي / يجب (نصيحة)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We use <strong>should</strong> to give advice or say that something is the right thing to do.
              <br />
              يُستخدم الفعل المساعد should للتعبير عن النصيحة أو السلوك السليم الواجب اتباعه.
            </p>
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs font-english text-white" dir="ltr">
              Planners should put safety as their major concern.
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-english font-bold text-base text-indigo-300">Passive Voice (be done)</h4>
              <span className="text-xs text-slate-400">المبني للمجهول</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We use <strong>be done</strong> (Modal + be + V3) to say that something is done by someone else without focusing on the subject.
              <br />
              يُستخدم المبني للمجهول للتركيز على الحدث نفسه.
            </p>
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs font-english text-white" dir="ltr">
              Exams can be done electronically.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
