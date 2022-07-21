import { UsersService } from './Users.service'
import { DELETE, GET, POST, PUT } from '../../Core/API-core'

export const Users = async (req, res) => {
    
    GET('/Users', UsersService.Read)

    GET('/Users/:id', UsersService.find)

    POST('/Users/Create', UsersService.Create)

    PUT('/Users/Update/:id', UsersService.Update)

    DELETE('/Users/delete/:id', UsersService.Delete)
    
}