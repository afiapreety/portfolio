export default function About() {
  return (
    <section id="about" className="sea-surface px-6 py-28 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-sm text-primary tracking-wide mb-4">ABOUT ME</p>
            
            <div className="mt-8 hidden md:block">
              <div className="sea-panel aspect-square w-full max-w-xs overflow-hidden rounded-2xl p-2">
                <img 
                  src="/portfolio/profile.jpg" 
                  alt="Afia Anjum Preety"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-6">
            <div className="md:hidden mb-8">
              <div className="sea-panel mx-auto aspect-square w-48 overflow-hidden rounded-2xl p-2">
                <img 
                  src="/portfolio/profile.jpg" 
                  alt="Afia Anjum Preety"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
            <p className="text-xl leading-relaxed text-violet-50">
              I’m a Senior Software Engineer who brings structure to complex frontend work.
              I’m strongest when a product needs both thoughtful engineering and a clear,
              dependable experience for the people using it.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              At SELISE Group, I progressed from Associate Software Engineer to Senior Software
              Engineer. Along the way, I’ve built enterprise applications, owned frontend workflows,
              guided delivery milestones, and translated technical decisions across teams.
            </p>
            <p className="text-base leading-relaxed text-slate-400">
              My earlier career in financial services shaped how I communicate, understand business
              needs, and take responsibility beyond the code. Outside work, I enjoy anime, romcoms,
              baking, and exploring new places.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-violet-200/10 pt-8">
              <div>
                <p className="mb-2 text-xs uppercase tracking-wide text-violet-300/55">Based in</p>
                <p className="text-sm font-medium text-violet-50">Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-wide text-violet-300/55">Experience</p>
                <p className="text-sm font-medium text-violet-50">3.5+ Years <span className="text-xs text-slate-400">(4+ Total)</span></p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-wide text-violet-300/55">Education</p>
                <p className="text-sm font-medium text-violet-50">BSc. CSE, BRAC University</p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-wide text-violet-300/55">Availability</p>
                <p className="text-sm font-medium text-violet-50">Open to the right opportunity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
