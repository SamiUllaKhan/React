import mongoose from 'mongoose'

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  categoryIds: {
    type: Number,
    required: true,
  },
  size: {
    type: Array,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
})

export default mongoose.model.product ||
  mongoose.model('product', productsSchema)
