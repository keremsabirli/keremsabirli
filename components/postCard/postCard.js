import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export default function PostCard ({ post }) {
  return (
    <div className='post-card'>
      <div className='post-card-content'>
        <div className='card-header'>
          <h3 className='post-card-title'>{post.title}</h3>
        </div>
        <div className="post-card-description-container">
          <p>{post.description}</p>
        </div>
        <div className='post-card-footer'></div>
      </div>
      <div className='post-card-image-container'>
        <img className='post-card-image' src={post.image.name}></img>
      </div>
    </div>
  )
}
