import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/database/postgres";
import * as signUpFactory from "./factories/signUpFactory";

//------------------------------------------------------------------------------

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users`
})

//------------------------------------------------------------------------------

describe('POST /signUp', () => {
    it('Return status 201. Registration successfully complete', async () => {
        const user = await signUpFactory.createNewUser()
        const result = await supertest(app).post('/signUp').send(user)
        const createdUser = await prisma.users.findUnique({where: {email:user.email}});
        
        expect(result.status).toBe(200)
        expect(createdUser).not.toBeNull()
    })
})

//------------------------------------------------------------------------------

afterAll(async () => {
    await prisma.$disconnect();
});

