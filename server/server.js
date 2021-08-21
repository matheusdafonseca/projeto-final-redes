const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});


// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);

// const { Server } = require('socket.io');
// const io = new Server(server);

// server.listen(3000, function() {
//     console.log('Ouvindo requests na porta 3000');
// })

// io.on('connection', (socket) => {
//     console.log(`Nova conexão de socket: ${socket.id}`);

//     socket.on('create', function(data) {
//         io.sockets.emit('create', data);
//     })

//     socket.on('change', function(data) {
//         io.sockets.emit('change', data);
//     })

//     socket.on('update', function(data) {
//         io.sockets.emit('update', data);
//     })

//     socket.on('delete', function(data) {
//         io.sockets.emit('delete', data);
//     })
// })