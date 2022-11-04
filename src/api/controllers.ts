import recipesClient from './client';

export const getRandomRecipes = async (quantiy : number) => {
  const response = await recipesClient.get(
    `/random?number=${quantiy}&apiKey=${process.env.REACT_APP_SP_KEY}`
  );
  return response.data
} 

export const anotherTest = {};