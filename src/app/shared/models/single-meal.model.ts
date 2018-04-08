import { Food } from "./food.model";

export class SingleMeal {
    smNo: number;
    smTitle: string;
    foods: Food[];
    smCalories: number;
    smProteins: number;
    smCarbs: number;
    smFats: number;
}