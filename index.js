import express from 'express'; 
import tiempo from "./time.js";
const app = express();
const PORT = 3000;

app.use(express.json()); 

let fecha=new Date();
console.log(fecha);