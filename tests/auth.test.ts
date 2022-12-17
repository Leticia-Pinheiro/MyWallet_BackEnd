import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/database/postgres";

//------------------------------------------------------------------------------

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users`
})

//------------------------------------------------------------------------------

describe('POST /signUp', () => {
    it('Return status 201. Registration successfully complete', async () => {
        
    })
})

//------------------------------------------------------------------------------

afterAll(async () => {
    await prisma.$disconnect();
});

