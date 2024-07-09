import { dbContext } from "../db/DbContext.js"

class HousesService {

    getAllHouses() {
        let houses = dbContext.Houses.find()
        return houses
    }

    searchHouses(searchQuery) {
        let houses = dbContext.Houses.find(searchQuery)
        
    }
}

export const housesService = new HousesService()