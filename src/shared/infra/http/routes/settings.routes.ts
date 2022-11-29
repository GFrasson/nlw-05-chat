import { CreateSettingController } from "@modules/settings/useCases/createSetting/CreateSettingController";
import { FindSettingsByUsernameController } from "@modules/settings/useCases/findSettingsByUsername/FindSettingsByUsernameController";
import { UpdateSettingsByUsernameController } from "@modules/settings/useCases/updateSettingsByUsername/UpdateSettingsByUsernameController";
import { Router } from "express";

const settingsRoutes = Router();

const createSettingController = new CreateSettingController();
const findSettingsByUsernameController = new FindSettingsByUsernameController();
const updateSettingsByUsernameController = new UpdateSettingsByUsernameController();

settingsRoutes.post("/", createSettingController.handle);
settingsRoutes.get("/:username", findSettingsByUsernameController.handle);
settingsRoutes.patch("/:username", updateSettingsByUsernameController.handle);

export { settingsRoutes };
