
import express, { Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import config from './config';
import routes from './modules/routes';


const app = express();
app.use(cors())
app.use (express.json())
app.use(routes)


app.get("/", (req: Request , res: Response)=> {
    res.send({
        success: true,
        message:"welcome to page"
    })

})


app.listen(config.port, ()=> {
    console.log('server is running')
})



async function server () {
    try {

       
        await mongoose.connect(config.database_url!);
        console.log(`server is running on port ${5000}`)

        
    } catch (error) {
        console.log(error)
        
    }

}


server();


//X5CFTJeGoki1j3Ae