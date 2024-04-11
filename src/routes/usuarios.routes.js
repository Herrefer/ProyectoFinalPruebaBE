import { Router } from 'express';
import { crearUsuario, leerUsuarios, login } from '../controllers/usuarios.controllers.js';


const enrutador = Router();

enrutador.route('/registro').post(crearUsuario).get(leerUsuarios);
enrutador.route('/login').post(login).get(leerUsuarios);

export default enrutador;