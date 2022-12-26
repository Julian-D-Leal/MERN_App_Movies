import express from "express";
import morgan from "morgan";
import Moviesroutes from './routes/prueba.routes'

var cors = require('cors')
const app = express();


//Middlewares
app.use(cors())
app.use(morgan('dev'));//permite ver las peticiones que llegan al servidor
app.use(express.urlencoded({extended: false}));//permite transformar un objeto a objeto JSON
app.use(express.json());
app.use("/api",Moviesroutes);//agrega las rutas a la app

export default app;