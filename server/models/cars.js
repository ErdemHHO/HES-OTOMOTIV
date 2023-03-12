
import mongoose from 'mongoose'

const carShema = mongoose.model('car',{
    series_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'series',
        required: true
    },
    carName: {
        type: String,
        required: true
    }
})

export default carShema;