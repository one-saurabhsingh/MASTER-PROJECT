import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import termsAndCondition from '../../assets/docs/termsAndCondition';
import dp from '../../assets/images/profile.jpg';
import PG from '../../assets/images/PG.png';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <HStack>
        <Avatar src={dp} boxSize={['40', '48']} />
        <Avatar src={PG} boxSize={['40', '48']} />
      </HStack>

      <Text children="Founder" opacity={0.5} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading
        children="Saurabh Kumar Singh"
        size={['md', 'xl']}
        color={'yellow.300'}
      />
      <Text
        textAlign={['center', 'left']}
        children={`As the founders of our groundbreaking video streaming platform, our vision is to revolutionize the way people consume and access media, providing seamless access to a vast library of captivating content anytime, anywhere.`}
      />
      <Text
        textAlign={['center', 'left']}
        children={` We strive to offer top-notch content that is both affordable and of the highest quality to our valued customers.`}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      loop
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      children="Terms & Conditions"
      size={'md'}
      textAlign={['center', 'left']}
      my={'4'}
    />
    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my="4"
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={'center'} color={'yellow.400'}/>
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'bold'} m="8" textAlign={['center', 'left']}>
           A video streaming platform with premium courses available only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plans
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />
      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
