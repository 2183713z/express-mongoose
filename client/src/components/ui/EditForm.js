import React from 'react';

export default class EditForm extends React.Component{
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
  render(){
    return (
      <div>
        {/*{JSON.stringify(this.props.post)}
          对象转换为字符串
        */}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>title</label>
            <input ref='title' defaultValue={this.state.title} />
          </div>
          <div>
            <label>content</label>
            <textarea ref='content' defaultValue={this.state.content} />
          </div>
          <div>
            <label>category</label>
            <input ref='category' defaultValue={this.state.category} />
          </div>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}
