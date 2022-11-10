import React from 'react';
import { Wrap } from '@chakra-ui/react';
import MealGenerator from './MealGenerator';

function DayListing() {
  const days = [
    'Monday',
    // 'Tuesday',
    // 'Wednesday',
    // 'Thursday',
    // 'Friday',
    // 'Saturday',
    // 'Sunday',
  ];
  return (
    <Wrap spacing="30px" justify="center" marginTop="5vh">
      {days && days.map((day) => <MealGenerator day={day} key={day} />)}
    </Wrap>
  );
}

export default DayListing;
