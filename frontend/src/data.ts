import { FoodModel } from "./app/models/foodModel";

export const foodData:FoodModel[] = [
    {
        id:'1',
        name:'garlic',
        price:250,
        imageUrl:'/assets/garlic.jpeg',
        favorite:true,
        orgin:['itali','indian'],
        stars:4
    }
    ,
    {
        id:'2',
        name:'potato',
        price:350,
        imageUrl:'/assets/potato.jpg',
        favorite:true,
        orgin:['itali','indian'],
        stars:3
    }
]