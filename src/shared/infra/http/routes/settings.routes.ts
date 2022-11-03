import { CreateSettingController } from "@modules/settings/useCases/createSetting/CreateSettingController";
import { Router } from "express";

const settingsRoutes = Router();

const createSettingController = new CreateSettingController();

settingsRoutes.post("/", createSettingController.handle);

export { settingsRoutes };
