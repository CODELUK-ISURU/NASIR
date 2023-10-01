import { Injectable } from '@angular/core';
import { FoodModel } from '../models/foodModel';
import { foodData } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  getAll():FoodModel[]{
    return foodData
  }
  constructor() { }
}
