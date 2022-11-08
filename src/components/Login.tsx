import { 
  Button, 
  Container,
  FormControl, 
  FormLabel, 
  Input
} from '@chakra-ui/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'

interface Auth{
  user: string;
  pass: string;
}

function Login() {
  const [enableLogin, setEnableLogin] = useState<boolean>(false);
  const [auth, setAuth] = useState<Auth>({
    user: '',
    pass: '',
  });

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setAuth((values) => ({
      ...values,
      user: event.target.value,
    }));
  };

  const handlePassInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setAuth((values) => ({
      ...values,
      pass: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (id) {
    //   const response = await postComment(id, comment);
    //   console.log(response);
    // }
  };

  const handleEnableAuth = (
    event: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    event.preventDefault();
    setEnableLogin(!enableLogin);
  }


  return (
    <Container marginTop="5vh">
      <>
        <Button onClick={handleEnableAuth}>Login</Button>
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
                <FormLabel>Comment</FormLabel>
                <Input
                  type='password'
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

export default Login