import React from 'react'
import Post from './Post'
import { graphql, gql } from 'react-apollo'
import CircularProgress from 'material-ui/CircularProgress'
import Paper from 'material-ui/Paper';
class Posts extends React.Component {

  static propTypes = {
    data: React.PropTypes.object,
  }

  render () {

    const { loading } = this.props.data;


    if (loading) {
    return (  <div className='w-100 pa4 flex justify-center'>
                  <CircularProgress size={80} thickness={5} />
              </div>);
    }

    return (
      <div className=''>
        <div className=''>
          {this.props.data.allPosts.map((post) =>
            <Post key={post.id} post={post} />
          )}
        </div>
      </div>
    )
  }
}

const FeedQuery = gql`query FeedQuery {
  allPosts(orderBy: createdAt_DESC) {
    id
    imageUrl
    description
  }
}`

export default Posts;
