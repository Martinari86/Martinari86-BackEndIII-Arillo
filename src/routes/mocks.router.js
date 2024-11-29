import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";
const router = Router();

//Ruta de Mascotas Simuladas
router.get("/mockingpets", mocksController.getMascotas)


//Ruta de Usuario Simulaods
router.get("/mockingusers", mocksController.getUsuarios)

//Generar Data

router.post("/generatedata", mocksController.generateData);


export default router