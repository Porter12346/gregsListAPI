import { dbContext } from "../db/DbContext.js"

class HousesService {

    async getAllHouses() {
        let houses = await dbContext.Houses.find()
        return houses
    }

    async searchHouses(searchQuery) {

        let limitNum = searchQuery.limit ? searchQuery.limit : 5
        delete searchQuery.limit

        let pageNum = searchQuery.page ? searchQuery.page - 1 : 0
        delete searchQuery.page 

        let houses = await dbContext.Houses.find(searchQuery).limit(limitNum).skip(pageNum * 5)
        let total = await dbContext.Houses.countDocuments(searchQuery)
        return{
            page: `${(pageNum + 1)} out of ${Math.ceil(total / 5)}`,
            totalResults: total,
            limit: limitNum,
            results: houses
        }
    }
}

export const housesService = new HousesService()