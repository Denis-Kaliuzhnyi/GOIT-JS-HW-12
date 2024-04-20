import axios from 'axios';

const fetchImages = async (imageName, page = 1, perPage = 15) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '43257853-194068c59ee252fa44b7d008e',
        q: imageName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Failed to fetch images. Please try again later');
  }
};

export { fetchImages };
