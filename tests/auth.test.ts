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

    it('Returns status 422. Invalid Input', async () => {  
              
        const user = createNewUser()        
		const {name, password} = user
		const result = await supertest(app).post('/signUp').send({name, password});		

		expect(result.status).toBe(422) 
    })

})


describe('POST /signIn', () => {

    it('Return status 201. Login successfully complete', async () => {

        const user = createNewUser()
        await createUser(user)
        const {email, password} = user
        const result = await supertest(app).post('/signIn').send({email, password})       
        
        expect(result.status).toBe(200)

    })

    it('Returns status 404. Email not found', async () => {  

        const user = createNewUser() 
        const {email, password} = user  		
		const result = await supertest(app).post('/signIn').send({email, password});		

		expect(result.status).toBe(404) 
    })

    it('Returns status 422. Incorrect Password', async () => {  

        const user = createNewUser() 
        await createUser(user)
        const {email} = user 
        const incorrectPassword = "teste321" 		
		const result = await supertest(app).post('/signIn').send({email, incorrectPassword});		

		expect(result.status).toBe(422) 
    })   

})

//------------------------------------------------------------------------------

afterAll(async () => {
    await prisma.$disconnect();
});

