import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {isLoading: true, blogsList: []}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const url = 'https://apis.ccbp.in/blogs'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachBlog => ({
      id: eachBlog.id,
      avatarUrl: eachBlog.avatar_url,
      imageUrl: eachBlog.image_url,
      author: eachBlog.author,
      topic: eachBlog.topic,
      title: eachBlog.title,
    }))
    this.setState({isLoading: false, blogsList: formattedData})
  }

  render() {
    const {isLoading, blogsList} = this.state
    return (
      <>
        <div className="blog-list-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            blogsList.map(eachBlog => (
              <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
            ))
          )}
        </div>
      </>
    )
  }
}

export default BlogList
