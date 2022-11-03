import axios from "axios";

export const recipesClient = axios.create({
  baseURL: `https://api.edamam.com/search?app_id=${REACT_APP_EDAMAM_ID}&app_key=${REACT_APP_ED_KEY}&`,
});

export default recipesClient;