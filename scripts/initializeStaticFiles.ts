import { generateRobots } from './generateRobots'
import { generateSitemap } from './generateSitemap'

export const initializeStaticFiles = (spaUrl: string) => {
  generateRobots(spaUrl)
  generateSitemap(
    [
      {
        loc: '/',
        changeFreq: 'monthly',
        priority: '1.0',
      },
    ],
    {
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: '0.5',
    },
    spaUrl
  )
}
