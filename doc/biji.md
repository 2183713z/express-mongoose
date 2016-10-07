# Mongodb 数据库操作
!['我自己'](images/1.jpg)
### 开启Mongo Shell
```js
$ mongo

```
### 创建一个数据库
```
$ use digicity-express-api
```
数据库是mongodb中的顶级存储单位，之下一级就 **集合**
### 创建一个集合
```
$ db.createCollection('posts')
```
### 插入数据记录
一个集合(例如：posts),里面可以插入多个数据记录
```
$ db.posts.insert({title:'myTitle',content:'myContent'})
```
### 查看集合中的所有记录
```
 $ db.posts.find()
```
