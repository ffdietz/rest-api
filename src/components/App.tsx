/* eslint-disable */
import {
  Container, Wrap,
} from '@chakra-ui/react';
import DailyMeal from './DailyMealGenerator';
import Header from './Header';
import Login from './Login';

// error handling
// read error http codes
export function App() {
  const days = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday',
    'Sunday'
  ];

  return (
    <Container w="90vw" textAlign="center" fontSize="xl" p="1rem" centerContent>
      <Header />
      <Login />
      {/* <RecipeSearch /> */}
      <Wrap spacing="30px" justify='center' marginTop="5vh">
       {days &&
         days.map((day) => (
            <DailyMeal day={day} key={day}/>
         ))
       }
       </Wrap>
    </Container>
  );
}

export default App