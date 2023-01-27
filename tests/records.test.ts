import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/database/postgres";
import createNewRecord from "./factories/recordFactory"

//------------------------------------------------------------------------------

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE records`
})

//------------------------------------------------------------------------------

describe('POST /record', () => {
    it('Return status 401. Absence of token', async () => {

        const record = createNewRecord()
        console.log(record)
        const result = await supertest(app).post('/record').send(record)

        expect(result.status).toBe(401)
        
    })
})

//------------------------------------------------------------------------------

afterAll(async () => {
    await prisma.$disconnect();
});