import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { loginPost } from '../api/controllers';

interface Auth {
  user: string;
  pass: string;
}

function Login() {
  const [enableLogin, setEnableLogin] = useState<boolean>(true);
  const [auth, setAuth] = useState<Auth>({
    user: '',
    pass: '',
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await loginPost(auth);
    console.log(response)
  };

  return (
    <Container marginTop="5vh">
      <>
        <Button onClick={() => setEnableLogin(!enableLogin)}>Login</Button>
        {enableLogin && (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="auth[author]"
                defaultValue={auth.user}
                onChange={handleUserInput}
                placeholder="username"
              />
            </FormControl>
            <FormControl>
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
        )}
      </>
    </Container>
  );
}

export default Login;
