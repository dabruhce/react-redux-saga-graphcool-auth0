import React from 'react'
import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class Post extends React.Component {

  static propTypes = {
    post: React.PropTypes.object,
  }

  render () {


const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

    return (
      <div className=''>
      <Card style={style}>
        <CardMedia>
          <img src={this.props.post.imageUrl} alt="" />
        </CardMedia>

        <CardText>
            {this.props.post.description}&nbsp;
        </CardText>

        </Card>
      </div>
    )
  }
}
