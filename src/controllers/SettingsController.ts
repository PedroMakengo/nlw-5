import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.create({ chat, username });

    return response.status(201).json(settings);
  }
}

export { SettingsController };
