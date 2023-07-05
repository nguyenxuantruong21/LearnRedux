import CreatePost from './Components/CreatePost'
import Postlist from './Components/PostList'

export default function Blog() {
  return (
    <div className='p-5'>
      <CreatePost />
      <Postlist />
    </div>
  )
}
