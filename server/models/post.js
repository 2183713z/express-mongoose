var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var PostSchema=new Schema(
  {
    title:String,
    category:String,
    content:String,
  },
  {
    timestamps:true //时间戳，显示创建时间createdAt和更新时间updatedAt
  }
)
module.exports=mongoose.model('Post',PostSchema)
