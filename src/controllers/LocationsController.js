import { dbContext } from "../db/DbContext.js";
import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";



export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getAllLocations)
      .get('/:locationId/missions', this.getMissionsByLocation)
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
  /**
* @param {import("express").Request} req
* @param {import("express").Response} res
* @param {import("express").NextFunction} next
*/
  async getMissionsByLocation(req, res, next) {
    try {
      const locationId = req.params.locationId
      const locations = await missionsService.getMissionsByLocationId(locationId)
      res.send(locations)
    } catch (error) {
      next(error)
    }
  }
}