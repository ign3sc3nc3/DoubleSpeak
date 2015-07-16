var app = require('express')();
/*var express = require('express');*/
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log("Client connected");

    socket.on('disconnect', function(){
        console.log("Client disconnected");
    });
    socket.on('clientconnect', function(msg){
        console.log('Client Message: ' + msg);
    });
    //Receiving chat message from client
    socket.on('chatmsg', function(msg){
        console.log("Message received from client: " + msg);
        //Emit chat message to all connected clients
        io.emit('chatmsg', msg);

    });
});


http.listen(3000, function(){
    console.log('listening on :3000');
});

