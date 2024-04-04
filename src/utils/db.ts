import mongoose from 'mongoose'

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '')
  } catch (error) {
    throw new Error(`Could not connect to Mongo`)
  }
}

export default connect
