import * as recordsRepository from "../repositories/recordsRepository"
import * as authRepository from "../repositories/authRepository"
import { TypeRecord } from "../utils/interfaces"

export async function createRecords(
    recordData: TypeRecord){

    const { userId } = recordData
    await validateUserId(userId)
    
    await recordsRepository.createRecord(recordData)

}

export async function getRecords(
    userId: number)
{    
    await validateUserId(userId)
    const records = await recordsRepository.getRecords(userId)

    return records
}

export async function deleteRecord(
    id: number)
{    
    await recordsRepository.deleteRecord(id)    
}


export async function validateUserId(
    userId : number
){    

    const user =  await authRepository.searchUserById(userId)

    if(!user){
        throw { code: "Not Found", message: "Invalid user "}
    }
}


