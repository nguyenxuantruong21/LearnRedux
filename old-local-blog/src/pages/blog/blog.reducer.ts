import { createReducer, createAction } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postlist: Post[]
  editingPost: Post | null
}

const initalState: BlogState = {
  postlist: initalPostList,
  editingPost: null
}

export const addPost = createAction<Post>('/blog/addPost')
export const deletePost = createAction<string>('/blog/deletePost')
export const startEditingPost = createAction<string>('/blog/startEditingPost')
export const cancelEditingPost = createAction('/blog/cancelEditingPost')
export const finishEditingPost = createAction<Post>('/blog/finishEditingPost')

const blogReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload
      state.postlist.push(post)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      const foundPostIndex = state.postlist.findIndex(
        (post) => post.id === postId
      )
      if (foundPostIndex != -1) {
        state.postlist.splice(foundPostIndex, 1)
      }
    })
    .addCase(startEditingPost, (state, action) => {
      const postId = action.payload
      const foundPost =
        state.postlist.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    })
    .addCase(cancelEditingPost, (state, action) => {
      state.editingPost = null
    })
    .addCase(finishEditingPost, (state, action) => {
      const postId = action.payload.id
      state.postlist.some((post, index) => {
        if (post.id === postId) {
          state.postlist[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    })
})

export default blogReducer
