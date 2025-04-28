import express from 'express'; 
import Time from "./time.js";
const app = express();
const PORT = 3000;

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Bienvenido/a!!!');
  });

  app.get('/hora', (req, res) => {
    
    res.send(Time().horaCompleta);
});
app.get('/fecha-completa', (req, res) => {
    res.send(Time().fechaCompleta);
  });

export default app