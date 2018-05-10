import { FoodRow } from "./food-row.model";

export class SingleMeal {
    id: number;
    no: number;
    title: string;
    foodRows: FoodRow[];
    calories: number;
    proteins: number;
    carbs: number;
    fats: number;
}