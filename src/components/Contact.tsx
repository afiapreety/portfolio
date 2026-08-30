import { Github, Linkedin } from 'lucide-react';

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/afiaanjumpreety',
    icon: <Linkedin size={20} strokeWidth={1.8} />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/afiaanjumpreety',
    icon: <Github size={20} strokeWidth={1.8} />,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/2apreety18',
    icon: <span className="text-[9px] font-bold tracking-tight">DEV</span>,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="sea-surface px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-sm tracking-wide text-primary">CONTACT</p>
          </div>

          <div className="md:col-span-8">
            <h2 className="mb-8 text-3xl font-light tracking-tight text-white md:text-4xl">
              Connect with me.
            </h2>
            <div className="flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sea-panel group inline-flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-300/10 transition-colors group-hover:bg-primary/15">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
