import { Args, Command, Flags } from '@oclif/core'
import inquirer from 'inquirer'

import { Habit } from '../../lib/habit'
import habitDB from '../../lib/habit-db'


export default class HabitsNew extends Command {
  
  static override aliases = ['new', 'create']
  static override args = {
    // eslint-disable-next-line perfectionist/sort-objects
    name: Args.string({ name: 'name', description: 'the name of the habit', required: true }),
    // eslint-disable-next-line perfectionist/sort-objects
    category: Args.string({ name: 'category', description: 'the category of the habit', options: ['Exercise', 'Reading', 'Meditation', 'Coding', 'Healthy Eating', 'Others'] }),
  }

  static override description = 'Creating a new habit'

  static override examples = [
    '<%= config.bin %> <%= command.id %> "Food" --id "contact" --Date 20/04/2024 --Reminder 14:00 --Frequency 1 --Description "This is a test habit"',
  ]

  static override flags = {
    ContactId : Flags.string({char:'c', description: 'Id of the contact that want to add the habit'}),
    Date: Flags.string({ char: 'd', description: 'Date of the habit' }),
    Description: Flags.string({ char: 'D', description: 'Description of the habit' }),
    Frequency: Flags.string({ char: 'f', description: 'Frequency of the habit for example 1 mean every dar 2 every 2 days etcs' }),
    Reminder: Flags.string({ char: 'r', description: 'Reminder time' }),
  }

  // eslint-disable-next-line new-cap
 #db = new habitDB(this.config.dataDir)

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(HabitsNew)
    this.log(`you input --name and --date: ${flags.Description}`)
    
    if (!args.category) {
      const result = await inquirer.prompt([{
        choices: ['Exercise', 'Reading', 'Meditation', 'Coding', 'Healthy Eating', 'Others'],
        message: 'What is the category of the habit?',
        name: 'category',
        type: 'list',
      }])
      args.category = result.category
    }

    if (!flags.ContactId) {
      const result = await inquirer.prompt([{
        choices: ['0037R00003Otk4uQAB', '0037R00003Ps9l3QAB'],
        message: 'What is the contact related to the habit?',
        name: 'ContactId',
        type: 'list',
      }])
      flags.ContactId = result.ContactId
    }

    const habit : Habit = {
      ContactId: flags.ContactId || '',
      Date:flags.Date,
      Description: flags.Description ||'',
      Frequency:flags.Frequency ||'1',
      Reminder:flags.Reminder ||'14:00',
      category: args.category,
      name:args.name,
      sfid: null
    }
    const createdHabit = await this.#db.createHabit(habit)
    this.log(`Habit created with id ${createdHabit.id}`) 
  }
}
