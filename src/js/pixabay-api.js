export { fetchSearch };
import axios from 'axios';
const API = '43257853-194068c59ee252fa44b7d008e';

const fetchSearch = async (imageName, page) => {
  try {
    const result = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: API,
        q: imageName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
