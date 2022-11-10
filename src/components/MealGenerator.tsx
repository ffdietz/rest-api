import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button, Flex, Text, VStack, WrapItem } from '@chakra-ui/react';
import { getAnotherMeal } from '../api/controllers';
import { RecipeRevenge } from '../types/types';

import MealCard from './MealCard';

interface DailyMealProps {
  day: string;
}

function MealGenerator({ day }: DailyMealProps) {
  const { isError, isFetching, data, refetch } = useQuery({
    queryKey: ['recipes', day],
    queryFn: () => getAnotherMeal(),
    enabled: false,
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <WrapItem>
      <VStack h="50vh" w="20vw" border="1px" borderRadius={4} padding="1rem">
        <Text>{day}</Text>
        <Button onClick={() => refetch()}>GET</Button>
        <Flex flexDirection="column" alignItems="stretch">
          {data &&
            data?.map((recipe: RecipeRevenge) => (
              <MealCard details={recipe} key={recipe.id} />
            ))}
        </Flex>
      </VStack>
    </WrapItem>
  );
}

export default MealGenerator;
