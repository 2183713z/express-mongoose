import React, { PropTypes } from 'react'
import axios from 'axios';


class ShowPost extends React.Component {
  constructor(){
    super();
    this.state={
      data:{}
    }
  }
  componentDidMount() {
    //  Promise
    let id=this.props.params.id;
    let address=`http://localhost:3000/post/${id}`;
    axios.get(address).then(res => {
      this.setState({
        data:res.data.post
      })
      // console.log(res.data);
      console.log(this.state.data);
      // console.log(this.props);
    });
  }
  render () {
    return (
      <div>

        {this.state.data.title}<br/>
        {this.state.data.category}<br/>
        {this.state.data.content}
      </div>
    )
  }
}

export default ShowPost;
