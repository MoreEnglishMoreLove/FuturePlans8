import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Download, 
  GraduationCap, 
  BookOpen, 
  Sparkles,
  Award
} from 'lucide-react';
import { CURRICULUM_WORKSHEETS, SOCIAL_LINKS } from '../data/curriculumData';
import { TEACHER_NAME, TEACHER_NAME_EN } from '../utils/security';

export const WorksheetsSection: React.FC = () => {
  const [activeWorksheetId, setActiveWorksheetId] = useState<number>(1);
  const [showModelAnswers, setShowModelAnswers] = useState<boolean>(true);

  const currentWorksheet = CURRICULUM_WORKSHEETS.find(w => w.id === activeWorksheetId) || CURRICULUM_WORKSHEETS[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner - hidden in print */}
      <div className="bg-gradient-to-r from-cyan-900/70 via-slate-900 to-indigo-900/50 border border-cyan-800/60 rounded-2xl p-6 sm:p-8 shadow-xl no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-600/30 text-cyan-400 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold">Section 7 • Official Unit Worksheets</span>
              <h2 className="text-2xl font-bold text-white">أوراق عمل المنهاج والحلول النموذجية (7 Worksheets)</h2>
              <p className="text-xs text-slate-300 mt-0.5">
                أوراق عمل الوحدة الأولى الشاملة المطابقة لصفحات كراسة المعلمة <span className="text-cyan-300 font-semibold">{TEACHER_NAME}</span>
              </p>
            </div>
          </div>

          {/* Action controls */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            {/* Toggle Model Answers Button */}
            <button
              id="btn-toggle-worksheet-answers"
              type="button"
              onClick={() => setShowModelAnswers(!showModelAnswers)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                showModelAnswers
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {showModelAnswers ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              <span>{showModelAnswers ? 'الحلول النموذجية: مفعّلة' : 'الحلول النموذجية: مخفية (اختبار)'}</span>
            </button>

            {/* Print Worksheet Button */}
            <button
              id="btn-print-worksheet"
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition cursor-pointer shadow-lg shadow-cyan-600/25"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة ورقة العمل (Print)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 7 Worksheets Selector Buttons - hidden in print */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 no-print">
        {CURRICULUM_WORKSHEETS.map((ws) => (
          <button
            key={ws.id}
            id={`btn-select-ws-${ws.id}`}
            type="button"
            onClick={() => setActiveWorksheetId(ws.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeWorksheetId === ws.id
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[11px] font-english">
              {ws.id}
            </span>
            <span className="truncate max-w-[170px]">{ws.title}</span>
          </button>
        ))}
      </div>

      {/* PRINTABLE WORKSHEET CONTAINER */}
      <div className="print-container bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Printable Official Header */}
        <div className="border-b-2 border-slate-700 pb-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-right">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-700 text-white flex items-center justify-center font-bold text-2xl shadow-lg">
              <GraduationCap className="w-10 h-10" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-english font-bold">
                MORE ENGLISH MORE LOVE
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {currentWorksheet.titleAr}
              </h2>
              <div className="text-xs font-english text-slate-300 font-semibold mt-0.5">
                {currentWorksheet.unit} • Worksheet #{currentWorksheet.id} (Page {currentWorksheet.pageNumber})
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left bg-slate-950/80 px-5 py-3 rounded-2xl border border-slate-800">
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold font-english">
              Teacher's Name
            </div>
            <div className="text-lg font-bold text-white font-english">
              {TEACHER_NAME_EN}
            </div>
            <div className="text-xs font-bold text-amber-300">
              {TEACHER_NAME}
            </div>
          </div>
        </div>

        {/* Student Name & Date Fill Field for printed test */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-semibold">اسم الطالب / Student Name:</span>
            <span className="flex-1 border-b border-dashed border-slate-600 h-5"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-semibold">التاريخ / Date:</span>
            <span className="flex-1 border-b border-dashed border-slate-600 h-5"></span>
          </div>
        </div>

        {/* Worksheet Content Sections */}
        <div className="space-y-8">
          {currentWorksheet.sections.map((sec, secIdx) => (
            <div key={secIdx} className="space-y-4">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-english">
                    {sec.title}
                  </h3>
                  <div className="text-xs text-cyan-400">
                    {sec.titleAr}
                  </div>
                </div>

                <span className="text-[11px] text-slate-400 italic">
                  {sec.instructions}
                </span>
              </div>

              {/* SECTION TYPE: PARAGRAPH */}
              {sec.type === 'paragraph' && (
                <div className="space-y-3">
                  {sec.items.map((item: any, i: number) => (
                    <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <p className="text-base font-english text-slate-100 text-left leading-relaxed" dir="ltr">
                        {item.en}
                      </p>
                      {showModelAnswers && item.ar && (
                        <p className="text-xs text-cyan-300 pt-2 border-t border-slate-800/80 leading-relaxed">
                          {item.ar}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* SECTION TYPE: Q&A */}
              {sec.type === 'qa' && (
                <div className="space-y-3">
                  {sec.items.map((qaItem: any, i: number) => (
                    <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="font-english font-semibold text-white text-sm text-left" dir="ltr">
                        {qaItem.question}
                      </div>

                      {showModelAnswers ? (
                        <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs sm:text-sm text-emerald-300 font-english text-left" dir="ltr">
                          <strong className="text-emerald-400 mr-2">Answer:</strong>
                          {qaItem.answer}
                        </div>
                      ) : (
                        <div className="h-14 border-b border-dashed border-slate-700 flex items-end pb-1 text-slate-500 text-xs">
                          (Student writes answer here)
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* SECTION TYPE: MCQ */}
              {sec.type === 'mcq' && (
                <div className="space-y-3">
                  {sec.items.map((mcqItem: any, i: number) => (
                    <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="font-english font-semibold text-white text-sm text-left" dir="ltr">
                        {mcqItem.question}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {mcqItem.options?.map((opt: string, optIdx: number) => {
                          const isCorrect = showModelAnswers && opt.includes('الحل الصحيح');
                          return (
                            <div
                              key={optIdx}
                              className={`p-2.5 rounded-lg text-xs font-english text-left border ${
                                isCorrect
                                  ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold'
                                  : 'bg-slate-900 border-slate-800 text-slate-300'
                              }`}
                              dir="ltr"
                            >
                              {opt}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* SECTION TYPE: TRUE / FALSE */}
              {sec.type === 'true_false' && (
                <div className="space-y-3">
                  {sec.items.map((tfItem: any, i: number) => (
                    <div key={i} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                      <div>
                        <div className="font-english text-sm font-semibold text-white text-left" dir="ltr">
                          {tfItem.id}- {tfItem.question}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {tfItem.questionAr}
                        </div>
                      </div>

                      <div className="shrink-0 font-bold text-xs">
                        {showModelAnswers ? (
                          <span className={`px-3 py-1 rounded-full ${
                            tfItem.answer
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          }`}>
                            {tfItem.answer ? 'TRUE (صح)' : 'FALSE (خطأ)'}
                          </span>
                        ) : (
                          <span className="text-slate-500 font-english font-mono">[ T / F ]</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* SECTION TYPE: MATCHING */}
              {sec.type === 'matching' && (
                <div className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sec.items.map((mItem: any, i: number) => (
                      <div key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                        <span className="font-english font-bold text-white">{mItem.colA}</span>
                        {showModelAnswers ? (
                          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold font-english">
                            Matches: {mItem.correctKey}
                          </span>
                        ) : (
                          <span className="text-slate-600">[ ___ ]</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION TYPE: FILL IN BLANKS */}
              {sec.type === 'fill_blanks' && (
                <div className="space-y-3">
                  {sec.items.map((fItem: any, i: number) => (
                    <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                      <div className="font-english text-sm text-white text-left font-medium" dir="ltr">
                        {i + 1}- {fItem.sentence.replace('________', showModelAnswers ? `[ ${fItem.answer} ]` : '________')}
                      </div>
                      <div className="text-xs text-slate-400">
                        {fItem.sentenceAr}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* SECTION TYPE: GRAMMAR RULES */}
              {sec.type === 'grammar_rules' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sec.items.map((gRule: any, i: number) => (
                    <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2">
                      <h4 className="font-english font-bold text-cyan-400 text-sm">{gRule.tense || gRule.title}</h4>
                      <p className="text-slate-300">{gRule.use || gRule.explanation}</p>
                      {gRule.forms && (
                        <div className="text-[11px] text-slate-400 font-english bg-slate-900 p-2 rounded border border-slate-800">
                          {gRule.forms}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Official Footer Banner on Every Worksheet */}
        <div className="mt-12 pt-6 border-t-2 border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            جميع الحقوق محفوظة للمنهاج التفاعلي • <strong>MORE ENGLISH MORE LOVE</strong>
          </div>
          <div className="flex items-center gap-4 font-english">
            <span>Teacher: {TEACHER_NAME_EN}</span>
            <span>WhatsApp: {SOCIAL_LINKS.whatsapp}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
