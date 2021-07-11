import express from 'express';
import routes from './routes.js';
import getAlbumData from "./album.js";

getAlbumData().then(data => data);

const app = express();
const port = 80;

app.use(routes);
app.get('/', (req, res) => {
    res.send('Hello, Welcome to the Wonderful World of Music Search!!')
})
app.listen(port, () => {
    console.log(`The server is running on https://localhost:${port}`);
})