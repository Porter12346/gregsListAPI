import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CarSchema } from '../models/Car.js';
import { HousesSchema } from '../models/House.js';

class DbContext {

  Cars = mongoose.model('Car', CarSchema)
  Account = mongoose.model('Account', AccountSchema);
  Houses = mongoose.model('House', HousesSchema)
}

export const dbContext = new DbContext()
