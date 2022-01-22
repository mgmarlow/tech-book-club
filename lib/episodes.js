import { XMLParser } from 'fast-xml-parser'
import { RSS_URL } from '../constants/env'

const getXML = url =>
  fetch(url)
    .then(res => res.text())
    .then(str => new XMLParser().parse(str))

export async function getEpisodes() {
  try {
    const xml = await getXML(RSS_URL)
    const items = xml.rss.channel.item

    return items.map(item => ({
      title: item.title,
      description: item.description,
      link: item.link,
    }))
  } catch {
    return []
  }
}
