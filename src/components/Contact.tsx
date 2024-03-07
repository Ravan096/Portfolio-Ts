import {BiSupport} from 'react-icons/bi';
import {MdOutlineEmail} from 'react-icons/md';
import {FaEarthAsia} from 'react-icons/fa6';
import {Helmet} from "react-helmet";


import { HomeBanner } from './About';
import { Container,Heading,Box, Text, Stack, Flex, FormControl,FormLabel,Input,Button,InputGroup} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Container maxW={"full"} h={""}>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
                <link rel="canonical" href="https://lakshmanportfolio2023.netlify.app/" />
            </Helmet>
        <HomeBanner heading={"Contact"} home={"Home"} path={"Contact"}/>


        <Container maxW={["full","100%"]} h={["","90vh"]} bg={"whiteAlpha.900"}>

    <Container maxW={["full","70%"]} h={"100%"}>
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} h={"20vh"}>
        <Heading fontSize={["3xl","7xl"]} color={"blackAlpha.900"}>
            Let’s Talk
        </Heading>
    </Box>

    <Container maxW={"full"} display={"flex"} flexDirection={["column","row"]}>

    <Flex w={["full","50%"]} border={"1px solid gray"}>
      <Stack spacing={8} mx={['','auto']} maxW={'full'} py={12} px={6} >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} color={"blackAlpha.900"}>
            Get in Touch
          </Heading>    
        </Stack>
        <Box
          rounded={'lg'}
        //   bg={useColorModeValue('white', 'gray.700')}
        // bg={"whiteAlpha.900"}
          >
          <Stack spacing={4}>
            <Stack direction={["column","row"]}>
              <Box w={"100%"}>
                <FormControl id="firstName" isRequired>
                  <FormLabel color={"blackAlpha.900"}>First Name</FormLabel>
                  <Input type="text" color={"blackAlpha.900"}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel color={"blackAlpha.900"}>Last Name</FormLabel>
                  <Input type="text" color={"blackAlpha.900"}/>
                </FormControl>
              </Box>
            </Stack>
            <FormControl id="email" isRequired>
              <FormLabel color={"blackAlpha.900"}>Email address</FormLabel>
              <Input type="email" color={"blackAlpha.900"}/>
            </FormControl>
            <FormControl id="subject" isRequired>
              <FormLabel color={"blackAlpha.900"}>Subject</FormLabel>
              <InputGroup>
                <Input type={'text'}  color={"blackAlpha.900"}/>
              </InputGroup>
            </FormControl>

            <FormControl id='message' isRequired>
            <FormLabel color={"blackAlpha.900"}>Message</FormLabel>
              <Input type="text"  color={"blackAlpha.900"}/>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Send Message
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>




    <Box w={["100%","50%"]} h={["50vh",""]} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} ml={["",2]} mt={[3,0]}>
        <Box border={"1px solid gray"} w={["100%","70%"]} h={"30%"} color={"black"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Heading fontSize={["2xl",""]}>
                25, North Street Dubai
            </Heading>
            <Box display={"flex"} justifyContent={"space-around"} w={"100%"}>
            <FaEarthAsia style={{fontSize:"3rem"}}/>
            <Text>
                Office Address
            </Text>
            </Box>
        </Box>
        <Box border={"1px solid gray"}  w={["100%","70%"]} h={"30%"} color={"black"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Heading fontSize={["2xl",""]}>
            info@edefytheme.com
            </Heading>
            <Box display={"flex"} justifyContent={"space-around"}  w={"100%"}>
            <MdOutlineEmail style={{fontSize:"3rem"}}/>
            <Text>
                Official Mail
            </Text>
            </Box>
        </Box>
        <Box border={"1px solid gray"} mb={[1,0]}  w={["100%","70%"]} h={"30%"} color={"balck"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Heading fontSize={["2xl",""]}>
            +91 256-987-239
            </Heading>
            <Box display={"flex"} justifyContent={"space-around"}  w={"100%"}>
            <BiSupport style={{fontSize:"3rem"}}/>
            <Text>
                Official Phone
            </Text>
            </Box>
        </Box>



    </Box>
    </Container>
    </Container>
</Container>
    </Container>
  )
}

export default Contact