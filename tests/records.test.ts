import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/database/postgres";
import createNewRecord from "./factories/recordFactory";
import tokenFactory from "./factories/tokenFactory";

//------------------------------------------------------------------------------

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE records`
})

//------------------------------------------------------------------------------

describe('POST /record', () => {

    it('Return status 200. Registration successfully complete', async () => {
        
        const {token, id} = await tokenFactory()
        const record = createNewRecord(id)        
        const result = await supertest(app).post('/record').set('Authorization', `Bearer ${token}`).send(record);

        expect(result.status).toBe(200)
        
    })

    it('Return status 401. Absence of token', async () => {

        const record = createNewRecord(1)        
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

//------------------------------------------------------------------------------

afterAll(async () => {
    await prisma.$disconnect();
});