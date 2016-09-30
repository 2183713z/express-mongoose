var express=require('express')
var app=express()
var bodyParser=require('body-parser')
app.use(bodyParser.json())
// app.get('/',function(req,res){
      // res.send('Hello');
//   console.log('Hello');
// })
app.get('/write',function(req,res){
  var page="<form method='post' action='/posts'>"+
            "<input type='text' name='title'/>"+
            "<input type='submit'/>"+
            "</form>"
  res.send(page)
  // console.log('GET /posts');
})
app.get('/posts/:id',function(req,res){
  console.log('GET /posts/:id');
})
//更新一篇文章,不是发出请求的是接受请求
app.put('/posts/:id',function(req,res){
  res.send('PUT /posts/:id')
  console.log('PUT /posts/:id');
})
//发布一篇文章
app.post('/posts',function(req,res){
  // console.log('POST /posts');
  res.send(req.body.title)
})
//删除一篇文章
app.delete('/posts/:id',function(req,res){
  console.log('DELETE /posts/:id');
})
app.listen(3000,function(){
  console.log('running on port 3000...');
})
