var express=require('express')
var app=express()
var bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/demo-mongoose-save-data');
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
   console.log('success!')
   var dogSchema=mongoose.Schema({
     name:String
   })
   var dog=mongoose.model('dog',dogSchema);
   var kitty=new dog({name:'puppy'});
   console.log(kitty.name);
   kitty.save();
 });
app.listen(3000,function(){
     console.log('running on port 3000...');
   })
