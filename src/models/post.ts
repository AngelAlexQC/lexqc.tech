import { model, Schema } from 'mongoose'

interface Post {
  title: string
}

const postSchema = new Schema<Post>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [50, 'Title must be less than 50 characters'],
    },
  },
  {
    timestamps: true,
  }
)

const Post = model<Post>('Post', postSchema)

export default Post
