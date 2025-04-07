import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './db.js';

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

import { seedData, putData, deleteData, getData } from './controller.js';

app.post("/seed", seedData);
app.get("/api/patients", getData);
app.put("/patient/:patientId/assign/:doctorId", putData);
app.delete("/api/patients/:id", deleteData)

connectDB().then(() => {
    app.listen(4000, async (req, res) => {
        try {
            console.log("app running");
            
        } catch (error) {
            console.error(error);
        }
    })

}).catch((error) => {
    console.error(error);
    
})

