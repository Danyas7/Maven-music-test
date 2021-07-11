import getAlbumData from "./album.js";

const searchByEndpoint = async (endpoint, prefix) => {
    const dataList = [];
    const suggestionMax = 5;
    let albumData = await getAlbumData().then(data => data);
    const data = albumData[endpoint];

    for (const prop in data) {
        if (dataList.length === suggestionMax) {
            break;
        }
        const littleProp = prop.toLowerCase();
        if (littleProp.startsWith(prefix)) {
            dataList.push(data[prop]);
        }
    }
    return dataList;
}
export default searchByEndpoint;