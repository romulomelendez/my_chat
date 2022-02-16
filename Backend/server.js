const http = require("http");
const path = require("path");

import { app } from "./app";
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("JoinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    socket.broadcast
      .to(user.room)
      .emit("message", formatMessage(`${user.name} Entrou na saça`));
    io.to(
      user.rrom().emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(users.room),
      })
    );
  });
});
