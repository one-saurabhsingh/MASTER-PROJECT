import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../Auth/Register';
import dp from '../../assets/images/Mern.jpg';

const Profile = () => {
  const user = {
    name: ': Saurabh Kumar Singh',
    email: ': one.saurabhsingh@gmail.com',
    createdAt: String(new Date().toISOString()),
    avatar: {
      url: 'sadsad',
    },
    role: 'user',
    subscription: {
      status: undefined,
    },
    playlist: [
      {
        course: 'sadsad',
        poster: 'dp',
      },
     
    ],
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const changeImageSubmitHAndler = () => console.log('image changed');

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py="8">
      <Heading children="Profile" m="8" textTransform={'uppercase'} />

      <Stack
        direction={['column', 'row']}
        justifyContent={'flex-start'}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'40'} src={''} />
          <Button onClick={onOpen} colorScheme={'yellow'} variant={'ghost'}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="Created At" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />{' '}
            {/*  yeh upar wala split krega jahan t milega do part mein and index 0 waala ko le lenge */}
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription && user.subscription.status === 'active' ? (
                <Button color={'yellow.500'} variant={'unstyled'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme={'yellow'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>

            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="Playlist" size={'md'} my="8" />

      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap="wrap"
          p="4"
          spacing={['8', '16']}
        >
          {user.playlist.map(element => (
            <VStack w="48" m="2" key={element.course}>
              <Image
                boxSize={'full'}
                objectFit={'contain'}
                src={element.poster}
              />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>

                <Button>
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox
        changeImageSubmitHAndler={changeImageSubmitHAndler}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHAndler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImagePrev('');
    setImage('');
  };
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent alignItems={'center'}>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}

                <Input
                  onChange={changeImage}
                  type={'file'}
                  css={{ '&::file-selector-button': fileUploadCss }}
                />
                <Button w="full" colorScheme={'yellow'} type="submit">
                  Apply Changes
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
