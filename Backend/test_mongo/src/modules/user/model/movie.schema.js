export const UserModels = {
    id: { type: 'INT', required: false },
    category: { type: 'INT', required: false },
    n_movies: { type: 'VARCHAR', length: 50, required: true },
    des_movies: { type: 'TEXT', required: false },
    poster: { type: 'TEXT', required: false },
    video: { type: 'TEXT', required: false },
};

export const TableName = "movie";
