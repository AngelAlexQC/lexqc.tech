import Post from 'models/post'
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from 'utils/mongoose'

connectToDatabase()
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const posts = await Post.find()
  res.status(200).json(posts)
}
