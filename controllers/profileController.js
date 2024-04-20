const Profile = require("../models/profileModel.js");

/***
 * Get the profile
 */
const profileGet = async (params) => {
    try {
        const profile = await Profile.findById(params.id);

        if (!profile) {
            throw new Error('Profile not found');
        }
        return profile;

    } catch (error) {
        console.error('Error while querying profiles:', error);
        throw new Error('Internal server error');
    }
}

const profilesGet = async (context) => {
    try {
        const profiles = await Profile.find({ userId: context.userId });

        if (profiles.length === 0) {
            throw new Error('No profiles found for the specified user ID');
        }
        return profiles;

    } catch (error) {
        console.error('Error while querying profiles:', error);
        throw new Error('Internal server error');
    }
}

module.exports = {
    profileGet,
    profilesGet
};