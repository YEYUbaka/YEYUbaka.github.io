export type ProfileLink = {
  label: string
  href: string
  detail?: string
}

export type StackGroup = {
  name: string
  items: string[]
}

export const profile = {
  name: 'YEYUbaka',
  title: 'AI Student · Test Development · Python',
  roles: '测试开发 / Python 工程 / AI 应用',
  intro: '我是一名人工智能专业学生，当前专注于测试开发、Python 工程和 AI 应用实践。',
  avatar: 'https://github.com/YEYUbaka.png?size=144',
}

export const focusItems = [
  {
    index: '01',
    title: '测试开发',
    description: '从接口测试、自动化测试到测试工具开发，把质量意识写进开发过程。',
  },
  {
    index: '02',
    title: 'Python 工程',
    description: '使用 Python 参与后端服务、数据处理和可复现的项目实践。',
  },
  {
    index: '03',
    title: 'AI 应用',
    description: '关注 RAG、知识库和 AI 学习工具，把模型能力落到可运行的产品里。',
  },
]

export const learningItems = ['接口测试', '自动化测试', '测试工具开发', 'RAG / AI 应用']

export const stackGroups: StackGroup[] = [
  { name: '测试开发', items: ['JMeter', 'Postman', 'Apifox', '自动化测试'] },
  { name: '开发', items: ['Python', 'FastAPI', 'React', 'TypeScript', 'C'] },
  { name: '数据与基础设施', items: ['MySQL', 'ChromaDB', 'Git', 'Docker'] },
]

export const directionItems = [
  {
    title: '测试开发',
    detail: '持续补齐接口测试、自动化测试和测试工具开发能力，关注可复现的质量反馈。',
  },
  {
    title: 'Python 工程',
    detail: '使用 Python 参与后端服务、数据处理和 AI 应用，把想法整理成可运行的工程。',
  },
  {
    title: 'AI 应用',
    detail: '围绕 RAG、知识库和学习工具做实践，关注检索链路、服务接口和实际使用体验。',
  },
]

export const contactLinks: ProfileLink[] = [
  { label: 'GitHub', href: 'https://github.com/YEYUbaka', detail: 'github.com/YEYUbaka' },
  { label: 'Email', href: 'mailto:yeyubaka@foxmail.com', detail: 'yeyubaka@foxmail.com' },
]
