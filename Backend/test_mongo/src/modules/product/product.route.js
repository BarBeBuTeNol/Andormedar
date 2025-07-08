import express from 'express'
const ProductRouter = express.Router()
import ProductController from './controllers/product.controller.js'
import {createValidator} from 'express-joi-validation'
import { CreateProductDto } from './dto/create-product.dto.js'
import { UpdateProductDto } from './dto/update-product.dto.js'
const validator = createValidator(); // สร้าง validator

ProductRouter .post('/', validator.body(CreateProductDto),ProductController.createProduct) 
ProductRouter .get('/', ProductController.getProduct) 
ProductRouter .get('/:id', ProductController.getProductById) 
ProductRouter .patch('/:id',validator.body(UpdateProductDto ), ProductController.updateProduct) 
ProductRouter .delete('/:id', ProductController.deleteProduct) 
export default ProductRouter