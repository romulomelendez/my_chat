const http = require("http")
const path = require("path")

import { app } from "./app"
const { Server } = require("socket.io")

const server = http.createServer(app)
const io = new Server(server)
