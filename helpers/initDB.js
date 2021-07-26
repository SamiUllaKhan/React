import mongoose from "mongoose"

// samiulla
// X2u1ve62MkLoIPy1
function initDB() {
  if (mongoose.connections[0].readyState) {
    console.log('alredy connected')
    return
  }
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
  })
  mongoose.connection.on('error', (err) => {
    console.log('error while connecting to MongoDB', err)
  })
}

export default initDB
