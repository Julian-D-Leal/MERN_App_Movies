import { config } from "dotenv";
import path from 'path';

//configuración de ruta del archivo de variables en entorno
config({ path: path.resolve(__dirname, './.env') });

export const MONGODB_URI = process.env.MONGODB_URI || 'http://localhost:27017/test';

export const PORT = process.env.PORT || 3000;