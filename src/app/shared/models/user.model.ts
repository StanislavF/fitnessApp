import { GoalEnum } from './enums/goalEnum.enum';
import { SexSearchEnum } from './enums/sexSearchEnum.enum';
export class User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    age: Number;
    sex: string;
    email: string;
    phone: string;
    weight: Number;
    height: Number;
    goal: string;
    description: string;
    image: string;
    isTrainer: boolean;
}