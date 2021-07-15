import fs from 'fs';

let dataParsed = false;
const albumEntries = {
    artists: {},
    tracks: {},
    releases: {},
};

const albumArtistsList = (artistList, release) => {
    artistList.map((art) => {
        const id = art.Id;
        const name = art.Name;
        const listId = `${name}_${id}`;
        const existingArtist = albumEntries.artists[listId];

        if (!existingArtist) {
            albumEntries.artists[listId] = {
                id,
                name,
                releases: [release],
            };
        } else {
            const released = existingArtist.releases.some((exist) => exist.id === release.id);
            if (!released) {
                existingArtist.releases.push(release);
            }
        }
    });
};

const albumTrackList = (trackList, release) => {
    trackList.map((track) => {
        const title = track.Title;
        const duration = track.Duration;
        const listId = `${title}_${duration}_${release.Id}`;
        albumEntries.tracks[listId] = {
            title,
            duration,
            release,
        };
    });
};

const albumData = data => {
    // const findExtraArtists = false;

    for (const prop in data) {
        //Adding the if condition to consider properties
        //attached to the object itself
        if (data.hasOwnProperty(prop)) {
            const album = data[prop];

            const title = album.Title;
            const release = {
                id: album.Id,
                title,
                notes: album.Notes
            };
            const artists = album.Artists;

            let extraArtists = album.ExtraArtists;
            //I did not need this, I was trying to reset extraArtists to an empty array
            // if (!findExtraArtists) {
            //     extraArtists = [];
            // }
            const combineArtists = [...artists, ...extraArtists];
            const allArtists = combineArtists.map((artist) => {
                return {
                    id: artist.Id,
                    name: artist.Name,
                };
            });
        albumEntries.releases[title] = {
            ...release,
            artist: allArtists,
        };

        albumArtistsList(artists, release);
        albumArtistsList(extraArtists, release);
        albumTrackList(album.TrackList, release);
    }
  }
};

const getAlbumData = () => {
    //Added a new Promise() instead of async/await so that the data parsed,
    //traversed and the albumEntries is ready before returning
    return new Promise(resolve => {
        console.time('promiseTime');
    try {
        if (dataParsed) {
            resolve(albumEntries);
            console.timeEnd('promiseTime');
        } else {
            fs.readFile('./data.json', 'utf8', (error, data) => {
                console.time('parseTime')
                if (error) {
                    console.error('Could not parse json file')
                    throw error ('Could not parse json file', error);
                } else {
                    let { releases } = JSON.parse(data);
                    console.timeEnd('parseTime')
                    albumData(releases);
                    dataParsed = true;
                    resolve(albumEntries);
                    console.timeEnd('promiseTime');
                }
            });
        }
    } catch (error) {
        console.error("JSON file failed to parse", error);
    }
    });
};
export default getAlbumData;
