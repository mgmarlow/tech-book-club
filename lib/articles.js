import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), 'content', 'articles')

function fileNameToId(name) {
  return name.replace(/\.md$/, '')
}

export function getArticleIds() {
  const fileNames = fs.readdirSync(articlesDir)

  return fileNames.map(name => ({
    params: {
      id: fileNameToId(name),
    },
  }))
}

export function getArticleData(id) {
  const fullPath = path.join(articlesDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data,
  }
}

export function getArticleDataByDate() {
  const fileNames = fs.readdirSync(articlesDir)

  const articles = fileNames.map(name => {
    const id = fileNameToId(name)
    return getArticleData(id)
  })

  return articles.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}
