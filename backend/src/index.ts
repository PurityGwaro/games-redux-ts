//will be running the app.ts file - essential when testing the server
import mongoose from 'mongoose';
import { app } from "./app";



const port:string|undefined = process.env.PORT;

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        }); 
    }catch (error) {
        console.error('Failed to connect to MongoDB');
        console.log(error);
    }
}

startServer();