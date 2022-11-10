import React from 'react';
import { Container, Text } from '@chakra-ui/react';
import { RecipeRevenge } from '../types/types';

interface MealCardProps {
  details: RecipeRevenge;
}

function MealCard({ details }: MealCardProps) {
  const { title } = details;

  return (
    <Container m="15px 0">
      <Text fontSize="sm">{title.substring(0,15)}...</Text>
    </Container>
  );
}

export default MealCard;
