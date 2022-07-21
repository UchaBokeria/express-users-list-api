import { UsersService } from './Users.service'
import { DELETE, GET, POST, PUT } from '../../Core/API-core'

export const Users = async (req, res) => {
    
    GET('/Users', await UsersService.Read())

    GET('/Users/:id', await UsersService.find(req.params.id))

    POST('/Users/Create', await UsersService.Create())

    PUT('/Users/Update/:id', await UsersService.Update())

    DELETE('/Users/delete/:id', await UsersService.Delete())
    
}