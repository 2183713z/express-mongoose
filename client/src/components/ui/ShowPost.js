import React, { PropTypes } from 'react'
import axios from 'axios';


class ShowPost extends React.Component {
  componentDidMount() {
    //  Promise
    let id=this.props.params.id;
    let address=`http://localhost:3000/post/${id}`;
    axios.get(address).then(res => {
      console.log(res.data);
      console.log(this.props);
    });
  }
  render () {
    return (
      <div>
        {this.props.params.id}
      </div>
    )
  }
}

export default ShowPost;
