import Joi from 'joi';

const CreateCategoryDto = Joi.object({
    id_category: Joi.number().required(),
    id_n_category: Joi.string().required(),
});

export default CreateCategoryDto;
