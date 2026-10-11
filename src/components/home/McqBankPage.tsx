import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, CheckCircle2, ExternalLink } from 'lucide-react';
import { SERVICE_LEARNING, SERVICE_MCQ_SECTIONS } from './ServiceLearningPage';

export const McqBankPage: React.FC = () => {
  const [openService, setOpenService] = useState<string | null>('AI/ML');
  const [openSection, setOpenSection] = useState<string | null>('AI/ML::Machine Learning Fundamentals');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const services = Object.entries(SERVICE_LEARNING);

  return (
    <div className="min-h-screen bg-[#080c13] px-4 py-8 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 border-b border-white/10 pb-6">
          <div className="mb-2 flex items-center gap-2 text-amber-300"><BookOpen className="h-5 w-5" /><span className="text-xs font-mono font-bold uppercase tracking-widest">AWS CYNERGY • QUESTION BANK</span></div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">AWS Service MCQs</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">Choose a service, then a concept-specific topic. Questions, answers, and explanations are shared with the corresponding service learning page.</p>
        </div>
        <div className="space-y-3">
          {services.map(([service, info]) => {
            const serviceOpen = openService === service;
            const sections = SERVICE_MCQ_SECTIONS[service] || [];
            return <section key={service} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111720]">
              <button className="flex w-full items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.03]" onClick={() => setOpenService(serviceOpen ? null : service)}>
                <span><span className="block font-bold text-white">{service}</span><span className="mt-1 block text-xs text-zinc-400">{info.questions.length} questions · {info.description}</span></span>
                {serviceOpen ? <ChevronUp className="h-5 w-5 shrink-0 text-cyan-300" /> : <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400" />}
              </button>
              {serviceOpen && <div className="space-y-3 border-t border-white/10 p-4 sm:p-5">
                {sections.map(section => {
                  const sectionKey = `${service}::${section.title}`;
                  const sectionOpen = openSection === sectionKey;
                  const sectionQuestions = section.questionIndices.map(index => ({ q: info.questions[index], index })).filter(item => !!item.q);
                  return <section key={sectionKey} className="overflow-hidden rounded-xl border border-white/10 bg-[#0c1119]">
                    <button className="flex w-full items-center justify-between gap-4 p-4 text-left hover:bg-white/[0.03]" onClick={() => setOpenSection(sectionOpen ? null : sectionKey)}>
                      <span><span className="block font-semibold text-white">{section.title}</span><span className="mt-1 block text-xs text-zinc-400">{section.description} · {sectionQuestions.length} {sectionQuestions.length === 1 ? 'question' : 'questions'}</span></span>
                      {sectionOpen ? <ChevronUp className="h-4 w-4 shrink-0 text-cyan-300" /> : <ChevronDown className="h-4 w-4 shrink-0 text-zinc-400" />}
                    </button>
                    {sectionOpen && <div className="space-y-4 border-t border-white/10 p-4">
                      {sectionQuestions.map(({ q, index }, qi) => {
                        const key = `${service}-${index}`;
                        const isChecked = !!checked[key];
                        return <article key={key} className="rounded-xl border border-white/10 bg-[#111720] p-4">
                          <h3 className="font-semibold leading-6 text-white"><span className="mr-2 font-mono text-cyan-300">{String(qi + 1).padStart(2, '0')}</span>{q.question}</h3>
                          <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            {q.options.map((option, oi) => {
                              const selected = answers[key] === oi;
                              const correct = isChecked && oi === q.answer;
                              return <button key={option} disabled={isChecked} onClick={() => setAnswers(prev => ({ ...prev, [key]: oi }))} className={`rounded-lg border px-3 py-2.5 text-left text-sm transition ${correct ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-200' : selected ? 'border-amber-400/60 bg-amber-400/10 text-amber-100' : 'border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/20'}`}><span className="mr-2 font-mono text-xs opacity-70">{String.fromCharCode(65 + oi)}.</span>{option}</button>;
                            })}
                          </div>
                          {!isChecked ? <button disabled={answers[key] === undefined} onClick={() => setChecked(prev => ({ ...prev, [key]: true }))} className="mt-3 rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-black disabled:cursor-not-allowed disabled:opacity-40">Check answer</button> : <div className="mt-3 flex gap-2 text-sm"><CheckCircle2 className={`h-4 w-4 shrink-0 ${answers[key] === q.answer ? 'text-emerald-400' : 'text-rose-400'}`} /><span className="text-zinc-300">{answers[key] === q.answer ? 'Correct!' : `Correct answer: ${q.options[q.answer]}.`} {q.explanation}</span></div>}
                        </article>;
                      })}
                      <a href={info.resourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-amber-400/30 px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-amber-400/10">Study official AWS resources <ExternalLink className="h-4 w-4" /></a>
                    </div>}
                  </section>;
                })}
              </div>}
            </section>;
          })}
        </div>
      </div>
    </div>
  );
};


