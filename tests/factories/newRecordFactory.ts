import prisma from '../../src/database/postgres';
import {TypeRecord} from '../../src/utils/interfaces';

const createNewRecord = (record: TypeRecord) => {
	return prisma.records.create({
		data: {
			...record,
		},
	});
};

export default createNewRecord;