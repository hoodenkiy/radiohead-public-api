// env
import dotEnv from 'dotenv';
dotEnv.config();

// connect to db
const dbConnection = require('./database/connection');
dbConnection();

//routes
import albumRoutes from './routes/albumRoutes';
import userRoutes from './routes/userRoutes';

//app
import express from 'express';
const app = express();
const port = process.env.PORT;

//request payload middlewear
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/v1/album', albumRoutes);
app.use('/v1/user', userRoutes);

// app.get('/', (req, res) => res.send('For a minute there...'))


app.listen(port, () => console.log(`Listening on port ${port}!`));


// Error handling middlewear
// this will catch all the errrors that come up the stack
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
});
