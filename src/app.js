import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

import mocksRouter from "./routes/mocks.router.js"
import "./database.js"; 

const app = express();
const PORT = 8080 //process.env.PORT||8080;
//const connection = mongoose.connect("mongodb+srv://martinarillo86:Martinari86@cluster0.iy93g.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
//                    .then(() => console.log("Conexion exitosa"))
//                    .catch((error) => console.log("Hay error: ", error))

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use("/api/mocks", mocksRouter);

app.listen(PORT,()=>console.log(`Servidor escuchando en http://localhost:${PORT}`))
