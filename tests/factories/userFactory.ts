import prisma from '../../src/database/postgres';
import {TypeUser} from '../../src/utils/interfaces'
import { EncryptData } from '../../src/utils/bcrypt';

const createUser = (user: TypeUser) => {
	return prisma.users.create({
		data: {
			...user,
			password: EncryptData(user.password),
		},
	});
};

export default createUser;