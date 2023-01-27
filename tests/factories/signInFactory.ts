import { faker } from "@faker-js/faker"
import { TypeLogin } from "../../src/utils/interfaces"

const createNewSignIn = (): TypeLogin => {
    return {      
      email: faker.internet.email(),
      password: "teste12345",
    };
};

export default createNewSignIn;