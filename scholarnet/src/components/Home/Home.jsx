import React from 'react'
import {Heading, Stack, VStack, Text, Button, Image, HStack, Box} from '@chakra-ui/react'
import "./home.css";
import { Link } from 'react-router-dom';
import vg from "../../assets/images/img1.jpg"
import {CgGoogle, CgYoutube} from "react-icons/cg"
import {SiCoursera, SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"


const Home = () => {
  return (
    <section className='home'>
      <div className='container'>

        <Stack
        direction={["column", "row"]} // Phone me column else row.
        height="100%"
        justifyContent={["center", "space-between"]} // center when column, spacebeween when row.
        alignItems="center"
        spacing={['16', '56']} 
        >
          <VStack width={"full"} alignItems={["center", "flex-end"]}>
            <Heading children="Elevate Your Learning Journey with Us" size={'2xl'} /> 
            <Text children="Find Valuable Content At Reasonable Price" />
            <Link to='/courses'>
              <Button size={"lg"} colorScheme='yellow'>
                Explore Now !
              </Button>
            
            </Link>
          </VStack> 
          <Image boxSize={"md"} src={vg} objectFit="contain"></Image> 
        </Stack>

      </div> 
<Box>

<Heading 
      textAlign={"center"}
      fontFamily="body"
      color={"yellow.400"}
      children="OUR BRANDS" />

</Box>
 <Box>
 <HStack>
        <CgGoogle />
        <CgYoutube />
        <SiCoursera />
        <SiUdemy />
        <DiAws />
      </HStack>


 </Box>
      
    </section> // vg is image location upr me. 
    
  );
}

export default Home