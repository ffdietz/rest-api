import axios from 'axios';

export const client = axios.create({
  baseURL: `${process.env.REACT_APP_PH_URL}`,
});

export const params = {
  // app_id: process.env.REACT_APP_ED_ID,
  // app_key: process.env.REACT_APP_ED_KEY,
};
