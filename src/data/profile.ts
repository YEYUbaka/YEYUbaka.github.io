export type ProfileLink = {
  label: string
  href: string
}

export const profile = {
  name: 'YEYUbaka',
  title: 'AI Student · Test Development · Python',
  intro:
    '我是一名人工智能专业学生，当前专注于测试开发、Python 工程和 AI 应用实践。',
}

export const focusItems = [
  {
    index: '01',
    title: '测试开发',
    description: '从接口测试、自动化测试到测试工具开发，持续建立工程化质量能力。',
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

export const learningItems = [
  '接口测试',
  '自动化测试',
  'Python 工程',
  'AI 应用',
]

export const contactLinks: ProfileLink[] = [
  { label: 'GitHub', href: 'https://github.com/YEYUbaka' },
  { label: 'Email', href: 'mailto:yeyubaka@foxmail.com' },
]

