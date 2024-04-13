import fs from "fs-extra";
import transporter from "../helpers/mailer.js";
import Handlebars from "handlebars";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { __dirname } from "../../index.js";

export const enviarCorreo = async (req, res) => {
  console.log(__dirname);
  console.log(path.join(__dirname, "/correoDeConfirmacion.html"));
  const template = fs
    .readFileSync(path.join(__dirname, "/correoDeConfirmacion.html"), "utf8")
    .toString();
  const { correo } = req.body;
  try {
    const resultado = await transporter.sendMail({
      from: `AmbienteBohemio ${process.env.EMAIL}`,
      to: correo,
      subject: "Prueba de mailer",
      body: "Verificacion",
      html: template,
    });
    console.log(resultado);
    res.status(200).json({
      message: "correo enviado exitosamente!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Hubo un error en la solicitud",
    });
  }
};
