import { TypeRecord } from "../../src/utils/interfaces";

const createNewRecord = () : TypeRecord => {
    return {
        userId: 1,
        value: 100,
        description: 'Mercado',
        date: '11/12',
        type: 'outgoing'
    };
};

export default createNewRecord;