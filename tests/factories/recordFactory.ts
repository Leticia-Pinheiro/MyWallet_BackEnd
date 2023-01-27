import { TypeRecord } from "../../src/utils/interfaces";

const createNewRecord = (userId : number) : TypeRecord => {
    return {
        userId: userId,
        value: 100,
        description: 'Mercado',
        date: '11/12',
        type: 'outgoing'
    };
};

export default createNewRecord;