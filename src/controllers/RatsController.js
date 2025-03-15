import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";



export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getAllRats)
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
}