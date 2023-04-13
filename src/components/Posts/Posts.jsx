import React from 'react'
import { PostsData } from '../../Data/PostData'
import { Post } from '../Post/Post'
import './Posts.css'

export const Posts = () => {
  return (
    <div className="Posts">
        {PostsData.map((post, id) => {
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}
