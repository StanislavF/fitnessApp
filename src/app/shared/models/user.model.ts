import { GoalEnum } from './enums/goalEnum.enum';
import { SexSearchEnum } from './enums/sexSearchEnum.enum';
export class User {
    username: String;
    password: String;
    firstName: String;
    lastName: String;
    age: Number;
    sex: SexSearchEnum;
    email: String;
    phone: String;
    wheight: Number;
    height: Number;
    goal: GoalEnum;
    description: String;
    image: File;
    isTrainer: boolean;
}