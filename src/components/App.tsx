import {
  Box,
  Text,
  VStack,
  Grid,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { getRandomRecipes } from '../api/controllers';

export function App() {
  // const [menu, setMenu] = useState([]);

  useEffect(() => {
    // const test = async() => { console.log(await getRandomRecipes(31));}
    test();
  }, [])

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>App</Text>
        </VStack>
      </Grid>
    </Box>
  );
}

export default App