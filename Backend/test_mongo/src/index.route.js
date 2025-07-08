
import express from 'express'
import ProductRouter from './modules/product/product.route.js'
import UserRouter from './modules/user/movie.route.js'

const IndexRouter = express();

IndexRouter.use('/movie',UserRouter)

export default IndexRouter