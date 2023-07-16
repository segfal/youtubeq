const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const cors = require('cors');
cors(app);


app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('join', (room) => {
        console.log('join', room);
        socket.join(room);
    }
    );

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('join_room', (room) => {
        socket.join(room);
    }
    );
    socket.on('leave_room', (room) => {
        socket.leave(room);
    }
    );
    
    
});




server.listen(3000, () => {
    console.log('listening on *:3000');
});






