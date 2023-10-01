import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from './../../../services/food-service.service';
import { FoodModel } from 'src/app/models/foodModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 constructor(private FoodServiceService:FoodServiceService){
  this.foods = this.FoodServiceService.getAll()
 }
 foods:FoodModel[]=[]
 ngOnInit(): void {
   
 }
}
