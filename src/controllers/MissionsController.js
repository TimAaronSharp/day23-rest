import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";



export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getAllMissions)
  }
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAllMissions(req, res, next) {
    try {
      const missions = await missionsService.getAllMissions()
      res.send(missions)
    } catch (error) {
      next(error)
    }
  }
}