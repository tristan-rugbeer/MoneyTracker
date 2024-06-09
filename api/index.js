import express from "express";
import cors from "cors";

const app = express();
const port = 4040;

app.use(cors());

app.get('/api/test', (req,res) =>{
    res.json("test ok")
});

app.post('/api' ,(req,res) => {
    res.json(req.body)
})

app.listen(port);