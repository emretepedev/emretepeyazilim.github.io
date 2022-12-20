import { writeFileSync } from 'fs'

export const generateRobots = (spaUrl: string) => {
  const filePath = __dirname.replace('scripts', 'static/robots.txt')
  const content = `User-agent: *\nDisallow:\n\nSitemap: ${spaUrl}/sitemap.xml`

  writeFileSync(filePath, content)
}
