import { ArrowUpRight } from 'lucide-react';
import tinyGardenStart from '../assets/tiny-garden/start-view.png';
import tinyGardenGameplay from '../assets/tiny-garden/gameplay-view.png';
import tinyGardenBloom from '../assets/tiny-garden/full-bloom-view.png';
import worldHero from '../assets/world-on-a-plate/hero.jpg';
import worldJourney from '../assets/world-on-a-plate/dish-journey.jpg';
import worldAtlas from '../assets/world-on-a-plate/atlas-map.jpg';
import worldReferences from '../assets/world-on-a-plate/references.jpg';

const worldOnAPlate = {
  name: 'A World on a Plate',
  description: 'An interactive atlas of dishes that travelled',
  summary:
    'Trace how 15 dish families became 137 regional versions across 51 countries: pick a dish and the world map redraws as its journey, or click a country to see everything cooked there.',
  hci:
    'Designed as a Human-Computer Interaction project, with direct manipulation on the map, an origin confidence label so contested history reads honestly, keyboard search, a pausable hero carousel, light and dark themes, and a step-by-step cook mode.',
  references:
    'Every dish story carries numbered citations, and a References page lists each source with its publisher and the date it was consulted. A script checks that every reference link still resolves.',
  technologies: ['React', 'TypeScript', 'D3', 'HCI'],
  href: 'https://afiapreety.github.io/a-world-on-a-plate/',
  gallery: [
    { src: worldJourney, alt: 'Atlas map tracing how dumplings travelled from Northern China' },
    { src: worldAtlas, alt: 'World map shaded by how many dishes each country holds' },
    { src: worldReferences, alt: 'References page with numbered, dated citations for each dish' },
  ],
};

const tinyGarden = {
  name: 'Tiny Garden',
  description: 'Cozy, vibe-coded browser game',
  technologies: ['TypeScript', 'PixiJS'],
  href: 'https://afiapreety.github.io/tiny-garden/',
};

const projects = [
  {
    name: 'Take a Sip',
    description: 'Cloud kitchen café for the office',
    technologies: ['Angular', 'Material UI', 'Node.js', 'Express', 'MongoDB'],
    href: 'https://github.com/afiapreety/Take-A-Sip',
    youtubeId: 'ZusbiCBKvW0',
  },
  {
    name: 'Fly Away',
    description: 'Online flight booking application',
    technologies: ['Angular', 'Material UI', 'Node.js', 'Express', 'MongoDB'],
    href: 'https://github.com/shahidnsu/FlyAway.git',
    youtubeId: 'PK4clPjC9DY',
  },
  {
    name: 'Anomaly Detection in IoT',
    description: 'Machine-learning based anomaly detection project',
    technologies: ['Arduino', 'Python'],
  },
  {
    name: 'Personality Detection',
    description: 'Personality detection from Twitter posts',
    technologies: ['Python'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="section-label">{'<Projects petOrNot />'}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Pet projects, non-pet projects, and a few ideas that escaped localhost.
            </p>
          </div>

          <div className="md:col-span-8">
            <article className="border-t border-slate-200 py-7">
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="pt-1 font-mono text-[10px] text-slate-400">01</span>
                <div className="min-w-0 flex-1">
                  <a
                    href={worldOnAPlate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xl font-medium text-slate-900 transition-colors hover:text-primary"
                  >
                    {worldOnAPlate.name}
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                  <p className="mt-1 text-sm text-slate-500">{worldOnAPlate.description}</p>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-slate-600">
                    {worldOnAPlate.technologies.map((technology) => (
                      <span key={technology}>
                        <span className="text-primary/60">#</span>{technology}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-slate-600">
                    <p>{worldOnAPlate.summary}</p>
                    <p>
                      <span className="font-medium text-slate-900">Why HCI: </span>
                      {worldOnAPlate.hci}
                    </p>
                    <p>
                      <span className="font-medium text-slate-900">References and citations: </span>
                      {worldOnAPlate.references}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={worldOnAPlate.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open A World on a Plate"
                className="group mt-6 block"
              >
                <figure className="overflow-hidden rounded-sm bg-slate-100">
                  <img
                    src={worldHero}
                    alt="A World on a Plate home page: one dish, many homes, with noodle soup versions from eight countries"
                    className="aspect-[11/6] w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </figure>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {worldOnAPlate.gallery.map((image) => (
                    <figure key={image.alt} className="overflow-hidden rounded-sm bg-slate-100">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="aspect-[4/3] h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                      />
                    </figure>
                  ))}
                </div>
              </a>
            </article>

            <article className="border-t border-slate-200 py-7">
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="pt-1 font-mono text-[10px] text-slate-400">02</span>
                <div className="min-w-0 flex-1">
                  <a
                    href={tinyGarden.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xl font-medium text-slate-900 transition-colors hover:text-primary"
                  >
                    {tinyGarden.name}
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                  <p className="mt-1 text-sm text-slate-500">{tinyGarden.description}</p>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-slate-600">
                    {tinyGarden.technologies.map((technology) => (
                      <span key={technology}>
                        <span className="text-primary/60">#</span>{technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={tinyGarden.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Play Tiny Garden"
                className="group mt-6 grid grid-cols-2 gap-2 overflow-hidden sm:grid-cols-12"
              >
                <figure className="col-span-2 overflow-hidden rounded-sm bg-slate-100 sm:col-span-8">
                  <img
                    src={tinyGardenGameplay}
                    alt="Tiny Garden gameplay with the plant collecting water and sunlight"
                    className="aspect-[16/9] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </figure>
                <div className="col-span-2 grid grid-cols-2 gap-2 sm:col-span-4 sm:grid-cols-1">
                  <figure className="overflow-hidden rounded-sm bg-slate-100">
                    <img
                      src={tinyGardenStart}
                      alt="Tiny Garden start screen"
                      className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  </figure>
                  <figure className="overflow-hidden rounded-sm bg-slate-100">
                    <img
                      src={tinyGardenBloom}
                      alt="Tiny Garden full-bloom completion screen"
                      className="aspect-video h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  </figure>
                </div>
              </a>
            </article>

            <ol className="border-t border-slate-200">
              {projects.map((project, index) => {
                const content = (
                  <>
                    <span className="pt-1 font-mono text-[10px] text-slate-400">0{index + 3}</span>
                    <span className="min-w-0 flex-1">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/title inline-flex items-center gap-2 text-base font-medium text-slate-900 transition-colors hover:text-primary"
                        >
                          {project.name}
                          <ArrowUpRight
                            size={15}
                            className="shrink-0 transition-transform group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5"
                          />
                        </a>
                      ) : (
                        <span className="text-base font-medium text-slate-900">{project.name}</span>
                      )}
                      <span className="mt-1 block text-sm text-slate-500">{project.description}</span>
                      {project.youtubeId && (
                        <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                            title={`${project.name} video demo`}
                            loading="lazy"
                            className="aspect-video w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </span>
                    <span className="col-start-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-slate-600 sm:col-start-3 sm:row-start-1 sm:justify-end sm:text-right">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          <span className="text-primary/60">#</span>{technology}
                        </span>
                      ))}
                    </span>
                  </>
                );

                return (
                  <li key={project.name} className="border-b border-slate-200">
                    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-4 py-6 sm:grid-cols-[auto_minmax(0,1fr)_12rem] sm:gap-x-6">
                      {content}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
