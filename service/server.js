import express from 'express';
import routes from './routes.js';
//import getAlbumData from "./album.js";

//initialize data load, No longer needed
//Added a new Promise() to getAlbumData() instead of async/await
//because the function searchByEndpoint was calling getAlbumData()
//to be executed before it was ready
// getAlbumData().then(data => data);

const app = express();
const port = 80;

app.use(routes);
app.get('/', (req, res) => {
    res.send('Hello, Welcome to the Wonderful World of Music Search!!')
})
app.listen(port, () => {
    console.log(`The server is running on https://localhost:${port}`);
})