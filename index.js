const express = require('express');
const app = express(); 
var http = require('http').Server(app);
var io = require('socket.io')(http,{});
io.sockets.on('connection', function (socket){
  console.log('socket connection')})
var url="file:///Users/codenation19/Documents/GitHub/TickTackToe/index.js"




app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
 
});
app.use ('',express.static(__dirname + ""));



io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.emit('some event', {for: 'everyone'});