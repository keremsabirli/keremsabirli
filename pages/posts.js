import matter from 'gray-matter'
import PostCard from '../components/postCard/postCard'
import { getPosts } from '../lib/posts'

export default function Posts ({ posts }) {
  console.log(posts)
  return (
    <div className='posts-page-container'>
      <div></div>
      <div className='posts-container'>
        {posts.map(post => {
          return <PostCard post={post}></PostCard>
        })}
      </div>
    </div>
  )
}

export async function getStaticProps (context) {
  var posts = await getPosts()
  return {
    props: { posts: posts },
    revalidate: 1
  }
}
