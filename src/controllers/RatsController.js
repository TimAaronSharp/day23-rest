import { missionsService } from "../services/MissionsService.js";
import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";



export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getAllRats)
      .get('/:ratId/missions', this.getMissionsByRatId)
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAllRats(req, res, next) {
    try {
      const rats = await ratsService.getAllRats()
      console.log(rats);

      res.send(rats)
    } catch (error) {
      next(error)
    }
  }
  /**
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */
  async getMissionsByRatId(req, res, next) {
    try {
      const ratId = req.params.ratId
      const missions = await missionsService.getMissionsByRatId(ratId)
      res.send(missions)
    } catch (error) {
      next(error)
    }
  }
}