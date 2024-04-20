const { Router } = require('express');
const router = Router();

const { graphqlHTTP } = require('express-graphql');
const { graphQLschema } = require('../graphqlSchema.js');

module.exports = router;

const verifyToken = require('../middleware/authMiddleware.js');

const { playlistGet, playlistGetByProfile, playlistAllGet } = require("../controllers/playlistController.js");
const { videoGet, searchVideos } = require("../controllers/videoController.js");
const { profileGet, profilesGet} = require("../controllers/profileController.js");


const root = {
    allProfiles: (_, context) => profilesGet(context),
    profile: (params) => profileGet(params),
    allPlaylists: (_, context) => playlistAllGet(context),
    playlistByProfile: (params) => playlistGetByProfile(params),
    playlist: (params) => playlistGet(params),
    video: (params) => videoGet(params),
    searchVideos: (params) => searchVideos(params)
};

router.use('/graphql', graphqlHTTP((req) => ({
    schema: graphQLschema,
    context: verifyToken(req),
    rootValue: root,
    graphiql: true
})));