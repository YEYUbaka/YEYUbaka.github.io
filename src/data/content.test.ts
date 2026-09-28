import { describe, expect, it } from 'vitest'
import { profile } from './profile'
import { projects } from './projects'

describe('portfolio content', () => {
  it('keeps LocalRAG as the first featured project', () => {
    expect(projects[0].id).toBe('localrag')
    expect(projects[0].url).toBe('https://github.com/YEYUbaka/LocalRAG')
  })

  it('uses only the three approved public projects', () => {
    expect(projects.map((project) => project.id)).toEqual([
      'localrag',
      'ai-learning-companion',
      'doubanspider',
    ])
  })

  it('keeps the personal positioning separate from the reference profile', () => {
    expect(profile.title).toContain('Test Development')
    expect(JSON.stringify({ profile, projects })).not.toContain('xy200303')
  })
})
