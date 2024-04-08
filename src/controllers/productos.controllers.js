import Producto from "../database/model/producto.js"

export const listarProductos = async (req, res) =>{
    try{
        const listaDeProductos = await Producto.find();
        res.status(200).json(listaDeProductos);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "No se pudo conseguir la lista de productos"
        })
    }
}

export const obtenerProducto = async (req, res) => {
    try{
        const productoBuscado = await Producto.findById(req.params.id);
        res.status(200).json(productoBuscado);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "El producto no existe o no pudo ser encontrado"
        })
    }
}

export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json({
      mensaje: 'Producto creado correctamente.',
      Producto: nuevoProducto,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: 'No se pudo procesar la solicitud para crear un producto.',
    });
  }
};