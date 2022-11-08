import recipesClient from './client';

export const getRandomRecipes = async (quantity : number) => {
  try{
    const response = await recipesClient.get(
      `/random?number=${quantity}&apiKey=${process.env.REACT_APP_SP_KEY}`
    );
    return response.data

  } catch (error) { return error }

} 

export const getMealPlan = async () => {

};