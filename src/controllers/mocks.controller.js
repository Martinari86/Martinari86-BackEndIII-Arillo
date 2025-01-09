import MockingService from "../services/mocking.js";
import { petsService, usersService } from '../services/index.js';

const getMascotas = async (req,res) => {
    const mascotas = await MockingService.generarMockingMascotas(5);
    res.send({status:"success", payload: mascotas})

}

const getUsuarios = async (req,res) => {
    const usuarios = await MockingService.generarMockingUsuarios(5);
    res.send({status:"success", payload: usuarios})
}


const generateData = async (req, res) => {
    const users = parseInt(req.query.users) || 50;
    const pets = parseInt(req.query.pets) || 50;
    
    try {
      const mockUsers = await MockingService.generarMockingUsuarios(5);
      console.log(mockUsers);
      
      //const mockPets = await MockingService.generarMockingMascotas(50);
  
      const insertedUsers = await usersService.insertMany(mockUsers);
      console.log(insertedUsers);
      
      //const insertedPets = await petsService.insertMany(mockPets);
  
      res.status(201).json({
      message: `Datos generados e insertados exitosamente: ${insertedUsers.length} usuarios y ${insertedPets.length} mascotas.`,
      status: 'success',
      payload: {
          usersInserted: insertedUsers.length,
          petsInserted: insertedPets.length
      }
  });
    } catch (error) {
      res.status(500).json({ error: 'Error al generar los datos.' });
    }
}


export default {getMascotas, getUsuarios, generateData}

