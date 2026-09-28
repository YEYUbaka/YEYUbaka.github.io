export type Project = {
  slug: string
  name: string
  description: string
  tags: string[]
  url: string
}

export const projects: Project[] = [
  {
    slug: 'localrag',
    name: 'LocalRAG',
    description:
      '本地优先的 RAG 个人知识库系统，结合向量检索、BM25/RRF 和本地 Embedding/Reranker。',
    tags: ['FastAPI', 'React', 'ChromaDB', 'BM25/RRF'],
    url: 'https://github.com/YEYUbaka/LocalRAG',
  },
  {
    slug: 'ai-learning-companion',
    name: 'AI-learning-companion',
    description: '基于 FastAPI 与 React 的 AI 个性化学习平台。',
    tags: ['FastAPI', 'React', 'AI'],
    url: 'https://github.com/YEYUbaka/AI-learning-companion',
  },
  {
    slug: 'doubanspider',
    name: 'doubanspider',
    description: '豆瓣电影信息爬取、数据分析与可视化项目。',
    tags: ['Python', '爬虫', '数据可视化'],
    url: 'https://github.com/YEYUbaka/doubanspider',
  },
]

