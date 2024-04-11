import { Router } from "express";
import { enviarCorreo } from "../controllers/mailer.controllers.js";

const enrutador = Router();

enrutador.route('/mailer/:correo').post(enviarCorreo)


export default enrutador;