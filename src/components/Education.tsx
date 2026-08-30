const educationStages = [
  {
    stage: '03',
    qualification: 'BSc. Computer Science & Engineering',
    institution: 'BRAC University',
    period: '2015–2019',
    result: 'CGPA 3.59/4.00',
  },
  {
    stage: '02',
    qualification: 'Higher Secondary Certificate',
    institution: "Patuakhali Govt. Women's College",
    period: '2014',
    result: 'GPA 5.00/5.00',
  },
  {
    stage: '01',
    qualification: 'Secondary School Certificate',
    institution: 'Patuakhali Govt. Girls’ High School',
    period: '2012',
    result: 'GPA 5.00/5.00',
  },
];

const achievements = [
  {
    emoji: '🥈',
    title: "2nd Runner-up, Women's Day Innovation Challenge",
    detail: 'Facebook Developer Circle – Dhaka',
  },
  {
    emoji: '🎯',
    title: 'Selected Team, BRACATHON 2',
    detail: 'Selected from 200 participating teams',
  },
  {
    emoji: '👥',
    title: 'Assistant Director – IT',
    detail: 'BRAC University Adventure Club · 2017–2018',
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="section-label mb-4">{'<Education />'}</p>
          </div>

          <div className="space-y-14 md:col-span-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div className="mb-7 flex items-end justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Player progress</p>
                  <h3 className="mt-1 text-lg font-medium text-slate-900">Academic journey</h3>
                </div>
                <div className="text-right font-mono">
                  <p className="text-lg font-semibold text-slate-900">3 / 3</p>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">Stages complete</p>
                </div>
              </div>

              <ol className="grid gap-3 sm:grid-cols-3">
                {educationStages.map((education) => (
                  <li
                    key={education.stage}
                    className="group rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-sm"
                  >
                    <div className="mb-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                      <span className="text-slate-400">Stage {education.stage}</span>
                      <span className="text-primary">Complete</span>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs font-semibold text-primary">
                      {education.stage}
                    </span>
                    <h4 className="mt-4 min-h-[2.75rem] text-sm font-medium leading-snug text-slate-900">{education.qualification}</h4>
                    <p className="mt-2 min-h-[2.25rem] text-xs leading-relaxed text-slate-500">{education.institution}</p>
                    <div className="mt-5 border-t border-slate-100 pt-3 text-xs">
                      <p className="text-slate-400">{education.period}</p>
                      <p className="mt-1 font-medium text-primary">{education.result}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-5 flex gap-1" aria-label="All academic stages complete">
                {educationStages.map((education) => (
                  <span key={education.stage} className="h-1 flex-1 rounded-full bg-primary" />
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-12">
              <div className="mb-7 flex items-end justify-between">
                <h3 className="text-xs uppercase tracking-wide text-slate-400">🏆 Selected Achievements</h3>
                <span className="font-mono text-[10px] tracking-[0.18em] text-slate-400">01—03</span>
              </div>

              <div className="border-b border-slate-200">
                {achievements.map((achievement, index) => (
                  <article
                    key={achievement.title}
                    className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-t border-slate-200 py-5 transition-colors hover:border-primary/40"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                      {achievement.emoji}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium leading-snug text-slate-900">{achievement.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">{achievement.detail}</p>
                    </div>
                    <span className="hidden font-mono text-xs text-primary sm:block">0{index + 1}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
