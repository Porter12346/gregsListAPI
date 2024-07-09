import { dbContext } from "../db/DbContext.js"

class HousesService {

    async getAllHouses() {
        let houses = await dbContext.Houses.find()
        return houses
    }

    async searchHouses(searchQuery) {
        let houses = await dbContext.Houses.find(searchQuery)
        let total = await dbContext.Houses.countDocuments()
        return{
            totalResults: total,
            results: houses
        }
    }
}

export const housesService = new HousesService()