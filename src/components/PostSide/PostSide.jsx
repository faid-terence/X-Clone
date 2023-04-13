import React from 'react'
import { Posts } from '../Posts/Posts'
import { PostShare } from '../PostShare/PostShare'
import './PostSide.css'
export const PostSide = () => {
  return (
    <div className="PostSide">
        <PostShare/>
        <Posts/>
       
    </div>
  )
}
