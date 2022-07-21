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

    static async find(req: any) {

      var id = req.params.id;
      return await Database.query(` SELECT IF(1 IN(:id),'true','false') AS solution , IF(1 IN(:id2),'true','false') AS x;  `, {id: id,id2:id}, true)

    }

}