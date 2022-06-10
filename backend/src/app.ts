import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app: Application = express();
app.use(express.json());//enable use of json parsing/stringifying

//import routes
import gameRoute from './routes/gameRoute';



//declare import routes paths

//test route
app.use('/api/games', gameRoute);


export{
    app
}