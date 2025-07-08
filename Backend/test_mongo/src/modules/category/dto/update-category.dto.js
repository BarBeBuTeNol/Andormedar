import Joi from 'joi';
import { Category } from '../../user/model/movie.schema';

const UpdateCategoryDto = Joi.object({
    id_category: Joi.number().required(),
    id_n_category: Joi.string().required(),
});

export default UpdateCategoryDto;
