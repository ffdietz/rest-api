import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { loginPost } from '../api/controllers';

interface Auth {
  user: string;
  pass: string;
}

function LoginQuery() {
  // const [enableLogin, setEnableLogin] = useState<boolean>(true);
  const [auth, setAuth] = useState<Auth>({
    user: '',
    pass: '',
  });

  const mutation = useMutation({
    mutationFn: () => loginPost(auth)
  });

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth((values) => ({
      ...values,
      user: event.target.value,
    }));
  };

  const handlePassInput = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth((values) => ({
      ...values,
      pass: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate();
    console.log(mutation.status)
  };

  return (
    <Container marginTop="5vh">
      <>
        {/* <Button onClick={() => setEnableLogin(!enableLogin)}>Login</Button> */}
        {/* {enableLogin && ( */}
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="auth[author]"
              defaultValue={auth.user}
              onChange={handleUserInput}
              placeholder="username"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="auth[comment]"
              defaultValue={auth.pass}
              onChange={handlePassInput}
              placeholder="password"
            />
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
        {/* )} */}
        {mutation.status === 'success' && <Box>Successfully submitted</Box>}
      </>
    </Container>
  );
}

export default LoginQuery;
