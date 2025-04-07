import { Doctor } from "./doctor.model.js";
import { Patient } from "./patient.model.js";

const DoctorData = [
    {
        "name": "Dr John Doe",
        "specialization": "Cardiologist"
    },
    {
        "name": "Dr Emily smith",
        "specialization": "Dermatologist"
    }
]

const patientData = [
    {
        "name": "Alice Brown",
        "age": 30,
        "ailment": "Heart Decease",
        "doctor": null
    },
    {
        "name": "Bob White",
        "age": 25,
        "ailment": "skin decease",
        "doctor": null
    }
]

const seedData = async (req, res) => {
    await Doctor.deleteMany({});
    await Patient.deleteMany({});

    await Doctor.insertMany(DoctorData);
    await Patient.insertMany(patientData);

    res.status(200).send({"message": "data seeded successfully"})
}

const getData = async (req, res) => {
    try {
        const patients = await Patient.find().populate("doctor");
        return res.send({patients});
    } catch (error) {
        console.error("error in getting data", error);
        return res.send({error});
    }
}

const putData = async (req, res) => {
    try {
        let {patientId, doctorId} = req.params;

        const patient = await Patient.findByIdAndUpdate(patientId, {doctor: doctorId}, {new: true}).populate("doctor");

        res.send({patient})
    } catch (error) {
        console.error("error in putData", error);
        return res.send({error});
    }
}

const deleteData = async (req, res) => {
    try {
        
        const {id} = req.params;
        await Patient.findByIdAndDelete(id);
        return res.send({"message": "deleted successfully"});
    } catch (error) {
        console.error(error);
        
    }
}
export {seedData, putData, deleteData, getData}