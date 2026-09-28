import { describe, expect, it } from 'vitest'
import { projects } from './projects'

describe('portfolio content', () => {
  it('keeps LocalRAG as the first featured project', () => {
    expect(projects[0].slug).toBe('localrag')
    expect(projects[0].url).toBe('https://github.com/YEYUbaka/LocalRAG')
  })

  it('uses only the three approved public projects', () => {
    expect(projects.map((project) => project.slug)).toEqual([
      'localrag',
      'ai-learning-companion',
      'doubanspider',
    ])
  })
})

