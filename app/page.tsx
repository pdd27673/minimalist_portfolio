import { HeroSection } from '@/components/hero-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { EducationSection } from '@/components/education-section'
import { InterestsSection } from '@/components/interests-section'
import { SkillsSection } from '@/components/skills-section'
import { WritingsSection } from '@/components/writings-section'
import { Spotlight } from '@/components/spotlight'
import { portfolioData } from '@/lib/data'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Spotlight />
      <main className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 pt-8">
        <HeroSection />
        
        <ExperienceSection />
        
        <ProjectsSection />
        
        <EducationSection />
        
        <InterestsSection />
        
        <SkillsSection />
        
        <WritingsSection />
        
        <footer className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-4">
            {/* <a href="/interests" className="hover:text-foreground transition-colors">
              Interests
            </a>
            <span>•</span> */}
            <a href="/colophon" className="hover:text-foreground transition-colors">
              Colophon
            </a>
          </div>
        </footer>
      </main>
    </div>
  )
}
