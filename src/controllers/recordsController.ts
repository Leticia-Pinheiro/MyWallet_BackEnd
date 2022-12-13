import { Request, Response } from "express"
import * as recordsService from "../services/recordsService"
import { TypeRecord } from "../utils/interfaces"

export async function createRecord(req: Request, res: Response){
        
    const recordData: TypeRecord = req.body 
    await recordsService.createRecords(recordData)
    res.send("Registration successfully complete").status(201)    
}

export async function getRecords(req: Request, res: Response){

    const userId : number = Number(req.params.userId)

    const records = await recordsService.getRecords(userId)
    res.send(records).status(200)
}

export async function deleteRecord(req: Request, res: Response){
    const id : number = Number(req.params.id)
    await recordsService.deleteRecord(id)
    res.send('Record deleted!').status(200)
}