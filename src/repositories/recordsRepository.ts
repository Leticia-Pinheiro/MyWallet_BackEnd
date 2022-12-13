import prisma from "../database/postgres"
import { TypeRecord } from "../utils/interfaces"


export async function createRecord(
    recordData: TypeRecord){  
          
    await prisma.records.create({data: recordData})       
}

export async function getRecords(
    userId: number){
    
    const userData = await prisma.records.findMany({where: {userId}})
    return userData
}

export async function deleteRecord(
    id: number){
    
    await prisma.records.delete({where: {id}})    
}
