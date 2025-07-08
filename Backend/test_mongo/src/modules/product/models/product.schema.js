
export const ProductSchema = ({
    name:{
        type: String,
        required: true
    },
    color:{
        type: String,
        default:'NaN'
    },
    price:{
        type: Number,
        default:0
    }
})
export default ProductModel