# TubeKids Pro GraphQL Api

This project is part of the Web Environment Programming II course (Code: ISW-711) of the Universidad Técnica Nacional, under the direction of Professor Bladimir Arroyo.

## Description

The TubeKidsBackend is a GraphQL API service that provides functions to query users, profiles, and playlists. 

## Dependencies

- cors: ^2.8.5
- dotenv: ^16.4.5
- express: ^4.19.2
- express-graphql: ^0.12.0
- graphql: ^16.8.1
- jsonwebtoken: ^9.0.2
- mongoose: ^8.2.0

## Installation and Usage

1. Clone this repository: `git clone https://github.com/CorralesK/TubeKidsGraphQLApi.git`.
2. Install the dependencies: `npm install`.
3. Configure environment variables as needed.
4. Start the server: `npm start`.

## GraphQL Service Endpoints

### Profiles

#### Query All Profiles
- **Method:** POST
- **Endpoint:** `/api/graphql`
- **Description:** Retrieves all profiles.
- **Parameters:** None

#### Query Profile by ID
- **Method:** POST
- **Endpoint:** `/api/graphql`
- **Description:** Retrieves a specific profile by ID.
- **Parameters:** `id` (String)

### Playlists

#### Query All Playlists
- **Method:** POST
- **Endpoint:** `/api/graphql`
- **Description:** Retrieves all playlists.
- **Parameters:** None

#### Query Playlists by Profile
- **Method:** POST
- **Endpoint:** `/api/graphql`
- **Description:** Retrieves all playlists associated with a profile.
- **Parameters:** `profileId` (String)

#### Query Playlist by ID
- **Method:** POST
- **Endpoint:** `/api/graphql`
- **Description:** Retrieves a specific playlist by ID.
- **Parameters:** `id` (String)

### Videos

#### Query Video by ID
- **Method:** POST
- **Endpoint:** `/api/graphql`
- **Description:** Retrieves a specific video by ID.
- **Parameters:** `id` (String)

#### Search Videos
- **Method:** POST
- **Endpoint:** `/api/graphql`
- **Description:** Searches for videos matching specific criteria in the provided profile.
- **Parameters:** `profileId` (String), `searchText` (String)

## License

This project is licensed under the MIT License.
