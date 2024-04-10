import {Args, Command, Flags} from '@oclif/core'
import {cli} from 'cli-ux'

import { Habit } from '../../lib/habit'
import habitDB from '../../lib/habit-db'


export default class HabitsList extends Command {
  static override aliases = ['list', 'ls']

  static override args = {
    file: Args.string({description: 'file to read'}),
  }

  static override description = 'Showing habits'
  public static enableJsonFlag: boolean = true

  static override examples = [
    '<%= config.bin %> <%= command.id %> habits list',
    '<%= config.bin %> <%= command.id %> habits list --extended',
    '<%= config.bin %> <%= command.id %> habits list --short 10',
  ]

  static override flags = {
    extended: Flags.boolean({char: 'e', description: 'extended list composed of all habits'}),
    short: Flags.integer({char: 's', description: 'short list composed of the number of habits that you want'}),
  }

  // eslint-disable-next-line new-cap
 #db = new habitDB(this.config.dataDir)

  async catch(error) {
    // do something or
    // re-throw to be handled globally
    this.log(error)
  }

  public async run(): Promise<Habit[]> {
    const {flags} = await this.parse(HabitsList)

    const createdHabit: Habit[] = flags.short ? await this.#db.shortListHabits(flags.short) : await this.#db.listHabits();

    const columns = {
      id: {
        extended: true,
        header: 'ID', 
        minWidth: 10, 
      },
      name: {
        get: (row: { name: Habit }) => row.name || 'N/A', 
        header: 'Name',
        minWidth: 20,
      },
      // eslint-disable-next-line perfectionist/sort-objects
      category: {
        
        header: 'Category',
        minWidth: 20,
      },
      // eslint-disable-next-line perfectionist/sort-objects
      Frequency: {
        get: (row: { Frequency: Habit }) => row.Frequency || 'N/A', 
        header: 'Frequency',
        minWidth: 20,
      },
      // eslint-disable-next-line perfectionist/sort-objects
      date: {
        get: (row: { Date: Habit }) => row.Date ||'N/A', 
        header: 'Date',
        minWidth: 20,
      },
      description: {
        extended: true,
        get: (row: { Description: Habit }) => row.Description || 'N/A',
        header: 'Description',
        minWidth: 20,
      },
      sfid: {
        extended: true,
        get: (row: { sfid: Habit }) => row.sfid?  `Yes ${row.sfid}` : 'No',
        header: 'SalesforceId',
        minWidth: 10,
      },
    }
    // this.log(JSON.stringify(createdHabit))
    cli.table(createdHabit, columns, {
      extended: flags.extended, // Include extended columns based on the command flags
      printLine: this.log.bind(this), // Use this.log for printing lines so it respects this Command's context
      sort: 'id', // Optional: specify a column to sort by
    })
    return createdHabit;
  }

}
