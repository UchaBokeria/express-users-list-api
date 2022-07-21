import * as Interface from './Users.interface'
import { Database } from '../../Core/Database'

export class UsersService {

    static async Create() {
    }

    static async Read() {
      
      return await Database.query(" SELECT 1 + 1 AS solution;  ", [])

    }

    static async Update() {

    }

    static async Delete() {

    }

    static async find(id) {
      console.log(id);
      
      return await Database.query(" SELECT 1 + 1 AS solution;  ", [])

    }

}