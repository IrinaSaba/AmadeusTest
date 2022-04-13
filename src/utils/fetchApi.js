import axios from 'axios';

axios.defaults.baseURL = 'https://exercisedb.p.rapidapi.com';

export const getCardsApi = () => {
  return axios
    .get('/exercises?rapidapi-key=4818ea34f9msh0c69c48499ba798p18c4d2jsn3ee303eba722')
    .then(({ data }) => data)
    .catch(err => err);
};
