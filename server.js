const express =require('express');
const app = express();

const members = require('./routes/members');
const contributions = require('./routes/contributions');

const mongoose = require('mongoose');
const cors = require('cors')


const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*"),
    res.setHeader("Access-Control-Allow-Headers","*"),
    next();
})
app.use(cors({
    origin: '*'
}));
app.use(notFound);
app.use(errorHandlerMiddleware);

//Routes
app.use('/api/v1/members', members)
app.use('/api/v1/contributions', contributions)

const connection_URL='mongodb+srv://admin:26Mexico@cluster0.eoh3v.mongodb.net/?retryWrites=true&w=majority'

const connectDB=(connection_URL)=>{
    try {
        mongoose.connect(connection_URL, {  useNewUrlParser: true,
          
            useUnifiedTopology: true, } ).then(
            ()=>{  console.log("connected to db");}
        ).catch((err)=>{
            console.log(err);
        })
          
        
    } catch (error) {
       console.log(error); 
    }
  
}






const port =process.env.PORT|| 9000

const start=()=>{
    connectDB(connection_URL)
    app.listen(port, console.log(`The Server is running on port:${port}...`))
}

start();

