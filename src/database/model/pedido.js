import mongoose, { Schema } from 'mongoose';

const pedidoSchema = new Schema({
  usuario: {
    type: String,
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
  productos: { type: Array, require: true },
  metodoEnvio: {
    type: Number,
    required: true,
    enum: [1, 2],
  },
  estadoEnvio: {
    type: Boolean,
    required: true,
  },
  fecha: {
    type: String,
    require: true
  }
});

const Pedido = mongoose.model('pedido', pedidoSchema);

export default Pedido;