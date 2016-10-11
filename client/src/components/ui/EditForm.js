import React from 'react';

export default class EditForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:this.props.post.title
    }
  }
  render(){
    return (
      <div>
        {JSON.stringify(this.props.post)}
        <form>
          <input defaultValue={this.state.title} />
        </form>
      </div>
    )
  }
}
