import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/database/postgres";
import createRecord from "./factories/recordFactory";
import tokenFactory from "./factories/tokenFactory";
import createNewRecord from "./factories/newRecordFactory";

//------------------------------------------------------------------------------

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE records`
})

//------------------------------------------------------------------------------

describe('POST /record', () => {

    it('Return status 200. Registration successfully complete', async () => {
        
        const {token, id} = await tokenFactory()
        const record = createRecord(id)        
        const result = await supertest(app).post('/record').set('Authorization', `Bearer ${token}`).send(record);

        expect(result.status).toBe(200)
        
    })

    it('Return status 401. Absence of token', async () => {

        const record = createRecord(1)        
        const result = await supertest(app).post('/record').send(record)

        expect(result.status).toBe(401)
        
    })

    it('Return status 422. Invalid Input', async () => {

        const {token} = await tokenFactory()
        const value = 1000;    
        const result = await supertest(app).post('/record').set('Authorization', `Bearer ${token}`).send({value});

        expect(result.status).toBe(422)
        
    })
    
})

describe('GET /records', () => {

    it('Return status 200. Get records by user id', async () => {

        const {token, id} = await tokenFactory()
        const result = await supertest(app).get(`/records/${id}`).send().set('Authorization', `Bearer ${token}`)         
        
        expect(result.status).toBe(200)
        expect(result.body).toBeInstanceOf(Array)
    })

    it('Return status 401. Absence of token', async () => {
        const result = await supertest(app).get('/records/1').send()        
        expect(result.status).toBe(401)
    })
})

describe('DELETE /record', () => {

    it ('Return status 200. Delete record', async () => {

        const {token, id} = await tokenFactory()        
        const record = createRecord(id) 
        const createdRecord = await createNewRecord(record)
        const recordId = createdRecord.id

        const result = await supertest(app).delete(`/record/${recordId}`).send().set('Authorization', `Bearer ${token}`)
        expect(result.status).toBe(200)       
        
    })

    it ('Return status 401. Absence of token', async () => {

        const {id} = await tokenFactory()        
        const record = createRecord(id) 
        const createdRecord = await createNewRecord(record)
        const recordId = createdRecord.id

        const result = await supertest(app).delete(`/record/${recordId}`).send()
        expect(result.status).toBe(401)       
        
    })
})

//------------------------------------------------------------------------------

afterAll(async () => {
    await prisma.$disconnect();
});