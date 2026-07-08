import mongoose from "mongoose";
import Exercise from "../models/exercise.model.js";

export async function getAllExercises(req, res, next) {
    try {
        const exercises = await Exercise.find(req.query).select("name category primaryMuscleGroup secondaryMuscleGroup equipment force mechanic movementPattern difficulty description instructions imageUrl videoUrl isEquipmentBased")

        res.status(201).send({
            status: "success",
            message: "Exercises found.",
            data: exercises,
        });
    } catch(e) {
        next(e);
    }
}

export async function getExercise(req, res, next) {
    try {
        const exercise = await Exercise.findById(req.params.id);

        if(!exercise) {
            throw new ApiError(404, "Exercise Not Found");
        }

        res.status(201).send({
            status: "success",
            message: "Exercises found.",
            data: exercise
        })
    } catch(e) {
        next(e);
    }
}

export async function createExercise(req, res, next) {

}

export async function deleteExercise(req, res, next) {

}

export async function updateExercise(req, res, next) {

}

