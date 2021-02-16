import mongoose from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
      unique: true,
    },
    ru: {
      type: String,
      required: true,
    },
    ua: {
      type: String,
    },
    en: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model('post', postSchema)

export default Post
