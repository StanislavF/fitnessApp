import { SexSearchEnum } from './enums/sexSearchEnum.enum';
export class SearchData {
    username: string;
    isTrainer: boolean;
    firstName: string;
    lastName: string;
    fromAge: number;
    toAge: number;
    sex: SexSearchEnum;
}