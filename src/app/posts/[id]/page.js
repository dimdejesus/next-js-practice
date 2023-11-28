import Post from '@/components/Post'
import React from 'react'

const Posts = ({ params }) => {
  return (
    <div>
      Post {params.id}
    </div>
  )
}

export default Posts
