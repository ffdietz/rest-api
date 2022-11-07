import { Box, Button, Container, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'

interface Auth{
  user: string;
  pass: string;
}

function Login() {
  const [activeLogin, setActiveLogin] = useState<boolean>(false);
  const [auth, setComment] = useState<Auth>({
    user: '',
    pass: '',
  });

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setComment((values) => ({
      ...values,
      author: event.target.value,
    }));
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.persist();
    setComment((values) => ({
      ...values,
      comment: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (id) {
    //   const response = await postComment(id, comment);
    //   console.log(response);
    // }
  };

  const handleActiveAuth = (
    event: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    event.preventDefault();
    setActiveLogin(!activeLogin);
  }


  return (
    <Container marginTop="5vh">
      <>
        <Button onClick={handleActiveAuth}>Login</Button>
        {activeLogin && (
          <Box>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="comment[author]"
                  defaultValue={auth.user}
                  onChange={handleUserInput}
                  placeholder="Your name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Comment</FormLabel>
                <Textarea
                  name="comment[comment]"
                  defaultValue={auth.pass}
                  onChange={handlePasswordInput}
                  placeholder="Your comment"
                />
              </FormControl>
              <Button type="submit">Submit</Button>
            </form>
          </Box>
        )}
      </>
    </Container>
  );
}

export default Login