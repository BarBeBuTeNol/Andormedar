import UserService from '../services/movie.service.js';

const UserController = {
    addUser: async (req, res) => {
        const created = await UserService.createUser({ ...req.body });
        res.status(201).json({
            success: true,
            data: created,
            URL: req.url,
        });
    },
    showAllUser: async (req, res) => {
        try {
            const users = await UserService.getUserAll();
            res.status(200).json({
                success: true,
                data: users,
                URL: req.url,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getProductById: async (req, res) => {
        const { id } = req.params;
        const users = await UserService.getUserById(id);
        res.status(200).json({
            success: true,
            data: users,
        });
    },
    updateMovie: async (req, res) => {
        try {
            const { id } = req.params;
    
            // Validate the ID
            if (!id) {
                return res.status(400).json({ success: false, message: 'ID is required' });
            }
    
            // Destructure the movie data from the request body
            const { n_movies, des_movies, poster, video, category } = req.body;
    
            // Validate the required fields
            if (!n_movies) {
                return res.status(400).json({ success: false, message: 'Movie name is required' });
            }
    
            // Prepare the data for updating
            const updateData = {
                n_movies,
                des_movies,
                poster,
                video,
                category,
            };
    
            // Update the movie in the database
            const updatedMovie = await UserService.updateOneUserById(id, updateData);
    
            // Check if the movie was found and updated
            if (!updatedMovie) {
                return res.status(404).json({ success: false, message: 'Movie not found' });
            }
    
            // Send a success response with the updated movie data
            res.status(200).json({
                success: true,
                data: updatedMovie,
            });
        } catch (err) {
            // Handle errors and send an appropriate response
            res.status(500).json({ success: false, message: `Error updating movie: ${err.message}` });
        }
    },
    
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ success: false, message: 'ID is required' });
            }

            const result = await UserService.deleteUserById(id);
            if (result.affectedRows === 0) {
                return res.status(404).json({ success: false, message: 'Data not found' });
            }
            res.status(200).json({
                success: true,
                message: 'Data deleted successfully',
                data: result,
            });
        } catch (err) {
            console.error(`Error deleting data: ${err.message}`);
            res.status(500).json({ success: false, message: `Error deleting data: ${err.message}` });
        }
    },
};

export default UserController;
