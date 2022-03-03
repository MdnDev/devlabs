import mongoose from 'mongoose';
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import colors from 'colors'
import blogposts from './data/blogposts.js'
import User from './models/userModel.js'
import Blogpost from './models/blogpostModel.js'
import users from "./data/users.js"


dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Blogpost.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleBlogposts = blogposts.map(blogpost => {
            return { ...blogpost, user: adminUser }
            
        })

        await Blogpost.insertMany(sampleBlogposts)
        
        console.log('data imported !'.green.inverse)
        process.exit()

    } catch(error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}



const destroyData = async () => {
    try {
        await Blogpost.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()

    } catch(error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}