var express = require('express');
var app = express();
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/digicity-express-api');
var db=mongoose.connection;
db.on('error',console.log);
db.once('open',function(){
  console.log('success');
  var catSchema=mongoose.Schema({
    name:String
  })
  var cat=mongoose.model('Cat',catSchema);
  var mimi=new cat({name:'huahua'});
  console.log(mimi.name);
  mimi.save(function(){
    if(err) return console.log(err)
    
  })
})

app.post('/posts', function(req, res){  console.log('hello');
});

app.listen(3000, function(){  console.log('running on port 3000.....');
});
