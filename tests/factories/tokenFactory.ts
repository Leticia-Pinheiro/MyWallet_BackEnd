import createNewUser  from './signUpFactory';
import createUser from './userFactory';
import { generateToken } from '../../src/utils/generateToken';

const tokenFactory = async () => {
	const user = createNewUser()    
	const createdUser = await createUser(user);
	const token = generateToken(createdUser.id);

	return token;
};

export default tokenFactory;