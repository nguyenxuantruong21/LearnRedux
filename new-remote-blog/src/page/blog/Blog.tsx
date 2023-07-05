import React from 'react'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

export default function Blog() {
  return (
    <div className='p-10'>
      <CreatePost />
      <PostList />
    </div>
  )
}
