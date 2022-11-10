import { RecipeRevenge, User } from '../types/types';
import { client } from './client';

// export const getRandomRecipes = async (
//   quantity: number
// ): Promise<Recipe[] | unknown> => {
//   try {
//     const response = await client.get(
//       `/random?number=${quantity}&apiKey=${process.env.REACT_APP_SP_KEY}`
//     );
//     return response.data.recipes;
//   } catch (error) {
//     return error;
//   }
// };

// export const getMeal = async (): Promise<Recipe[] | unknown> => {
//   try {
//     const response = await client.get(
//       `?type=public&app_id=${process.env.REACT_APP_ED_ID}&app_key=${process.env.REACT_APP_ED_KEY}&diet=balanced&random=true`
//     );

//     return response.data.hits.slice(0, 3);
//   } catch (error) {
//     return error;
//   }
// };

export const getAnotherMeal = async (): Promise<RecipeRevenge[] | unknown> => {
  try {
    const response = await client.get('/posts');
    console.log(response)
    return response.data.slice(0, 3);
  } catch (error) {
    return error;
  }
};

export const loginPost = async (data: User) => {
  try {
    const response = await client.post('/users', {
      username: data.user,
      password: data.pass
    });
    console.log(response)
    return response
  } catch (error) {
    return error;
  }
};
