import { CreateMessageController } from "@modules/messages/useCases/createMessage/CreateMessageController";
import { ListMessagesByUserController } from "@modules/messages/useCases/listMessagesByUser/ListMessagesByUserController";
import { Router } from "express";

const messagesRoutes = Router();

const createMessageController = new CreateMessageController();
const listMessagesByUserController = new ListMessagesByUserController();

messagesRoutes.post("/", createMessageController.handle);
messagesRoutes.get("/:user_id", listMessagesByUserController.handle);

export { messagesRoutes };