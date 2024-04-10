import {expect, test} from '@oclif/test'

describe('habits/list', () => {
  test
  .stdout()
  .command(['habits/list'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['habits/list', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
