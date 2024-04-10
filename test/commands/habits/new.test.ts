import {expect, test} from '@oclif/test'

describe('habits/new', () => {
  test
  .stdout()
  .command(['habits/new'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['habits/new', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
