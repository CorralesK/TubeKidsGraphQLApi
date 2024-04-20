const { buildSchema } = require('graphql');

exports.graphQLschema = buildSchema(`
    type Query {
        allProfiles: [Profile]
        profile ( id: String! ): Profile
        allPlaylists: [Playlist]
        playlistByProfile ( profileId: String! ): [Playlist]
        playlist ( id: String! ): Playlist
        video ( id: String! ): Video
        searchVideos ( profileId: String!, searchText: String! ): [Video]
    }

    type Playlist {
        _id: ID!
        name: String
        videos: [Video]
        profiles: [Profile]
        totalVideos: Int
    }

    type Profile {
        _id: ID!
        name: String
        pin: Int
        avatar: String
        age: Int
    }

    type Video {
        _id: ID!
        name: String
        url: String
        description: String
    }
`);