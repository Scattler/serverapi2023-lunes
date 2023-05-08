import { modeloReserva } from "../models/modeloReserva.js";

export class ServicioReserva {
  constructor() {}

  async registrar(datosReserva) {
    let ReservaNueva = new modeloReserva(datosReserva);
    return await ReservaNueva.save();
  }

  async buscarTodas() {
    let reservas = await modeloReserva.find();
    return reservas;
  }

  async buscarPorId(idReserva) {
    let reserva = await modeloReserva.findById(idReserva);
    return reserva;
  }

  async editar(idReserva, datosReserva) {
    return await modeloReserva.findByIdAndUpdate(idReserva, datosReserva);
  }

  async eliminar(idReserva) {
    return await modeloReserva.findByIdAndDelete(idReserva);
  }
}