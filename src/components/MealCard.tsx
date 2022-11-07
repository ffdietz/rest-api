import { Container, Text } from '@chakra-ui/react';
import React from 'react'
import { Recipe } from '../types/types'

interface MealCardProps {
  details: Recipe
}

function MealCard({details}: MealCardProps) {
  const { title, id } = details;
  return (
    <Container m="15px 0">
      <Text fontSize="sm" key={id}>{title}</Text>
    </Container>
  );
}

export default MealCard