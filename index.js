import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'templates', 'main.html'))
})

app.get('/detailed', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'templates', 'detailed.html'))
})

app.listen(PORT, () =>{
    console.log("Server started")
})