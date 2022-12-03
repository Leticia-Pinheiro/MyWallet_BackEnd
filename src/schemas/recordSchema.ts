import JoiBase from 'joi';
import JoiDate from '@joi/date';

const joi = JoiBase.extend(JoiDate);

const recordSchema = joi.object({    
    userId: joi.number().required(),
	value: joi.number().required(),
    description: joi.string().required(),
    date: joi.date().format('DD/MM').required(),
    type: joi.valid('incoming', 'outgoing').required(),
    category: joi.string().required()
});

export default recordSchema;