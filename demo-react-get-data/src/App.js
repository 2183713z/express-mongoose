import React from 'react';
export default class App extends React.Component{
  _handleSubmit(e){
    e.preventDefault();
    var data={};
    data.title=this.refs.title.value;
    data.content=this.refs.content.value;
    console.log(data);
  }
  render(){
    return(
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>{/*jsx代码,在html中嵌入js语句加{}*/}
          <input type='text' ref='title' />
          <input type='text' ref='content' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
