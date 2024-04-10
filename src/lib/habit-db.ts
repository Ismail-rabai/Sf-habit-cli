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
        INSERT INTO habits (name, Description, category, Date, Frequency, Reminder) VALUES (@name, @Description, @category, @Date, @Frequency, @Reminder)`);
        const info = stmt.run(habit)

        return { ...habit, id: info.lastInsertRowid };
    }
    
    /* async getHabit(id: string) {
    }
*/
    async listHabits(): Promise<Habit[]> {
        const stmt = this.#client.prepare(`SELECT * FROM habits`);
        const rows = stmt.all();
        return rows as Habit[]
    }

    setup():void{
        this.#client.exec(`
        CREATE TABLE IF NOT EXISTS habits (
            id INTEGER PRIMARY KEY autoincrement,
            name TEXT NOT NULL,
            Description TEXT,
            category TEXT NOT NULL,
            Date TEXT,
            Frequency TEXT,
            Reminder TEXT
        )
        `);
    }


    async shortListHabits(number :number): Promise<Habit[]> {
        const stmt = this.#client.prepare(`SELECT * FROM habits ORDER BY id LIMIT ${number}`);
        const rows = stmt.all();
        return rows as Habit[]
    } 
}

