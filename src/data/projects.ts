export type ProjectCategory = 'AI 应用' | '测试开发' | 'Python 工程'

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  name: string
  tagline: string
  category: ProjectCategory
  techStack: string[]
  background: string
  role: string
  highlights: string[]
  links: ProjectLink[]
  url: string
  cover: { from: string; to: string }
}

export const projectCategories: ProjectCategory[] = ['AI 应用', '测试开发', 'Python 工程']

export const projects: Project[] = [
  {
    id: 'localrag',
    name: 'LocalRAG',
    tagline: '本地优先的 RAG 个人知识库系统',
    category: 'AI 应用',
    techStack: ['React', 'TypeScript', 'FastAPI', 'ChromaDB', 'BM25/RRF'],
    background:
      '围绕个人知识整理与问答构建的本地优先 RAG 系统，把文档、索引和检索链路放在可控的本地环境中。',
    role:
      '前端使用 React、TypeScript 和 Vite，后端使用 FastAPI/Python，结合 ChromaDB、本地 Embedding/Reranker 与 BM25/RRF 混合检索。',
    highlights: ['本地优先的数据与模型链路', '向量检索与 BM25/RRF 混合召回', '提供 REST 与 SSE 接口支持知识库交互'],
    links: [{ label: 'GitHub', url: 'https://github.com/YEYUbaka/LocalRAG' }],
    url: 'https://github.com/YEYUbaka/LocalRAG',
    cover: { from: '#164e63', to: '#3730a3' },
  },
  {
    id: 'ai-learning-companion',
    name: 'AI-learning-companion',
    tagline: 'AI 个性化学习平台',
    category: 'AI 应用',
    techStack: ['FastAPI', 'React', 'AI', 'MySQL'],
    background: '基于 FastAPI 与 React 的 AI 个性化学习平台，把学习计划、组卷、知识图谱和问答组织到一个项目中。',
    role: '使用 Python 后端和 React 前端完成学习场景的服务与交互实践，关注 AI 能力和实际学习流程的结合。',
    highlights: ['围绕个性化学习流程组织功能', 'FastAPI 与 React 前后端协作', '覆盖学习计划、组卷和 AI 问答场景'],
    links: [{ label: 'GitHub', url: 'https://github.com/YEYUbaka/AI-learning-companion' }],
    url: 'https://github.com/YEYUbaka/AI-learning-companion',
    cover: { from: '#0f766e', to: '#1d4ed8' },
  },
  {
    id: 'doubanspider',
    name: 'doubanspider',
    tagline: '豆瓣电影数据分析与可视化',
    category: 'Python 工程',
    techStack: ['Python', '爬虫', '数据分析', '数据可视化'],
    background: '使用 Python 完成豆瓣电影信息的爬取、整理和分析，并将结果转化为可视化内容。',
    role: '围绕数据采集、清洗、分析和展示组织项目流程，实践 Python 数据处理与可视化能力。',
    highlights: ['覆盖电影信息采集与整理', '包含数据分析与可视化流程', '以 Python 项目形式沉淀实践过程'],
    links: [{ label: 'GitHub', url: 'https://github.com/YEYUbaka/doubanspider' }],
    url: 'https://github.com/YEYUbaka/doubanspider',
    cover: { from: '#7c2d12', to: '#a21caf' },
  },
]
