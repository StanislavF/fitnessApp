import { ExerciseRow } from "./exercise-row.model";

export class TrainingDay {
    no: number;
    title: string;
    date: string;
    exerciseRows: ExerciseRow[];
}