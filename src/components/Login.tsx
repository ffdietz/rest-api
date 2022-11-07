import { Box, Button, Container } from '@chakra-ui/react'
import React, { useState } from 'react'

function Login() {
  const [activeLogin, setActiveLogin] = useState<boolean>(false);

  const handleAuth = (
    event: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    event.preventDefault();
    setActiveLogin(!activeLogin);
  }


  return (
    <Container marginTop="5vh">
      <>
        <Button onClick={handleAuth}>
          Login
        </Button>
        {activeLogin &&
        <Box>Active</Box>
        }
      </>
    </Container>
  )
}

export default Login