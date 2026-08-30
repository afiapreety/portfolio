export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-sm text-primary tracking-wide mb-4">ABOUT ME</p>
            
            <div className="mt-8 hidden md:block">
              <div className="aspect-square w-full max-w-xs rounded-lg overflow-hidden bg-slate-200">
                <img 
                  src="/portfolio/profile.jpg" 
                  alt="Afia Anjum Preety"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-6">
            <div className="md:hidden mb-8">
              <div className="aspect-square w-48 mx-auto rounded-lg overflow-hidden bg-slate-200">
                <img 
                  src="/portfolio/profile.jpg" 
                  alt="Afia Anjum Preety"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed">
              I’m a Senior Software Engineer who brings structure to complex frontend work.
              I’m strongest when a product needs both thoughtful engineering and a clear,
              dependable experience for the people using it.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              At SELISE Group, I progressed from Associate Software Engineer to Senior Software
              Engineer. Along the way, I’ve built enterprise applications, coordinated frontend work,
              supported delivery milestones, and translated technical decisions across teams.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              My earlier career in financial services shaped how I communicate, understand business
              needs, and take responsibility beyond the code. Outside work, I enjoy anime, romcoms,
              baking, and exploring new places.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Based in</p>
                <p className="text-sm font-medium">Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Experience</p>
                <p className="text-sm font-medium">3.5+ Years <span className="text-slate-500 text-xs">(4+ Total)</span></p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Education</p>
                <p className="text-sm font-medium">BSc. CSE, BRAC University</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Availability</p>
                <p className="text-sm font-medium">Open to the right opportunity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
