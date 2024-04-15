// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from "mercadopago";
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: "TEST-1578984294078740-041400-6b1364539e49cbc2e62863686f60ee7d-1768433921" });

export const crearPreferenciaMP = async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: 1,
          unit_price: Number(req.body.unit_price),
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
