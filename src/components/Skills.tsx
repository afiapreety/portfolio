const skillGroups = [
  { category: 'Frontend', items: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Java', 'Swift'] },
  { category: 'Data', items: ['MongoDB', 'MySQL'] },
  { category: 'Delivery', items: ['Frontend ownership', 'Project coordination', 'Technical documentation'] },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#030d22] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="mb-3 text-sm tracking-wide text-primary">WHAT I BRING</p>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Hands-on engineering paired with the ownership needed to move work from requirements to release.
            </p>
          </div>

          <div className="md:col-span-8">
            <dl className="border-t border-violet-200/10">
              {skillGroups.map((group) => (
                <div key={group.category} className="grid gap-2 border-b border-violet-200/10 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                  <dt className="text-xs font-medium uppercase tracking-wide text-primary">{group.category}</dt>
                  <dd className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-300">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
