var express=require('express')
var app=express()
var bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/9-30-express');
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
   console.log('success!')
 });
 //关闭同源策略，开放cors
var cors=require('cors');
app.use(cors());
var Post =require('./models/post')
app.get('/write',function(req,res){
  var page="<form method='post' action='/posts'>"+
            "<input type='text' name='title'/>"+
            "<input type='submit'/>"+
            "</form>"
  res.send(page)
  console.log('GET /write');
})
//发布一篇文章
app.post('/posts',function(req,res){
  console.log(req.body);
  var post=new Post ({
    title:req.body.title,
    category:req.body.category,
    content:req.body.content
  });
  post.save(function(err){
    if(err) return console.log(err);
    console.log('saved!');
  });
  // console.log('POST /posts');
  // res.redirect('/posts')
  res.json({message:'保存成功'})
})
app.get('/posts',function(req,res){
  // res.send('<h1>All My Blog</h1>')
  Post.find().exec(function(err,posts){
    res.json({posts:posts})
    // res.send(posts)
  })
  console.log('GET /posts');
})
//后台的动态路由 在命令行通过
//curl -H "Content-Type: application/json" -X GET  -d '{"title":"xiaoyin","content":"myContent"}' http://localhost:3000/post/xxx
//模拟get
app.get('/post/:id',function(req,res){
  // res.send(req.params.id)
  Post.findById({_id:req.params.id},function(err,doc){//find 找到数组 findOne找到对象
    // res.send(doc)
    if(err) return res.send('出错了!')
    res.json({post:doc})
  })
})

app.get('/',function(req,res){
      res.redirect('http://baidu.com');
  console.log('GET /');
})
app.get('/posts/:id',function(req,res){
  console.log('GET /posts/:id');
})
//更新一篇文章,不是发出请求的是接受请求
app.put('/posts/:id',function(req,res){
  res.send('PUT /posts/:id')
  console.log('PUT /posts/:id');
})
//删除一篇文章
app.delete('/posts/:id',function(req,res){
  console.log('DELETE /posts/:id');
})
app.listen(3000,function(){
  console.log('running on port 3000...');
})
