import { locationsService } from "../services/LocationsService.js";
import BaseController from "../utils/BaseController.js";



export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getAllLocations)
  }
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAllLocations(req, res, next) {
    try {
      const locations = await locationsService.getAllLocations()
      res.send(locations)
    } catch (error) {
      next(error)
    }
  }
}