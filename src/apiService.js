const BASIC_URL = 'https://pixabay.com/api/';
const API_KEY = '21838364-8451c122c72af9b2106f1fefd';


async function getImages(searchItem, pageNumber = 1, pagination = 12) {
    try {
        const searchRequest = `${BASIC_URL}?image_type=photo&orientation=horizontal&q=${searchItem}&page=${pageNumber}&per_page=${pagination}&key=${API_KEY}`;
        const responce = await fetch(searchRequest);
        const result = await responce.json();
        return result.hits;
    } catch (err) {
        return err;
    }
};



export default  getImages;