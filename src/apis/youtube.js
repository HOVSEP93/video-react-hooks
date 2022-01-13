import axios from 'axios';

const KEY = 'AIzaSyCH-X3c7F8nLFYz4QwJ8LlxAzgs9W44zKU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
