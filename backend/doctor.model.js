import { Schema, model } from "mongoose";

const doctorSchema = new Schema({
    name: String,
    specialization: String
})

export const Doctor = model("Doctor", doctorSchema);