import React, { Component } from 'react';
import axios from "axios";
import Settings from '../../settings'

 export default class EditPost extends Component {
   constructor(){
     super();
     this.state={
       post:{}
     }
   }
   componentDidMount(){
     var id=this.props.params.id;
     console.log(id);
     axios.get(`${Settings.host}/post/${id}`).then( res=>{
       this.setState({
         post:res.data.post
       })
       console.log(res);
     })
   }
   render(){
     return(
       <div>
          "hello"
          {JSON.stringify(this.state.post)}
       </div>
     )
   }

 }
