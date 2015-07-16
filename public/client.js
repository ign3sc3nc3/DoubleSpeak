$(document).ready(function() {
            var socket = io();
            //Emit message to test for client connection to server
            var message = "Client connected with server.";
            console.log("Connected with server.");
            socket.emit('clientconnect', message);

            //Send user-input upon submission of form
            $("form").submit(function(){
                socket.emit('chatmsg', $("#msg").val());
                $("#msg").val('');
                    return false;
                });
                //Receive broadcast from server
                socket.on('chatmsg', function(msg){
                    $("#messages").append($('<tr>').text(msg));
                });
         });