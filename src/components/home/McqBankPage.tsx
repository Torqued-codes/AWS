import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, CheckCircle2, ExternalLink } from 'lucide-react';
import { SERVICE_LEARNING, SERVICE_MCQ_SECTIONS } from './ServiceLearningPage';
import { useGame } from '../../context/GameContext';

export const McqBankPage: React.FC = () => {
  const [openService, setOpenService] = useState<string | null>('AI/ML');
  const [openSection, setOpenSection] = useState<string | null>('AI/ML::Machine Learning Fundamentals');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const { questions: uploadedQuestions, currentUser } = useGame();
  const [attempts, setAttempts] = useState<Array<{ userId: string; service: string; topic: string; score: number; total: number; completedAt: string }>>(() => {
    try { return JSON.parse(localStorage.getItem('aws-cynergy-mcq-attempts') || '[]'); } catch { return []; }
  });
  const services = Object.entries(SERVICE_LEARNING);

  return (
    <div className="min-h-screen bg-[#080c13] px-4 py-8 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 border-b border-white/10 pb-6">
          <div className="mb-2 flex items-center gap-2 text-amber-300"><BookOpen className="h-5 w-5" /><span className="text-xs font-mono font-bold uppercase tracking-widest">AWS CYNERGY • QUESTION BANK</span></div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">AWS Service MCQs</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">Choose a service, then a concept-specific topic. Questions, answers, and explanations are shared with the corresponding service learning page.</p>
        </div>
        <section className="mb-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-[#111720] p-4"><span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Your answered questions</span><p className="mt-1 text-2xl font-bold text-white">{Object.values(checked).filter(Boolean).length}</p></div>
          <div className="rounded-xl border border-white/10 bg-[#111720] p-4"><span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Weekly activity</span><p className="mt-1 text-2xl font-bold text-cyan-300">{attempts.filter(a => a.userId === currentUser.id && Date.now() - new Date(a.completedAt).getTime() <= 7 * 86400000).length}</p><p className="text-xs text-zinc-500">Answered in the last 7 days</p></div>
          <div className="rounded-xl border border-white/10 bg-[#111720] p-4"><span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Monthly activity</span><p className="mt-1 text-2xl font-bold text-amber-300">{attempts.filter(a => a.userId === currentUser.id && Date.now() - new Date(a.completedAt).getTime() <= 30 * 86400000).length}</p><p className="text-xs text-zinc-500">Answered in the last 30 days</p></div>
        </section>
        <div className="space-y-3">
          {services.map(([service, info]) => {
            const serviceOpen = openService === service;
            const sections = SERVICE_MCQ_SECTIONS[service] || [];
            return <section key={service} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111720]">
              <button className="flex w-full items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.03]" onClick={() => setOpenService(serviceOpen ? null : service)}>
                <span><span className="mb-1 inline-flex rounded-md border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-amber-300">Service</span><span className="block font-bold text-white">{service}</span><span className="mt-1 block text-xs text-zinc-400">{info.questions.length} questions · {info.description}</span></span>
                {serviceOpen ? <ChevronUp className="h-5 w-5 shrink-0 text-cyan-300" /> : <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400" />}
              </button>
              {serviceOpen && <div className="space-y-3 border-t border-white/10 p-4 sm:p-5">
                {sections.map(section => {
                  const sectionKey = `${service}::${section.title}`;
                  const sectionOpen = openSection === sectionKey;
                  const sectionQuestions = section.questionIndices.map(index => ({ q: info.questions[index], index })).filter(item => !!item.q);
                  return <section key={sectionKey} className="overflow-hidden rounded-xl border border-white/10 bg-[#0c1119]">
                    <button className="flex w-full items-center justify-between gap-4 p-4 text-left hover:bg-white/[0.03]" onClick={() => setOpenSection(sectionOpen ? null : sectionKey)}>
                      <span><span className="mb-1 inline-flex rounded-md bg-cyan-400/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-300">Topic</span><span className="block font-semibold text-white">{section.title}</span><span className="mt-1 block text-xs text-zinc-400">{section.description} · {sectionQuestions.length} {sectionQuestions.length === 1 ? 'question' : 'questions'}</span></span>
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
                {uploadedQuestions.filter(q => q.serviceName === service).length > 0 && <section className="overflow-hidden rounded-xl border border-cyan-400/30 bg-[#0b1820]">
                  <div className="border-b border-cyan-400/20 px-4 py-3"><span className="block text-xs font-bold uppercase tracking-wider text-cyan-300">Admin-published question sets</span><span className="mt-1 block text-xs text-zinc-400">Questions uploaded and reviewed by your college admin</span></div>
                  <div className="space-y-3 p-4">{uploadedQuestions.filter(q => q.serviceName === service).map((q, idx) => {
                    const key = `uploaded-${q.id}`; const isChecked = !!checked[key]; const selected = answers[key];
                    const options = q.options.map(o => o.text); const answerIndex = q.options.findIndex(o => o.key === q.correctOption);
                    return <article key={q.id} className="rounded-xl border border-white/10 bg-[#111720] p-4"><div className="mb-2 flex flex-wrap items-center gap-2"><span className="rounded-md bg-cyan-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-cyan-300">{q.topicName || q.awsDocTopic || 'General'}</span><span className="text-xs text-zinc-500">Question {idx + 1}</span></div><h3 className="font-semibold leading-6 text-white">{q.questionText}</h3><div className="mt-3 grid gap-2 sm:grid-cols-2">{options.map((option, oi) => <button key={`${q.id}-${oi}`} disabled={isChecked} onClick={() => setAnswers(prev => ({ ...prev, [key]: oi }))} className={`rounded-lg border px-3 py-2.5 text-left text-sm ${isChecked && oi === answerIndex ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-200' : selected === oi ? 'border-amber-400/60 bg-amber-400/10 text-amber-100' : 'border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/20'}`}><span className="mr-2 font-mono text-xs opacity-70">{String.fromCharCode(65 + oi)}.</span>{option}</button>)}</div>{!isChecked ? <button disabled={selected === undefined} onClick={() => { setChecked(prev => ({ ...prev, [key]: true })); const next = [...attempts, { userId: currentUser.id, service, topic: q.topicName || q.awsDocTopic || 'General', score: selected === answerIndex ? 1 : 0, total: 1, completedAt: new Date().toISOString() }]; setAttempts(next); try { localStorage.setItem('aws-cynergy-mcq-attempts', JSON.stringify(next)); } catch { /* browser storage may be disabled */ } }} className="mt-3 rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-black disabled:opacity-40">Check answer</button> : <p className="mt-3 text-sm text-zinc-300">{selected === answerIndex ? 'Correct!' : `Correct answer: ${options[answerIndex]}.`} {q.explanation}</p>}</article>;
                  })}</div>
                </section>}
              </div>}
            </section>;
          })}
        </div>
      </div>
    </div>
  );
};





