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
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container h={'90vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Welcome to the ScholarNet" />

        <form onSubmit={submitHandler} style={{ width: '100%' }}>
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
              placeholder="Enter your Password"
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

          <Button my="4" colorScheme={'yellow'} type="submit">
            Login
          </Button>

          <Box my="4">
            New User ?{' '}
            <Link to="/register">
              <Button colorScheme={'yellow'} variant="link">
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
