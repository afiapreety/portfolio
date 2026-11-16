import AnimatedAsciiPortrait from './AnimatedAsciiPortrait';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="flex min-h-screen items-center overflow-hidden bg-white px-6 pb-20 pt-24 lg:px-8 lg:pt-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="order-2 lg:order-1 lg:col-span-8">
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {/* <span className="h-px w-8 bg-primary" />
            Senior Software Engineer */}
          </p>

          <h1 className="max-w-3xl text-5xl font-light leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
            Hi, I’m{' '}
            <span className="hero-name-reveal">
              <span className="hero-name">Afia Anjum Preety.</span>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-slate-700 sm:text-2xl">
            I build frontend experiences for enterprise platforms—turning complex capabilities into clear, reliable, and easy-to-use interfaces.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500">
            At SELISE Group, I contribute to product delivery with React, Angular, and Next.js while helping teams plan frontend work and stay aligned.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <button
              onClick={scrollToWork}
              className="group inline-flex items-center gap-3 text-sm font-medium text-slate-900 transition-colors hover:text-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:translate-y-0.5">
                <ArrowDownRight size={17} />
              </span>
              View my experience
            </button>
            <a
              href="https://www.linkedin.com/in/afiapreety"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors hover:text-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition-colors group-hover:border-primary">
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              LinkedIn
            </a>
          </div>

        </div>

        <div className="relative order-1 flex justify-center lg:order-2 lg:col-span-4 lg:justify-end">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] sm:h-56 sm:w-56" aria-hidden="true" />
          <AnimatedAsciiPortrait />
        </div>
      </div>
    </section>
  );
}
