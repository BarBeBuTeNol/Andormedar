import ProductService from "../services/product.service.js"
const ProductController = {
    createProduct: async (req,res)=>{
        const{name,color,price} = req.body
        const create = await ProductService.create({name,color,price})
    
        res.status(201).json({
            success:true,
            data: create
        })
    },
    getProduct : async (req,res)=>{
        const products = await ProductService.getAll()
        res.status(200).json({
            success:true,
            data: products 
        })
    },
    getProductById : async (req,res)=>{
        const {id} = req.params
        const products = await ProductService.getOneByID(id)
        res.status(200).json({
            success:true,
            data: products 
        })
    },
    updateProduct : async (req,res)=>{
        const {id} = req.params
        const {name,color,price} = req.body
        const updated = await ProductService.updateOneById(id,{name,color,price})
        res.status(200).json({
            success:true,
            data: updated
        })
    },deleteProduct : async (req,res)=>{
        const {id} = req.params
        try {
            const result = await ProductService.deleteOneById(id)
            if (result.deletedCount === 0) {
                return res.status(404).json({ success: false, message: 'Product not found' });
            }
            res.status(200).json({ success: true, message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

}

export default ProductController