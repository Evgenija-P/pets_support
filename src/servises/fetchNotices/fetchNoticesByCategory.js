import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

axios.defaults.baseURL = BASE_URL;

async function getNoticesByCategory(category) {
  const response = await axios.get(category);

  console.log(response.data.message);
  return response.data;
}

export default getNoticesByCategory;
