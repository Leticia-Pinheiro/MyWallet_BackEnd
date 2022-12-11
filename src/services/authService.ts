import * as authRepository from "../repositories/authRepository"
import { generateToken } from "../utils/generateToken"
import { EncryptData }  from "../utils/bcrypt"
import { TypeUser, TypeLogin} from "../utils/interfaces"
import bcrypt from "bcrypt"

export async function signUp(
    userData: TypeUser){

    await validateToSignUp(userData)
    
    const {password} = userData
    const encryptedPassword : string = EncryptData(password)

    await authRepository.createUser({...userData, password:encryptedPassword}) 
}

export async function signIn(
    userData: TypeLogin){

    const {id, name} = await validateToSignIn(userData)
    const token = generateToken(id)
    return {token, id, name}
}

export async function validateToSignUp(
    userData: TypeUser
){
    const {email} = userData
    const user =  await authRepository.searchUserByEmail(email)

    if(user){
        throw { code: "Unauthorized", message: "E-mail already registered"}
    }
   
}

export async function validateToSignIn(
    userData: TypeLogin){

    const {email, password} = userData
    const user =  await authRepository.searchUserByEmail(email)      

    if(!user){
        throw { code: "Not Found", message: "Invalid e-mail "}
    }

    await validatePassword(password, user.password)    
    return user
}

export async function validatePassword(
    password: string,
    encryptedPassword: string){

    if(!bcrypt.compareSync(password, encryptedPassword)){
        throw { code: "Not Found", message: "Invalid password"}
    }
}