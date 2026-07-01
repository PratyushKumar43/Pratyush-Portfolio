import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import RoamingCharacter from './components/RoamingCharacter'
import { useState, useEffect, useCallback } from 'react'
import { MapPin, ArrowUpRight, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { profile, socials, projects, experience, skills, education, stats, projectTagIcons } from './data'
import GitHubCard from './components/GitHubCard'

const companyLogos: Record<string, string> = {}

const sections = ['Projects', 'Experience', 'Education', 'Skills'] as const

export default function App() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActiveSection(e.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' },
    )
    for (const id of sections) {
      const el = document.getElementById(id.toLowerCase())
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <RoamingCharacter />
      <Helmet>
        <title>Pratyush Kumar Behera</title>
        <meta property="og:title" content="Pratyush Kumar Behera" />
        <meta property="og:description" content="Full Stack & Applied AI Engineer. Building, Analyzing, Breaking." />
        <meta property="og:image" content="https://pratyushkumar43.github.io/opengraph.png" />
        <meta property="og:url" content="https://pratyushkumar43.github.io/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://pratyushkumar43.github.io/opengraph.png" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <nav className="flex items-center justify-between mb-12">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {profile.username}
          </Link>
          <div className="flex items-center gap-1">
            <Link to="/resume">
              <Button variant="ghost" size="sm">
                Resume
              </Button>
            </Link>
          </div>
        </nav>

        <section className="mb-16">
          <Avatar size="lg" className="mb-5 size-12 ring-1 ring-foreground/10">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback>PK</AvatarFallback>
          </Avatar>

          <h1 className="text-[32px] font-semibold tracking-tight mb-2 text-pretty leading-tight">
            {profile.name}
          </h1>
          <p className="text-sm text-muted-foreground mb-1">{profile.title}</p>
          <p className="text-sm text-muted-foreground/60 mb-6 leading-relaxed text-pretty max-w-prose">
            {profile.bio}
          </p>

          <div className="flex items-center gap-1">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label={social.name}>
                  <social.icon className="size-4" aria-hidden="true" />
                </Button>
              </a>
            ))}
          </div>
        </section>

        <div className="sticky top-0 z-10 -mx-6 px-6 py-3 mb-10 bg-background/80 backdrop-blur border-b border-border">
          <nav className="flex items-center gap-0.5">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s.toLowerCase())}
                className={`text-xs font-medium px-2.5 py-1.5 rounded-sm transition-colors ${
                  activeSection === s.toLowerCase()
                    ? 'text-foreground bg-muted'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {s}
              </button>
            ))}
          </nav>
        </div>

        <section
          id="projects"
          className="mb-16 scroll-mt-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Projects
            </h2>
            <span className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="group block text-left w-full"
              >
                <div className="h-full overflow-hidden rounded-sm bg-card ring-1 ring-foreground/5 transition-all duration-150 ease-geist hover:ring-foreground/15 active:scale-[0.99]">
                  {project.github && (
                    <GitHubCard
                      repoUrl={project.github}
                      description={project.description}
                      index={idx}
                    />
                  )}
                  <div className="px-4 py-3">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="text-sm font-medium">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground/40 mt-0.5 transition-colors group-hover:text-foreground/60" aria-hidden="true" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed text-pretty mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {projectTagIcons[tag] && (
                            <img
                              src={projectTagIcons[tag]}
                              alt=""
                              className="size-3 object-contain"
                            />
                          )}
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <Separator className="mb-16" />

        <section
          id="experience"
          className="mb-16 scroll-mt-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Experience
            </h2>
            <span className="flex-1 h-px bg-border" />
          </div>
          <div className="space-y-8">
            {experience.map((exp, i) => {
              const logo = companyLogos[exp.company]
              return (
                <div
                  key={i}
                  className="relative pl-5 border-l border-border hover:border-foreground/20 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <h3 className="text-sm font-semibold">{exp.role}</h3>
                    <span className="shrink-0 text-[11px] text-muted-foreground/60 font-mono tabular-nums">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {logo && (
                      <img
                        src={logo}
                        alt={`${exp.company} logo`}
                        width={16}
                        height={16}
                        className="size-4 rounded object-contain bg-muted"
                      />
                    )}
                    <p className="text-xs text-muted-foreground/80">{exp.company}</p>
                    <span className="text-[11px] text-muted-foreground/60 flex items-center gap-1">
                      <MapPin className="size-3" aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed text-pretty mb-3">
                    {exp.description}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.details.map((detail, j) => (
                      <li
                        key={j}
                        className="text-xs text-muted-foreground/60 leading-relaxed text-pretty pl-3 relative"
                      >
                        <span className="absolute left-0 top-[6px] size-1 rounded-full bg-foreground/10" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <Separator className="mb-16" />

        <section
          id="education"
          className="mb-16 scroll-mt-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Education
            </h2>
            <span className="flex-1 h-px bg-border" />
          </div>
          {education.map((edu, i) => (
            <div
              key={i}
              className="relative pl-5 border-l border-border hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4 mb-1.5">
                <h3 className="text-sm font-semibold">{edu.degree}</h3>
                <span className="shrink-0 text-[11px] text-muted-foreground/60 font-mono tabular-nums">
                  {edu.period}
                </span>
              </div>
              <p className="text-xs text-muted-foreground/80 mb-1">{edu.school}</p>
              <p className="text-[11px] text-muted-foreground/60 flex items-center gap-1">
                <MapPin className="size-3" aria-hidden="true" />
                {edu.location}
              </p>
            </div>
          ))}
        </section>

        <Separator className="mb-16" />

        <section
          id="skills"
          className="mb-16 scroll-mt-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Skills
            </h2>
            <span className="flex-1 h-px bg-border" />
          </div>
          <div className="space-y-5">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-[11px] font-medium text-muted-foreground/60 uppercase tracking-wider mb-2.5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="text-[12px] px-3 py-2 border border-dashed"
                    >
                      {skill.icon && (
                        <img
                          src={skill.icon}
                          alt=""
                          className="size-3.5 object-contain"
                        />
                      )}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="mb-16" />

        <section className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              GitHub Activity
            </h2>
            <span className="flex-1 h-px bg-border" />
          </div>
          <div className="rounded-sm overflow-hidden ring-1 ring-foreground/5 bg-white p-3">
            <img
              src="https://ghchart.rshah.org/6366f1/PratyushKumar43"
              alt="PratyushKumar43's GitHub contribution chart"
              className="w-full"
              loading="lazy"
            />
          </div>
          <p className="text-[11px] text-muted-foreground/50 mt-2 text-right">
            contributions in the last year · github.com/PratyushKumar43
          </p>
        </section>

        <Separator className="mb-10" />

        <footer className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} {profile.username}
          </p>
          <div className="flex items-center gap-1">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon-xs" aria-label={social.name}>
                  <social.icon className="size-3" aria-hidden="true" />
                </Button>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
    </>
  )
}
