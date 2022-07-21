import dotenv, { config } from 'dotenv'
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';

dotenv.config()
var Config = JSON.parse(process.env.MYSQL)

var connection:any = mysql.createPool({
  "host": Config.host,
  "user": Config.user,
  "password": Config.password, 
  "database": Config.database,
  "waitForConnections": true,
  "namedPlaceholders": true,
  "Promise": bluebird
})

export class Database {

    static async query(statement: string, _values: any, debug: boolean = false) {

      var inCount = (statement.match(/ IN\(/g) || []).length;
      var lastStatementBeforeIn = statement;
      
      for (let i = 1; i < inCount+1; i++) {
        let index = lastStatementBeforeIn.indexOf(' IN(',i);
        //console.log("ind:",index);
        console.log(lastStatementBeforeIn);
        
        
        let end = lastStatementBeforeIn.indexOf(')', index);
        let inParam = lastStatementBeforeIn.substring(index + 4, end).split(':')[1];

        
        var xk2 = _values[inParam] ? (_values[inParam].split(',')).map((e,i)=> { _values[`${inParam}_${i}`] = `${e}`;return `:${inParam}_${i}` }).join(',') : ''
       // console.log(statement,_values, statement.substring(0, index) + ' IN(' + xk2 + ')' + statement.substring(end + 1));
        
       console.log(lastStatementBeforeIn,{f1:statement.substring(0, index), f2:' IN(' + xk2 + ')' , f3:statement.substring(end + 1)});
        
        statement = statement.substring(0, index) + ' IN(' + xk2 + ')' + lastStatementBeforeIn.substring(lastStatementBeforeIn.indexOf(')', index) + 1);
        
        lastStatementBeforeIn = statement.substring(index+4, lastStatementBeforeIn.length);
      }
      
        if(debug) console.warn( { statement, _values } )
        var result = await connection.execute(statement, _values)
        return result[0]
        
    }

}