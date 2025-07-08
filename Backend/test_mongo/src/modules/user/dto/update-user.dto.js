import Joi from 'joi';

const UpdateUserDto = Joi.object({
    category: Joi.number().required(),
    n_movies: Joi.string().required(),
    des_movies: Joi.string().required(),
    poster: Joi.string().required(),
    video: Joi.string().required(),
});

export default UpdateUserDto;
