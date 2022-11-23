import { http } from '../http/http';
import { Server } from 'socket.io';

const io = new Server(http);

export { io };
