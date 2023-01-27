import { faker } from "@faker-js/faker";
import { TypeUser } from "../../src/utils/interfaces";

const createNewUser = ():TypeUser => {
  return {
      name: 'Fulano',
      email: faker.internet.email(),
      password: 'senha123'
  };
};

export default createNewUser;


