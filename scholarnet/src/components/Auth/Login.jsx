import {
  Box,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container h={'90vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading fontFamily={'monospace'} color={'yellow.400'} fontSize={'40px'} fo children="Welcome to ScholarNet" />

        <form>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
              id="email"
              type={'email'}
              required
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="passsword" children="Password" />
            <Input
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="Enter Password"
              id="password"
              type={'password'}
              required
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box>
            <Link to="/forgetpassword">
              <Button fontSize={'sm'} variant="link">
                Forget Password ?
              </Button>
            </Link>
          </Box>

          <Button my="4" color={'blackAlpha.900'} colorScheme={'yellow'} type="submit">
            Login
          </Button>

          <Box fontFamily={"mono"} my="4">
            New User ? {' '}
            <Link to="/register">
              <Button fontFamily={'sans-serif'} fontSize={'xl'} colorScheme={'yellow'} variant="link">
                Sign Up
              </Button>
            </Link>{' '}
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
