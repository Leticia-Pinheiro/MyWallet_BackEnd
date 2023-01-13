import { faker } from "@faker-js/faker";

export async function createNewUser () {
  const user = {
    name: "Fulana",
    email: faker.internet.email(),
    password: "teste12345",    
  };
  
  return user;
} 

