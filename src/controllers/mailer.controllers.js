import transporter from "../helpers/mailer.js";

export const enviarCorreo = async (req, res) => {
    const {correo} = req.body
    try {
     const resultado = await transporter.sendMail({
        from: `AmbienteBohemio ${process.env.EMAIL}`,
        to: correo,
        subject: "Prueba de mailer",
        body: "Verificacion",
        html: `<h1>Bienvenido a Ambiente Bohemio</h1>`
      })
      console.log(resultado)
      res.status(200).json({
        message: "correo enviado exitosamente!"
      })
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message : "Hubo un error en la solicitud"
      })
    }
  };