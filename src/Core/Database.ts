import dotenv, { config } from 'dotenv'
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';

dotenv.config()

var Config = JSON.parse(process.env.MYSQL)
var connection = mysql.createPool({
    "host": Config.host,
    "user": Config.user,
    "password": Config.password, 
    "database": Config.database,
    "waitForConnections": true,
    "Promise": bluebird
})

export class Database {

    static async query(statement: string, _values: any) {

        

        var result = await connection.execute(statement, _values)
        return result[0]
        
    }

}