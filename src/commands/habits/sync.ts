import { Command, Flags} from '@oclif/core'
import { AuthInfo, Connection } from '@salesforce/core'

import habitDB from '../../lib/habit-db'

export default class HabitsSync extends Command {

  static override aliases = ['sync']
  static override args = {}

  static override description = 'Synchronize habit with salesforce org'

  static override examples = [
    '<%= config.bin %> <%= command.id %> sync',
  ]

  static override flags = {
    'target-org' : Flags.string({char:'o' , description: 'Target Org',required : true})
  }

  // eslint-disable-next-line new-cap
  #db = new habitDB(this.config.dataDir)

  public async run(): Promise<void> {
    const {flags} = await this.parse(HabitsSync)
    const authInfo = await AuthInfo.create({username: flags['target-org']})
    const conn = await Connection.create({authInfo})

    // get local habit witho no salesforce id 
    const localHabit = this.#db.listLocalHabits();
    for await (const habit of localHabit){
      // Create a new habit in salesforce
      const habitDate = habit.Date ? new Date(habit.Date) : new Date();
      const sfHabit = await conn.sobject('Habit__c').create({
        // eslint-disable-next-line camelcase
        Category__c: habit.category,
        // eslint-disable-next-line camelcase
        Contact__c: '0037R00003Otk4uQAB',
        // Contact__c: habit.ContactId,
        // eslint-disable-next-line camelcase
        Description__c: habit.Description,
        // eslint-disable-next-line camelcase
        Habit_Goal__c: habitDate,
        // eslint-disable-next-line camelcase
        Habit_Reminder__c: habit.Reminder,
        Name: habit.name,
        // eslint-disable-next-line camelcase
        TargetFrequency__c: habit.Frequency,
        
      })
      this.#db.updateHabit({...habit,sfid: sfHabit.id})
      this.log(`Habit Created Successfully with the id ${habit.id} to Salesforce with the sfId ${sfHabit.id}`)
    }

    // Fetch habits from salesforce 
    

    /* const habits = await conn.query('Select Id , name , Category__c from habit__c ')
    for ( const habit of habits.records){
        this.log(`the record from Salesforce ${habit.Id}`)
    } */
  }
}
