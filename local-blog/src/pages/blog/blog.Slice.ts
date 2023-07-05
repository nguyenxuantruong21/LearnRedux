import { createSlice } from '@reduxjs/toolkit'
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

const blogSlice = createSlice({
  name: 'blog',
  initialState: initalState,
  reducers: {
    addPost: (state, action) => {
      const post = action.payload
      state.postlist.push(post)
    },
    deletePost: (state, action) => {
      const postId = action.payload
      const foundPostIndex = state.postlist.findIndex(
        (post) => post.id === postId
      )
      if (foundPostIndex != -1) {
        state.postlist.splice(foundPostIndex, 1)
      }
    },
    startEditingPost: (state, action) => {
      const postId = action.payload
      const foundPost =
        state.postlist.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    },
    cancelEditingPost: (state) => {
      state.editingPost = null
    },
    finishEditingPost: (state, action) => {
      const postId = action.payload.id
      state.postlist.some((post, index) => {
        if (post.id === postId) {
          state.postlist[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    }
  }
})

export const {
  addPost,
  deletePost,
  startEditingPost,
  cancelEditingPost,
  finishEditingPost
} = blogSlice.actions

const blogReducer = blogSlice.reducer
export default blogReducer
