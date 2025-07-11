import Joi from 'joi'
export const CreateProductDto = Joi.object({
    id: Joi.string().optional(),
    name: Joi.string().required(),
    color: Joi.string().optional().default('NaN'),
    price: Joi.number().optional().default(0)
})