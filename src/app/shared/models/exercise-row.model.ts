import { Exercise } from "./exercise.model";

export class ExerciseRow {
    id: number;
    exerciseNo: string;
    exercise: Exercise;
    sets: string;
    reps: string;
    weight: string;
    comment: string;
}
