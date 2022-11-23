import { Socket } from "socket.io";
import { io } from "../io-ws";

io.on("connect", (socket: Socket) => {
    socket.on("client_first_access", (params) => {
        console.log(params);
    });
});
