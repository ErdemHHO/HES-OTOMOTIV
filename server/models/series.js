
import mongoose from 'mongoose'

const seriesShema = mongoose.model('series',{
    seriesName: {
        type: String,
        required: true
    }
})

export default seriesShema;