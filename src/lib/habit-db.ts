import BetterSqlite3 from 'better-sqlite3';
import { existsSync ,mkdirSync} from 'node:fs';
import path from 'node:path';

import { Habit } from './habit';


export default class habitDB {
    #client : BetterSqlite3.Database

    constructor(db: string){        
        if(!existsSync(db)){
            mkdirSync(db,{recursive:true});
        }

        this.#client = new BetterSqlite3(path.join(db,'habits.db'));
        this.setup();
    }

    async createHabit(habit: Habit) : Promise<Habit> {

        const stmt = this.#client.prepare(`
        INSERT INTO habits (name, Description, category, Date, Frequency, Reminder, sfid,ContactId) VALUES (@name, @Description, @category, @Date, @Frequency, @Reminder,@sfid ,@ContactId)`);
        const info = stmt.run(habit)

        return { ...habit, id: info.lastInsertRowid };
    }

    deleteHabit(id: bigint | number | undefined) : void {
        const stmt = this.#client.prepare(`
            DELETE FROM habits WHERE id = @id
        `);
        stmt.run({id});
    }
    
    getHabitBySfid(sfid: string | undefined): Habit | null {
        const stmt = this.#client.prepare(`
            SELECT * FROM habits where sfid = @sfid
        `);
        return stmt.get({ sfid }) as unknown as Habit | null;
    }

    async listHabits(): Promise<Habit[]> {
        const stmt = this.#client.prepare(`SELECT * FROM habits`);
        const rows = stmt.all();
        return rows as Habit[]
    }

    listLocalHabits(): Habit[]{
        const stmt = this.#client.prepare(`SELECT * FROM habits where sfid IS null`);
        const rows = stmt.all();
        return rows as Habit[]
    }

    setup():void{
        this.#client.exec(`
        CREATE TABLE IF NOT EXISTS habits (
            id INTEGER PRIMARY KEY autoincrement,
            sfid TEXT NULL,
            name TEXT NOT NULL,
            Description TEXT,
            category TEXT NOT NULL,
            Date TEXT,
            Frequency TEXT,
            Reminder TEXT,
            ContactId TEXT
        )
        `);
    }

    async shortListHabits(number :number): Promise<Habit[]> {
        const stmt = this.#client.prepare(`SELECT * FROM habits ORDER BY id LIMIT ${number}`);
        const rows = stmt.all();
        return rows as Habit[]
    }


    updateHabit(habit: Habit ) : Habit {
        const stmt = this.#client.prepare(`
        UPDATE habits 
        SET name = @name,
            Description= @Description ,
            category = @category,
            Date = @Date ,
            Frequency=@Frequency ,
            Reminder =@Reminder ,
            ContactId = @ContactId,
            sfid = @sfid
        WHERE id = @id
        `)
        stmt.run(habit)
        return habit  
    } 
}

