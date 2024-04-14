import { Router } from 'express';
import {
  listarProductos,
  obtenerProducto,
  crearProducto,
  borrarProducto,
  editarProducto,
} from '../controllers/productos.controllers.js';
import validarJWT from '../helpers/verificarJWT.js';

const enrutador = Router();

enrutador.route('/productos').get(listarProductos).post([validarJWT],crearProducto);
enrutador.route('/producto/:id').get(obtenerProducto).delete(borrarProducto).put(editarProducto);

export default enrutador;