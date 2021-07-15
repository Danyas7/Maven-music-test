import getAlbumData from "./album.js";

const searchByEndpoint = async (endpoint, prefix) => {
    console.time('searchTime');
    const dataList = [];
    const suggestionMax = 5;
    //Removed the .then() since getAlbumData() returns
    //only when the promise has been resolved
    let albumData = await getAlbumData();
    const data = albumData[endpoint];

    for (const prop in data) {
        //Adding the if condition to consider properties
        //attached to the object itself
        if (data.hasOwnProperty(prop)) {
            if (dataList.length === suggestionMax) {
                break;
            }
            const littleProp = prop.toLowerCase();
            if (littleProp.startsWith(prefix)) {
                dataList.push(data[prop]);
            }
        }
    }
    console.timeEnd('searchTime');
    return dataList;
};
export default searchByEndpoint;