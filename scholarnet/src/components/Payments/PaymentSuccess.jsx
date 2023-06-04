import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container h="90vh" p="16">
      <Heading my="8" textAlign={'center'}>
        You have Pro Pack
      </Heading>

      <VStack boxShadow={'lg'} pb="16" alignItems={'center'} borderRadius="lg">
        <Box
          w="full"
          bg="yellow.400"
          p="4"
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color={'black'}>Payment Successfull !</Text>
        </Box>

        <Box p="4">
          <VStack textAlign={'center'} px="8" mt="4" spacing={'8'}>
            <Text>
              Congratulations, Now you're a pro member and you have access to all our premium
              contents.
            </Text>

            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>

        <Link to="/profile">
          <Button variant={'ghost'}>Go to profile</Button>
        </Link>

        <Heading size={'xs'}>Reference: #underconstruction</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
