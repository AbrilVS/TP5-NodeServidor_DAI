import express from 'express'; 
import Time from "./time.js";
const app = express();
const PORT = 3000;

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Bienvenido/a!!!');
  });

  app.get('/hora', (req, res) => {
    const horaActual = Time().hora;
    const minsActual=Time().mins;
    res.send(`La hora actual es: ${horaActual} : ${minsActual}`);
});
app.get('/fecha-completa', (req, res) => {
    res.json(Time().fecha);
  });

export default app