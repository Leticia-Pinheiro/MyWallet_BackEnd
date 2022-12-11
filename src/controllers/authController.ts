import { Request, Response } from "express"
import * as authService from "../services/authService"
import { TypeUser, TypeLogin } from "../utils/interfaces"

export async function signUp(req: Request, res: Response){
        
    const userData: TypeUser = req.body 
    await authService.signUp(userData)
    res.send("Registration successfully complete").status(201)    
}

export async function signIn(req: Request, res: Response){

    const userData : TypeLogin = req.body 
    const {token, id, name} = await authService.signIn(userData)
    res.send({token, id, name}).status(200)
}