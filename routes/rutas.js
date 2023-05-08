import express from 'express'
import { ControladorHabitaciones } from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controllers/ControladorReserva.js'

let controladorHabitaciones=new ControladorHabitaciones()


export let rutas=express.Router()

rutas.get('/buscarhabitaciones',controladorHabitaciones.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitaciones.buscandoHabitacion)
rutas.post('/registrarhabitacion',controladorHabitaciones.registrandoHabitacion)
rutas.put('/editarhabitacion/:idhabitacion',controladorHabitaciones.editandoHabitacion)

let controladorReservas = new ControladorReservas()

rutas.get('/buscareserva', controladorReservas.buscandoReservas)
rutas.get('/buscareservas/:idreservas', controladorReservas.buscandoReserva)
rutas.post('/creareservas', controladorReservas.creandoReservas)
rutas.put('/editareserva',controladorReservas.editandoReserva)


