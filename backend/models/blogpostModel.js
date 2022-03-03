import mongoose from 'mongoose';

const {ObjectId} = mongoose.Schema
const blogpostSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    title: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },
    
    category: { 
        type: String, 
        required: true 
    },

    bannerImage: {
        type: String,
        required: false
    },

    text: {
        paragraph1: {
            type: String,
            required: true
        },

        paragraph2: {
            type: String,
            required: true
        },

        paragraph3: {
            type: String,
            required: true
        },

        paragraph4: {
            type: String,
            required: true
        },

        paragraph5: {
            type: String,
            required: true
        },
    },

    images: {
        image1: {
            type: String,
            required: false
        },

        image2: {
            type: String,
            required: false
        },

        image3: {
            type: String,
            required: false
        },

        image4: {
            type: String,
            required: false
        },

        image5: {
            type: String,
            required: false
        }
    }
}, {
    timestamps: true,
    }
)

const Blogpost = mongoose.model('Blogpost', blogpostSchema)

export default Blogpost

