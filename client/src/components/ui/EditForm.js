import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

class EditForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:this.props.post.title,
      content:this.props.post.content,
      category:this.props.post.category
    }
  }
  handleSubmit(e){
    e.preventDefault(e);
    console.log('submit');
    const title=this.refs.title.value;
    const content=this.refs.content.value;
    const category=this.refs.category.value;
   //{title:"hello", content: "my content", category: "tig"}
     // var dataObject = {
     //   title: title,
     //   content: content,
     //   category: category
     // }
     // // http://es6.ruanyifeng.com/#docs/object#属性的简洁表示法
     //
     // var dataObject = {
     //   title,
     //   content,
     //   category
     // }
    console.log({title, content, category});
    this.props.publishPost({title,content,category})
  }
  // publishPost(data){
  //   axios.put(`${Settings.host}/posts/${id}`)
  // }
  getStyles() {
   return {
     form: {
       padding: '20px 40px',
     },
     div: {
       marginBottom: '10px'
     },
     label: {
       display: 'block',
       fontSize: '.9em',
       color: 'rgba(0,0,0,.6)',
       paddingBottom: '10px'
     },
     select: {
       border: '1px solid #ddd',
       borderRadius: '5px',
       fontSize: '1em',
       height: '30px',
       backgroundColor: '#fff',
       ':focus': {
         outline: 'none'
       }
     },
     input: {
       width: '100%',
       height: '48px',
       border: '1px solid #ddd',
       borderRadius: '5px',
       fontSize: '1em',
       padding: '10px',
       boxSizing: 'border-box',
       ':focus': {
         border: '1px solid #00bcd4',
         outline: 'none'
       }
     },
     actions: {
       textAlign: 'center'
     },
     button: {
       width: '120px',
       height: '36px',
       border: 'none',
       backgroundColor: '#ff4081',
       fontSize: '1em',
       color: '#fff',
       display: 'inline-block',
       margin: '20px auto 0',
       borderRadius: '20px',
       ':hover': {
         cursor: 'pointer'
       },
       ':focus': {
         outline: 'none'
       }
     },
     link: {
       display: 'inline-block',
       marginLeft: '15px',
       fontSize: '1em',
       color: '#00bcd4',
       opacity: '.8',
       textDecoration: 'none'
     }
   };
 }

  // render(){
  //   return (
  //     <div>
  //       {/*{JSON.stringify(this.props.post)}
  //         对象转换为字符串
  //       */}
  //       <form onSubmit={this.handleSubmit.bind(this)}>
  //         <div>
  //           <label>title</label>
  //           <input ref='title' defaultValue={this.state.title} />
  //         </div>
  //         <div>
  //           <label>content</label>
  //           <textarea ref='content' defaultValue={this.state.content} />
  //         </div>
  //         <div>
  //           <label>category</label>
  //           <input ref='category' defaultValue={this.state.category} />
  //         </div>
  //         <input type='submit'/>
  //       </form>
  //     </div>
  //   )
  // }
  render() {
   const styles = this.getStyles();
   return (
     <form style={styles.form} onSubmit={this.handleSubmit.bind(this)}>
       <div style={styles.div}>
         <label style={styles.label}>分类</label>
         <input style={styles.input} ref='category' defaultValue={this.props.post ? this.props.post.category : ''} />
       </div>
       <div style={styles.div}>
         <label style={styles.label}>标题</label>
         <input style={styles.input} ref='title' defaultValue={this.props.post ? this.props.post.title : ''} />
       </div>
       <div style={styles.div}>
         <label style={styles.label}>内容</label>
         <textarea style={[styles.input, {height: '100%'}]} rows='20' key='1' ref='content' defaultValue={this.props.post ? this.props.post.content : ''} />
       </div>
       <div style={styles.actions}>
         <button type='submit' style={styles.button} key='2'>Submit</button>
         <Link to='/' style={styles.link}>取消</Link>
       </div>
     </form>
   );
 }
}
export default Radium(EditForm);
