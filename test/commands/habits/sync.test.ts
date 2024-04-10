import {expect, test} from '@oclif/test'

describe('habits/sync', () => {
  test
  .stdout()
  .command(['habits/sync'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['habits/sync', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
