import express , {Request , Response} from "express";
import cors from "cors" ;
import "dotenv/config" ; 

const app = express()

app.use(express.json());
app.use(cors());

app.get("/open" , async (req : Request , res : Response) => {
    res.json({massage : "checking "})
});

app.listen(5000 , ()=> {
    console.log("server running ") ; 
})