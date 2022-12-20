import { readdirSync, writeFileSync } from 'fs'

interface SitemapItem {
  loc: string
  lastMod?: string
  changeFreq?: string
  priority?: string
}

interface DefaultSitemapItem {
  lastMod: string
  changeFreq: string
  priority: string
}

export const generateSitemap = (
  items: SitemapItem[],
  defaultItem: DefaultSitemapItem,
  spaUrl: string
) => {
  const routes = readdirSync(__dirname.replace('scripts', 'pages/'))
  const _items: SitemapItem[] = []

  for (const route of routes) {
    const _item: SitemapItem = {
      loc: route === 'index.vue' ? '/' : `/${route.replace('.vue', '')}`,
      lastMod: defaultItem.lastMod,
      changeFreq: defaultItem.changeFreq,
      priority: defaultItem.priority,
    }

    let _finalItem = null
    for (const item of items) {
      if (item.loc === _item.loc) {
        _finalItem = {
          ..._item,
          ...item,
        }

        break
      }
    }

    _items.push(_finalItem || _item)
  }

  const filePath = __dirname.replace('scripts', 'static/sitemap.xml')
  const contentPrefix = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`
  const contentSuffix = '</urlset>'
  let content = contentPrefix
  const itemContentPrefix = '<url>'
  const itemContentSuffix = '</url>'

  for (const _item of _items) {
    content += itemContentPrefix

    const itemContent = `<loc>${spaUrl}${_item.loc}</loc><lastmod>${_item.lastMod}</lastmod><changefreq>${_item.changeFreq}</changefreq><priority>${_item.priority}</priority>`

    content += itemContent
    content += itemContentSuffix
  }

  content += contentSuffix

  writeFileSync(filePath, content)
}
