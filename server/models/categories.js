
import mongoose from 'mongoose'

const categoryShema = mongoose.model('category',{
    categoryName: {
        type: String,
        required: true
    }
})

export default categoryShema;