import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trime: true
    },
    email: {
        type: String,
        required: true,
        trime: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,  
    },
    photo: {
        type: String, 
    },
}, {
    timestamps: true,
})

export default mongoose.model('User', userSchema) //para interactuar con la db con los metodos