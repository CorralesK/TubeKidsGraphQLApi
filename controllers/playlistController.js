const Playlist = require("../models/playlistModel.js");


/**
 * Get One plylist
 * 
 * @param {*} args 
 * @param {*} context 
 * @returns 
 */
const playlistGet = async (params) => {
    try {
        const playlist = await Playlist.findById(params.id)
            .populate('profiles')
            .populate('videos')
            .exec();

        if (playlist.length === 0) {
            throw new Error('No playlists found');
        }

        playlist.totalVideos = playlist.videos.length;

        return playlist;

    } catch (error) {
        console.error('Error while querying playlists:', error);
        throw new Error('Internal server error');
    }
}

const playlistGetByProfile = async (params) => {
    try {
        const playlists = await Playlist.find({ profiles: params.profileId })
            .populate('profiles')
            .populate('videos')
            .exec();

        if (playlists.length === 0) {
            throw new Error('No playlists found');
        }

        playlists.forEach(playlist => {
            playlist.totalVideos = playlist.videos.length;
        });

        return playlists;

    } catch (error) {
        console.error('Error while querying playlists:', error);
        throw new Error('Internal server error');
    }
}

const playlistAllGet = async (context) => {
    try {
        const playlists = await Playlist.find({ userId: context.userId })
            .populate('profiles')
            .populate('videos')
            .exec();

        if (playlists.length === 0) {
            throw new Error('No playlists found');
        }

        playlists.forEach(playlist => {
            playlist.totalVideos = playlist.videos.length;
        });

        return playlists;

    } catch (error) {
        console.error('Error while querying playlists:', error);
        throw new Error('Internal server error');
    }
}

module.exports =
{
    playlistGet,
    playlistGetByProfile,
    playlistAllGet
};
