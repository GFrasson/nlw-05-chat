import { Router } from "express";

import { settingsRoutes } from "./settings.routes";
import { usersRoutes } from "./users.routes";
import { messagesRoutes } from "./messages.routes";

const router = Router();

router.use("/settings", settingsRoutes);
router.use("/users", usersRoutes);
router.use("/messages", messagesRoutes);

export { router };
