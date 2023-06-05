import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, {useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: '001',
      title: 'First Work',
      description: 'It is under progress.',
      video: {
        url: 'sampleSite1',
      },
    },
    {
      _id: '002',
      title: 'Second Work',
      description: 'It is under progress.',
      video: {
        url: 'sampleSite2',
      },
    },
    {
      id: '003',
      title: 'Third Work',
      description: 'It is under progress.',
      video: {
        url: 'sampleSite3',
      },
    },
    {
      id: '004',
      title: 'Fourth Work',
      description: 'It is under progress.',
      video: {
        url: 'sampleSite4',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          controls
          controlsList="nodownload  noremoteplayback noplaybackspeed "
          disablePictureInPicture
          disableRemotePlayback
          disablePlaybackSpeed
          src={introVideo}
        ></video>

        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />

        <Heading m="4" children="Description" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '50%',
              padding: '1rem',
              textAlign: 'left',
              margin: 10,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
