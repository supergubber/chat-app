// import { TokenExpiredError } from 'jsonwebtoken'
import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// dotenv.config()
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log('data base connected successfully')
  } catch (error) {
    console.log('database connection failed')
    console.error(error.message)
  }
}

export default connectToMongoDB
