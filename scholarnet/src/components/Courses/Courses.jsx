import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../redux/actions/course';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        size={'sm'}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={3} children={description} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'creator'}
        />
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={['center', 'left']}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        textAlign={['center', 'left']}
        size="xs"
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />

      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/courses/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>

        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to PlayList
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keywords, setKeywords] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addToPlaylistHandler = async courseid => {
    await dispatch(addToPlaylist(courseid));
    dispatch(loadUser());
  };

  const { loading, error, courses, message } = useSelector(
    state => state.course
  );

  useEffect(() => {
    dispatch(getAllCourses(category, keywords));

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [category, keywords, dispatch, error, message]);

  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Machine Learning',
    'Data Science',
    'Game Development',
  ];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children={'All Courses'} m={'8'} />

      <Input
        value={keywords}
        onChange={e => {
          setKeywords(e.target.value);
        }}
        placeholder={'Search a Course...'}
        type={'text'}
        focusBorderColor={'yellow.500'}
      />

      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses.length > 0 ? (
          courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading mt="4" children="Courses Not Found" />
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
