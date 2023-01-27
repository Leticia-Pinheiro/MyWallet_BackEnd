import createNewUser  from './signUpFactory';
import createUser from './userFactory';
import { generateToken } from '../../src/utils/generateToken';

const tokenFactory = async () => {
	const user = createNewUser()    
	const createdUser = await createUser(user);   
    const id = createdUser.id 
	const token = generateToken(id);

	return {token, id};
};

export default tokenFactory;