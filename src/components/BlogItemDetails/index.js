import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/blogs/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const formattedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogDetails: formattedData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {author, avatarUrl, content, imageUrl, title, topic} = blogDetails
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container">
            <h1 className="blog-item-details-title">{title}</h1>
            <div className="blog-item-details-container">
              <div className="blog-item-avatar-container">
                <img src={avatarUrl} className="avatar-url" />
                <p>{author}</p>
              </div>
              <div>
                <img
                  src={imageUrl}
                  className="blog-item-image-url"
                  alt={title}
                />
                <p className="content">{content}</p>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
