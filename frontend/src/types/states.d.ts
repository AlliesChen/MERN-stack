export interface WorkoutType {
    _id: string;
    title: string;
    load: number;
    reps: number;
    createdAt: string;
    updatedAt: string;
}

export interface AuthType {
    email: string;
}