import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {author, title, imageUrl, avatarUrl, topic, id} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-item-container">
        <img src={imageUrl} className="image-url" />
        <div>
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} className="avatar-url" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
