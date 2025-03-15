import { dbContext } from "../db/DbContext.js"


class MissionsService {
  async getAllMissions() {
    const missions = await dbContext.Missions.find().populate('location').populate('rat')
    return missions
  }
  async getMissionsByRatId(ratId) {
    const missions = await dbContext.Missions.find({ ratId: ratId }).populate('location')
    return missions
  }
  async getMissionsByLocationId(locationId) {
    const missions = await dbContext.Missions.find({ locationId: locationId }).populate('rat')
    return missions
  }
  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('location rat')
    return mission
  }
}

export const missionsService = new MissionsService()