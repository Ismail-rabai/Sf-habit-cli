import { Command, Flags} from '@oclif/core'
import { AuthInfo, Connection } from '@salesforce/core'


export default class HabitsSync extends Command {
  static override args = {}

  static override description = 'describe the command here'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static override flags = {
    'target-org' : Flags.string({char:'o' , description: 'Target Org',required : true})
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(HabitsSync)

    const authInfo = await AuthInfo.create({username: flags['target-org']})
    const conn = await Connection.create({authInfo})

    const habits = await conn.query('Select Id , name , Category__c from habit__c ')
    for (const habit of habits.records) {
      this.log(`the habit is : ${habit.Id} and the name is  ${habit.Name} of Category ${habit.Category__c}`)
    }
  }
}
