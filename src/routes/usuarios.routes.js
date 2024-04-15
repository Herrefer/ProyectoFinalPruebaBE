import { Router } from 'express';
import { crearUsuario, leerUsuarios, login } from '../controllers/usuarios.controllers.js';
import validacionRegistro from '../helpers/validacionDeRegistro.js';
import validacionLogin from '../helpers/validacionDeLogin.js';


const enrutador = Router();

enrutador.route('/registro').post(crearUsuario);
enrutador.route('/login').post([validacionLogin],login).get(leerUsuarios);

export default enrutador;