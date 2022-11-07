import recipesClient from './client';

export const getRandomRecipes = async (quantiy : number) => {
  
  try{
    const response = await recipesClient.get(
      `/random?number=${quantiy}&apiKey=${process.env.REACT_APP_SP_KEY}`
    );
    console.log(response);
    return response.data

  } catch (error) { return error }

} 

export const getMealPlan = async () => {

};