import express from 'express'; 
import time from "./time.js";
const app = express();
const PORT = 3000;

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Bienvenido/a!!!');
  });

app.get('/hora', (req, res) => {
    res.json(time.hora());
  });

