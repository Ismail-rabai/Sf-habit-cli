import {Args, Command, Flags} from '@oclif/core'

import habitDB from '../../lib/habit-db'


export default class HabitsList extends Command {
  static override aliases = ['habits:list', 'habits:ls']

  static override args = {
    file: Args.string({description: 'file to read'}),
  }

  static override description = 'Showing all the habits'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
  }

  // eslint-disable-next-line new-cap
 #db = new habitDB(this.config.dataDir)

  async catch(error) {
    // do something or
    // re-throw to be handled globally
    this.log(error)
  }

  public async run(): Promise<void> {
    const createdHabit = await this.#db.listHabits()
    this.log(JSON.stringify(createdHabit))
  }

}
