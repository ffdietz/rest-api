import { Button, Flex, Text, VStack, WrapItem } from '@chakra-ui/react';
import React, { useState } from 'react'
import { getRandomRecipes } from '../api/controllers';
import { Recipe } from '../types/types';
import MealCard from './MealCard';
// import MealCard from "./MealCard";

interface DailyMealProps {
  day: string
}

function DailyMeal({ day }: DailyMealProps) {
  const [menu, setMenu] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    const recipes = await getRandomRecipes(3);
    setMenu(recipes.recipes);
  };

  const handleGetButton = (
    event: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    event.preventDefault();
    fetchRecipes();
  };

  return (
    <WrapItem>
      <VStack h="50vh" w="20vw" border="1px" borderRadius={4} padding="1rem">
        <Text>{day}</Text>
        <Button onClick={handleGetButton}>
          GET
        </Button>
        <Flex flexDirection="column" alignItems="stretch" transition="1s ease">
          {menu &&
            menu.map((recipe) => <MealCard details={recipe} key={recipe.id} />)}
        </Flex>
      </VStack>
    </WrapItem>
  );
}

export default DailyMeal