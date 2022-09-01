import React from 'react'
import './PostSide.css'
import PostShare from '../postShare/PostShare'
import Post from '../posts/Posts'

export default function PostSide() {
  return (
    <div className='PostSide'>
        <PostShare />
        <Post />
    </div>
  )
}
