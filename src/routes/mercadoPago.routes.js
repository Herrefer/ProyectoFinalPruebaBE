import { Router } from "express";
import { crearPreferenciaMP } from "../controllers/mercadoPago.controllers.js";

const enrutador = Router();

enrutador.route('/crearorden').post(crearPreferenciaMP);


export default enrutador;