import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
    constructor() {
        super("api/houses")
        this.router.get('', this.getAllHouses)
        this.router.get('/search', this.searchHouses)
    }
    async getAllHouses(request, response, next) {
        try {
            let searchQuery = request.query
            const houses = await housesService.getAllHouses()
            response.send(houses)
        } catch (error) {
            next(error)
        }
        
    }
    
    async searchHouses(request, response, next) {
        try {
            let searchQuery = request.query
            const houses = await housesService.searchHouses(searchQuery)
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }
    

}