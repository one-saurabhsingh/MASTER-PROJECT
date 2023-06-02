import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'#1A202C'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading fontFamily={'serif'} children="All Rights Reserved" color={'yellow.400'} />
          <Heading
            children="@ SCHOLARNET BY SAURABH"
            size={'sm'}
            color={'yellow.400'}
            fontFamily={'bold'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          color="white"
          justifyContent={'center'}
          fontSize={'50'}
        >
          <a
            href="https://www.youtube.com/channel/UCqd1WmZAkIgnZNrr8o01A5g"
            target={'blank'}
          >
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.instagram.com/i_saurabh_singh/" target={'blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/one-saurabhsingh" target={'blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
