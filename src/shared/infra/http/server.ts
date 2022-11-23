import { Socket } from "socket.io";

import { http } from "./http";
import { io } from "../websocket/io-ws";
import "../websocket/sockets";
import { createConnection } from "../typeorm";

createConnection();

io.on("connection", (socket: Socket) => {
    console.log("WebSocket connected:", socket.id);
});

http.listen(3333, () => {
    console.log("Server is running!");
});
