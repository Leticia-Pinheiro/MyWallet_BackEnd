import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/database/postgres";
import createNewUser from "./factories/signUpFactory";
import createUser from "./factories/userFactory";
import createNewLogin from "./factories/signInFactory";

//------------------------------------------------------------------------------

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users`
})

//------------------------------------------------------------------------------

describe('POST /signUp', () => {

    it('Return status 201. Registration successfully complete', async () => {

        const user = createNewUser()
        const result = await supertest(app).post('/signUp').send(user)
        const createdUser = await prisma.users.findUnique({where: {email:user.email}});
        
        expect(result.status).toBe(200)
        expect(createdUser).not.toBeNull()        
    })

    it('Returns status 401. Email already registered', async () => {  
              
        const user = createNewUser()        
		await createUser(user);
		const result = await supertest(app).post('/signUp').send(user);		

		expect(result.status).toBe(401) 
    })

})

//------------------------------------------------------------------------------

afterAll(async () => {
    await prisma.$disconnect();
});

