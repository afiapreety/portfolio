import { ArrowUpRight, Circle } from 'lucide-react';

const seliseRoles = [
  {
    title: 'Senior Software Engineer',
    dates: 'Jun 2026 – Present · 3 mos',
    current: true,
    details: [
      'Contribute to the frontend delivery of SELISE Blocks capabilities, including enterprise identity, localization, AI and knowledge bases, data services, observability, and workflows.',
      'Build and improve reusable interfaces that connect product experiences with shared platform services.',
      'Work with product, backend, and QA teams to clarify requirements, break work into practical tasks, and support delivery through testing and release.',
      'Coordinate frontend tasks and technical resources when needed, helping the team track progress and raise blockers early.',
    ],
    skills: 'Enterprise frontend · Product coordination · Cross-functional delivery',
    links: [
      { label: 'SELISE Blocks', href: 'https://seliseblocks.com/' },
      { label: 'Documentation', href: 'https://docs.seliseblocks.com/' },
    ],
  },
  {
    title: 'Software Engineer',
    dates: 'Jun 2024 – May 2026 · 2 yrs',
    details: [
      'Developed and maintained high-performance front-end applications for enterprise systems built on a microservices architecture.',
      'Collaborated on project requirements and managed front-end workflows, milestones, and timelines.',
      'Created and managed technical and business documentation.',
    ],
    skills: 'Front-end development · Next.js · Microservices',
  },
  {
    title: 'Associate Software Engineer',
    dates: 'Mar 2023 – May 2024 · 1 yr 3 mos',
    details: [
      'Built frontend features for a browser extension that helped content editors update multilingual content through the localization platform.',
      'Helped coordinate requirements, tasks, and delivery follow-ups for the extension with the engineering team.',
    ],
    skills: 'Browser extensions · Localization · Angular · TypeScript · Delivery coordination',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-sm text-primary tracking-wide mb-4">EXPERIENCE</p>
          </div>

          <div className="md:col-span-8 space-y-16">
            <article>
              <header className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-white">
                  SG
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/company/2294248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xl font-medium transition-colors hover:text-primary"
                  >
                    SELISE Group
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <p className="mt-1 text-sm text-slate-500">Full-time · 3 yrs 6 mos</p>
                  <p className="mt-1 text-sm text-slate-500">Dhaka, Bangladesh · Hybrid</p>
                </div>
              </header>

              <ol className="relative ml-6 space-y-10 border-l border-primary/25 pl-8">
                {seliseRoles.map((role) => (
                  <li key={role.title} className="relative">
                    <span className={`absolute -left-[2.34rem] top-1.5 h-3 w-3 rounded-full border-2 border-white ${role.current ? 'bg-primary' : 'bg-slate-300'}`} />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <h3 className="text-lg font-medium text-slate-900">{role.title}</h3>
                      <p className={`shrink-0 text-sm ${role.current ? 'font-medium text-primary' : 'text-slate-500'}`}>
                        {role.dates}
                      </p>
                    </div>

                    {role.details && (
                      <ul className="mt-4 space-y-3 text-slate-600">
                        {role.details.map((detail) => (
                          <li key={detail} className="flex gap-3 text-sm leading-relaxed">
                            <Circle size={6} className="mt-2 flex-shrink-0 fill-current text-primary" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {role.skills && (
                      <p className="mt-4 text-xs font-medium text-primary">{role.skills}</p>
                    )}

                    {role.links && (
                      <div className="mt-4 flex flex-wrap gap-4">
                        {role.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 transition-colors hover:text-primary"
                          >
                            {link.label}
                            <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </article>

            <div className="border-t border-slate-100 pt-16">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-1">Assistant Relationship Manager</h3>
                  <p className="text-slate-600">UCB Stock Brokerage Limited</p>
                </div>
                <p className="shrink-0 text-sm text-slate-500">Aug 2021 – Nov 2022 · 1 yr</p>
              </div>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li className="flex gap-3 text-sm leading-relaxed">
                  <Circle size={6} className="mt-2 flex-shrink-0 fill-current text-primary" />
                  <span>Built proactive client relationships, explored business opportunities, and managed portfolios.</span>
                </li>
                <li className="flex gap-3 text-sm leading-relaxed">
                  <Circle size={6} className="mt-2 flex-shrink-0 fill-current text-primary" />
                  <span>Coordinated international roadshows, content creation, and supporting documentation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
