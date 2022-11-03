import {
  Box,
  Text,
  VStack,
  Grid,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { apiTest } from '../api/controllers';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export function App() {

  useEffect(() => {
    console.log(apiTest('chicken'));
  }, [])

  return <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Text>
            App
          </Text>
        </VStack>
      </Grid>
    </Box>
}

export default App