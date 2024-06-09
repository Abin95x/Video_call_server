// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3001", 
//     methods: ["GET", "POST"]
//   }
// });

// io.on('connection', (socket) => {
//   console.log('connected:', socket.id);

//   socket.on('hello', (data) => {
//     console.log('hello', data);
//   });

//   socket.on('disconnect', () => {
//     console.log('disconnected:', socket.id);
//   });
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);

  socket.on('offer', (data) => {
    socket.broadcast.emit('offer', data);
  });

  socket.on('answer', (data) => {
    socket.broadcast.emit('answer', data);
  });

  socket.on('candidate', (data) => {
    socket.broadcast.emit('candidate', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
