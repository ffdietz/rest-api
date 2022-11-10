import { Container } from '@chakra-ui/react';
import Header from './components/Header';
// import Login from './components/Login';
import LoginQuery from './components/LoginQuery';
import DayListing from './components/DayListing';
// import RecipeSearch from './components/RecipeSearch';

export function App() {
  return (
    <Container w="90vw" textAlign="center" fontSize="xl" p="1rem" centerContent>
      <Header />
      {/* <Login /> */}
      <LoginQuery />
      {/* <RecipeSearch /> */}
      <DayListing />
    </Container>
  );
}

export default App;
