import mongoose, { model, Schema} from 'mongoose';

const patientSchema = new Schema({
    name: String,
    age: Number,
    ailment: String,
    doctor: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'}
})

export const Patient = model("Patient", patientSchema);