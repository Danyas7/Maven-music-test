import { Router } from 'express';
import suggestionsByEndpoint from "./search.js"
const routes = Router();

routes.get('/suggest/artists', async (req, res) => {
    const prefix = req.query['prefix'];
    const suggestions = await suggestionsByEndpoint('artists', prefix);

    return res.json({ suggestions });
});

routes.get('/suggest/tracks', async (req, res) => {
    const prefix = req.query['prefix'];
    const suggestions = await suggestionsByEndpoint('tracks', prefix);

    return res.json({ suggestions });
});

routes.get('/suggest/releases', async (req, res) => {
    const prefix = req.query['prefix'];
    const suggestions = await suggestionsByEndpoint('releases', prefix);

    return res.json({ suggestions });
});

routes.get('/suggest/all', async (req, res) => {
    const prefix = req.query['prefix'];
    const artists = await suggestionsByEndpoint('artists', prefix);
    const tracks = await suggestionsByEndpoint('tracks', prefix);
    const releases = await suggestionsByEndpoint('releases', prefix);

    return res.json({ artists, tracks, releases });
});
export default routes;
