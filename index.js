// env
import dotEnv from 'dotenv';
dotEnv.config();

//routes
import albumRoutes from './routes/albumRoutes';

//app
import express from 'express';
const app = express();
const port = process.env.PORT;

app.use('/v1/album', albumRoutes)

// app.get('/', (req, res) => res.send('For a minute there...'))

app.listen(port, () => console.log(`Listening on port ${port}!`))