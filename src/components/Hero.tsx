import AnimatedAsciiPortrait from './AnimatedAsciiPortrait';
import DeepSeaCanvas from './DeepSeaCanvas';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ocean px-6 pb-20 pt-24 text-white lg:px-8 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(126,34,206,0.16),transparent_28rem)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,3,22,0.96)_0%,rgba(4,3,22,0.78)_54%,rgba(4,3,22,0.24)_100%)]" aria-hidden="true" />
      <DeepSeaCanvas />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="order-2 lg:order-1 lg:col-span-8">
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Senior Software Engineer
          </p>

          <h1 className="max-w-3xl text-5xl font-light leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Hi, I’m <span className="text-primary">Afia Anjum Preety.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-violet-50/90 sm:text-2xl">
            I build and lead frontend work for enterprise products—making complex systems clear, reliable, and easy to use.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
            Currently at SELISE Group, working with React, Angular, Next.js, and microservice architecture from Dhaka, Bangladesh.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <button
              onClick={scrollToWork}
              className="group inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-ocean shadow-[0_0_30px_rgba(192,132,252,0.38)] transition-transform group-hover:translate-y-0.5">
                <ArrowDownRight size={17} />
              </span>
              View my experience
            </button>
            <a
              href="https://linkedin.com/in/afiaanjumpreety"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-medium text-slate-200 transition-colors hover:text-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-200/30 bg-violet-300/5 backdrop-blur-sm transition-colors group-hover:border-primary">
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              LinkedIn
            </a>
          </div>

        </div>

        <div className="relative order-1 flex justify-center lg:order-2 lg:col-span-4 lg:justify-end">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/15 bg-violet-300/10 shadow-[0_0_90px_rgba(168,85,247,0.34)] backdrop-blur-md sm:h-64 sm:w-64" aria-hidden="true" />
          <AnimatedAsciiPortrait />
        </div>
      </div>
    </section>
  );
}
