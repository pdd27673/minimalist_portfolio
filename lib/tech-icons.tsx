import { IconType } from 'react-icons'
import * as SiIcons from 'react-icons/si'

// Map tech names to react-icons simple-icons names
const techIconNameMap: Record<string, string> = {
  'Python': 'SiPython',
  'TypeScript': 'SiTypescript',
  'Go': 'SiGo',
  'Java': 'SiJava',
  'React': 'SiReact',
  'Next.js': 'SiNextdotjs',
  'Next.js 15': 'SiNextdotjs',
  'Node.js': 'SiNodedotjs',
  'AWS': 'SiAmazonaws',
  'Docker': 'SiDocker',
  'PostgreSQL': 'SiPostgresql',
  'MongoDB': 'SiMongodb',
  'Redis': 'SiRedis',
  'GitLab CI/CD': 'SiGitlab',
  'Terraform': 'SiTerraform',
  'TensorFlow': 'SiTensorflow',
  'OpenAI': 'SiOpenai',
  'GraphQL': 'SiGraphql',
  'FastAPI': 'SiFastapi',
  'Firebase': 'SiFirebase',
  'Tailwind CSS': 'SiTailwindcss',
  'Tailwind CSS 4.0': 'SiTailwindcss',
  'Railway': 'SiRailway',
  'Telegram API': 'SiTelegram',
  'SQLite': 'SiSqlite',
  'Gatsby': 'SiGatsby',
  'Drizzle ORM': 'SiPostgresql',
  'NextAuth.js': 'SiNextdotjs',
  'Cheerio': 'SiNodedotjs',
  'Resend': 'SiNodedotjs',
  'REST APIs': 'SiNodedotjs',
  'Microservices': 'SiDocker',
}

export function getTechIcon(techName: string): IconType | null {
  const iconName = techIconNameMap[techName]
  if (!iconName) {
    // Try partial match
    for (const [key, icon] of Object.entries(techIconNameMap)) {
      if (techName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(techName.toLowerCase())) {
        const Icon = (SiIcons as any)[icon]
        return Icon || null
      }
    }
    return null
  }
  
  const Icon = (SiIcons as any)[iconName]
  return Icon || null
}
