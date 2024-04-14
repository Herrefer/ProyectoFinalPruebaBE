// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from "mercadopago";
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.TOKEN_MP });

export const crearPreferenciaMP = async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://proyectofinalprueba.netlify.app/",
        failure: "https://proyectofinalprueba.netlify.app/menu",
        pending: "https://proyectofinalprueba.netlify.app/nosotros",
      },
    };
    const preference = new Preference(client);
    const result = await preference.create({body});
    res.json({
        id: result.id,
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
        message: "Error al crear la preferencia"
    })
  }
};
