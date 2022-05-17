import { connect } from 'mongoose'

const { MONGO_URI } = process.env

const mongoConnection = {
  isConnected: false,
}

export const connectToDatabase = async () => {
  if (mongoConnection.isConnected) return

  const db = await connect(MONGO_URI as string)
  mongoConnection.isConnected = db.connections[0].readyState === 1

  if (mongoConnection.isConnected) {
    console.log('Connected to MongoDB')
  } else {
    console.log('Error connecting to MongoDB')
  }
}
