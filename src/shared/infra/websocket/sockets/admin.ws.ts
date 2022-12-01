import { io } from "../io-ws";
import { Socket } from "socket.io";
import { AdminListAllConnectionsController } from "@modules/connections/useCases/adminListAllConnections/AdminListAllConnectionsController";

const adminListAllConnectionsController = new AdminListAllConnectionsController();

io.on("connect", async (socket: Socket) => {
    await adminListAllConnectionsController.handle(socket, io);
});