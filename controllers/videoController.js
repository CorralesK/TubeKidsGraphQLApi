const Video = require("../models/videoModel.js");
const Playlist = require("../models/playlistModel.js");

const videoGet = async (params) => {
    try {
        const video = await Video.findById(params.id);

        if (!video) {
            throw new Error('Video not found');
        }
        return video;

    } catch (error) {
        console.error('Error while querying videos:', error);
        throw new Error('Internal server error');
    }
}

const searchVideos = async (params) => {
    try {
        const playlists = await Playlist.find({ profiles: params.profileId });

        const matchingVideos = await Promise.all(playlists.map(async (playlist) => {
            const videos = await Video.find({ _id: { $in: playlist.videos }, $or: [{ name: { $regex: params.searchText, $options: 'i' } }, { description: { $regex: params.searchText, $options: 'i' } }] });
            return videos;
        }));

        // Flattening array of arrays
        return matchingVideos.flat();
    } catch (error) {
        console.error('Error while searching videos:', error);
        throw new Error('Error while searching videos:', error);
    }
};

module.exports = {
    videoGet,
    searchVideos
}