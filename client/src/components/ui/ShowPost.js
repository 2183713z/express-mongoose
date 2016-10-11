import React, { PropTypes } from 'react'
import axios from 'axios';
import Settings from '../../settings';

class ShowPost extends React.Component {
  constructor(){
    super();
    this.state={
      // data:{},
      // wait:true
      post:{}
    }
  }
  getStyles() {
    return {
      content: {
        position: 'relative',
        width: '100%',
        minHeight: '200px',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      category: {
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '4px 6px',
        color: '#fff',
        fontSize: '.8em',
        backgroundColor: '#ed5a5a'
      },
      title: {
        fontSize: '1.3em',
        paddingTop: '10px',
        paddingBottom: '20px',
        textAlign: 'center'
      },
      text: {
        fontSize: '1em',
        color: 'rgba(0,0,0,.8)'
      }
    }
   }
  componentDidMount() {
    //  Promise
    let id=this.props.params.id;
    let address=`${Settings.host}/post/${id}`;
    axios.get(address).then(res => {
      console.log(res.data.post);
      this.setState({
        // data:res.data.post,
        // wait:false
        post: res.data.post
      })
      // console.log(res.data);
      console.log(this.state.data);
      // console.log(this.props);
    });
  }
  render () {
    var styles = this.getStyles();
    return (
      <div style={styles.content}>
        {/*类别： { this.state.wait? '请稍等' : this.state.data.category } <br />
        标题： { this.state.wait? '请稍等' : this.state.data.title } <br />
        内容： { this.state.wait? '请稍等' : this.state.data.content }*/}
        <div style={styles.title}>{this.state.post.title}</div>
        <div style={styles.text}>{this.state.post.content}</div>
        <div style={styles.category}>{this.state.post.category}</div>
      </div>
    )
  }
}

export default ShowPost;
