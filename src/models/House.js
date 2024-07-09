import { Schema } from "mongoose";
import { profileService } from "../services/ProfileService.js";

export const HousesSchema = new Schema({
    price: {type: Number, max: 10000000, min: 0, required: true, default: 1},
    bedrooms: {type: Number, max: 30, min: 0, required: true, default: 0},
    bathrooms: {type: Number, max: 25, min: 0, required: true, default: 0},
    levels: {type: Number, max: 4, min: 1, required: true, default: 1},
    imgUrl: {type: String, minLength: 0, maxLength: 500, required: true, default: "https://slm-assets.secondlife.com/assets/29444896/lightbox/stupid%20house.jpg?1622856904"},
    description: {type: String, minLength: 0, maxLength: 500,},
    year: {type: Number, max: 2024, min: 1000, required: true, default: 1850},
})