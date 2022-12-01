import { CreateConnectionController } from "@modules/connections/useCases/createConnection/CreateConnectionController";
import { Socket } from "socket.io";
import { io } from "../io-ws";

const createConnectionController = new CreateConnectionController();

io.on("connect", (socket: Socket) => {
    socket.on("client_first_access", (params) => createConnectionController.handle(socket, params));
});
