import { ExerciseRow } from "./exercise-row.model";

export class TrainingDay {
    id: number;
    no: number;
    title: string;
    date: string;
    exerciseRows: ExerciseRow[];
}