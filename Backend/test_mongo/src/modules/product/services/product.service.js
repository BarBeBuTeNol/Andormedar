

const ProductService = {
    create: (payload) =>{
        return new ProductModel(payload).save()
    },
    getAll: (query = {})=>{
        return ProductModel.find(query)
    },
    getOneByID : (id = {})=>{
        return ProductModel.findOne({_id:id})
    },
    updateOneById : (id,payload)=>{
        return ProductModel.updateOne({_id:id},{$set:payload})
    }
    ,deleteOneById : (id) =>{
        return ProductModel.deleteOne({_id:id})
        
    }
}
export default ProductService