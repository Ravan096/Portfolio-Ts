import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { BiSupport } from 'react-icons/bi';
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaEarthAsia } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import news1 from '../assets/1.8db7cac3.jpg';
import news2 from '../assets/2.35c9abda.jpg';
import news3 from '../assets/3.43af2d95.jpg';
import abouthero from '../assets/abouthero.png';
import hero from '../assets/hero.png';
import port1 from '../assets/img-1.bcaec8cb.jpg';
import port2 from '../assets/img-2.c17aa951.jpg';
import port3 from '../assets/img-3.4918c2e8.jpg';
import port4 from '../assets/img-4.9ca17d0e.jpg';
import shape3 from '../assets/shape-3.png';
import shape4 from '../assets/shape-4.png';
import shape1 from '../assets/shape1.png';
import shape2 from '../assets/shape2.png';



const Home = () => {
    const [showPassword, setShowPassword] = useState(false)

    const [component, setComponent] = useState <JSX.Element>(<About/>);
    const [compVal, setcompVal]= useState("");
  function changeComponent (e:any){
    setcompVal(e.target.id);
    console.log(compVal);


    if (compVal == "about") {
      setComponent(<About/>);
    }else if(compVal == "skill") {
      setComponent(<Skill/>);
    }else if(compVal == "service"){
        setComponent(<Service/>);
    }else if(compVal == "award"){
        setComponent(<Award/>);
    }else{
        setComponent(<SocilaMedia/>)
    }
  }
  return (
    <Stack bg={"#0f0836"}>
    <Container maxW={"100%"} bg={"#31307a"} h={"81vh"} display={"flex"} flexDirection={["column","row"]}>
        <Box  position={"relative"} width={["100%","50%"]} height={["50%","35%"]}
         display={"flex"}
         flexDirection={"column"}
         alignItems={"flex-start"}
         justifyContent={"space-around"}
         top={["20%","30%"]}
         left={["0%","10%"]}
         >

            <Heading as='h1' size={["2xl","4xl"]} display={"flex"} color={"whiteAlpha.900"} >
                I'am Lakshman Gupta
            </Heading>
            <Text color={"white"} fontSize={["2xl","3xl"]} children="Full Stack Developer | Frontend Developer"/>
            <Box display={"flex"} width={["80%","30%"]} justifyContent={"space-between"} >
                <Link to={"#"}><Box p={"3"} border={"1px solid crimson"} borderRadius={"lg"}><FaFacebookF style={{fontSize:"2.5rem",color:"#4278ff"}}/></Box></Link>
                <Link to={"#"}><Box p={"3"} border={"1px solid #206da8"} borderRadius={"lg"}><FaLinkedinIn style={{fontSize:"2.5rem",color:"blue"}}/></Box></Link>
                <Link to={"#"}><Box p={"3"} border={"1px solid pink"} borderRadius={"lg"}><FaInstagram style={{fontSize:"2.5rem",color:"crimson"}}/></Box></Link>
            </Box>
        </Box>
        <Box display={["none","block"]}>
            <img src={hero}/>
        </Box>
    </Container>


<Container maxW={"100%"}  h={["","90vh"]} bg={"#0f0836"}>

    <Box  maxW={["100%","70%"]} margin={"auto"} h={["20vh","20%"]} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>

        <Heading size={["2xl","4xl"]} color={"whiteAlpha.900"} children="About me"/>

        <Box color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={["flex-start","space-around"]} h={"40%"} flexWrap={"wrap"}>
        <Text color={"crimson"} id='about' children={"About"} fontWeight={"bold"} onClick={changeComponent} cursor={"pointer"} w={["30%","19%"]} textAlign={"center"} _hover={{borderBottom:"2px solid white"}} />
        <Text children={"Skill"} id='skill' cursor={"pointer"} fontWeight={"bold"} onClick={changeComponent} w={["30%","19%"]} textAlign={"center"} _hover={{borderBottom:"2px solid white"}}/>
        <Text children={"Services"} id='service' cursor={"pointer"} fontWeight={"bold"} onClick={changeComponent} w={["30%","19%"]} textAlign={"center"} _hover={{borderBottom:"2px solid white"}}/>
        <Text children={"Social Media"} id='socialmedia' cursor={"pointer"} fontWeight={"bold"} onClick={changeComponent} w={["30%","19%"]} textAlign={"center"} _hover={{borderBottom:"2px solid white"}}/>
        <Text children={"Award"} id='award' cursor={"pointer"} fontWeight={"bold"} onClick={changeComponent} w={["30%","19%"]} textAlign={"center"} _hover={{borderBottom:"2px solid white"}}/>
        </Box>
    </Box>

    <Container  maxW={["100%","70%"]} h={["","80%"]}>
        {component}
        </Container>

</Container>




{/* portfolio section */}


<Container maxW={"100%"}  h={"160vh"} bg={"#0f0836"}>

<Container display={"flex"} maxW={["100%","70%"]} h={"100%"}  flexDirection={["column","row"]} flexWrap={["nowrap","wrap"]}>
    <Box width={["100%","50%"]}>
    <Heading fontSize={["3rem","6rem"]} color={"whiteAlpha.900"}  h={"20%"}>
        Portfolio
    </Heading>
    <Box>
        <img src={port1} alt="" />
        {/* <Box  border={"1px solid crimson"} position={"relative"} w={"20vw"} p={"1rem"}
        left={"0"} bottom={"22vh"} color={"whiteAlpha.800"} zIndex={1000}>
            <Heading size={"2xl"}>
                Minimalism
            </Heading>
            <Text fontSize={"2xl"} m={2}>
                illustration .Art Direction
            </Text>
            <Button variant={"outline"} fontSize={"2xl"} color={"whiteAlpha.800"} m={2}>
                View Work
            </Button>
        </Box> */}

    </Box>
    <Box>
        <img src={port2} alt="" />
        {/* <Box  border={"1px solid crimson"} position={"relative"} h={"20vh"} w={"20vw"} p={"2rem"}
        left={"0"} bottom={"22vh"} color={"whiteAlpha.800"} zIndex={1000}>
            <Heading size={"2xl"}>
                3D Project
            </Heading>
            <Text fontSize={"2xl"} m={2}>
                illustration .Art Direction
            </Text>
            <Button variant={"outline"} fontSize={"2xl"} color={"whiteAlpha.800"} m={2}>
                View Work
            </Button>
        </Box> */}
    </Box>
    </Box>


    <Box width={["100%","50%"]}>
        <Box>
        <img src={port3} alt="" />
        {/* <Box  border={"1px solid crimson"} position={"relative"} h={"20vh"} w={"20vw"} p={"2rem"}
        left={"0"} bottom={"22vh"} color={"whiteAlpha.800"} zIndex={1000}>
            <Heading size={"2xl"}>
               Abstract Art
            </Heading>
            <Text fontSize={"2xl"} m={2}>
                illustration .Art Direction
            </Text>
            <Button variant={"outline"} fontSize={"2xl"} color={"whiteAlpha.800"} m={2}>
                View Work
            </Button>
        </Box> */}
        </Box>
        <Box>
        <img src={port4} alt="" />
        {/* <Box  border={"1px solid crimson"} position={"relative"} h={"20vh"} w={"20vw"} p={"2rem"}
        left={"0"} bottom={"22vh"} color={"whiteAlpha.800"} zIndex={1000}>
            <Heading size={"2xl"}>
                Modern BG
            </Heading>
            <Text fontSize={"2xl"} m={2}>
                illustration .Art Direction
            </Text>
            <Button variant={"outline"} fontSize={"2xl"} color={"whiteAlpha.800"} m={2}>
                View Work
            </Button>
        </Box> */}
        </Box>
    </Box>
    
</Container>

</Container>




<Container maxW={"100%"} h={["","90vh"]} bg={"#0f0836"}>

    <Container maxW={["100%","70%"]} h={"100%"}>
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} h={"20vh"}>
        <Heading fontSize={["3xl","7xl"]} color={"whiteAlpha.900"}>
            Let’s Talk
        </Heading>
    </Box>

    <Container maxW={"100%"} display={"flex"} flexDirection={["column","row"]}>

    <Flex
    w={["100%","50%"]} border={"1px solid gray"}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} color={"whiteAlpha.800"}>
            Get in Touch
          </Heading>    
        </Stack>
        <Box
          rounded={'lg'}
        //   bg={useColorModeValue('white', 'gray.700')}
        bg={"#0f0836"}
          boxShadow={'lg'}>
          <Stack spacing={4}>
            <Stack direction={["column","row"]}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel color={"whiteAlpha.900"}>First Name</FormLabel>
                  <Input type="text" color={"whiteAlpha.900"}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel color={"whiteAlpha.900"}>Last Name</FormLabel>
                  <Input type="text" color={"whiteAlpha.900"}/>
                </FormControl>
              </Box>
            </Stack>
            <FormControl id="email" isRequired>
              <FormLabel color={"whiteAlpha.900"}>Email address</FormLabel>
              <Input type="email" color={"whiteAlpha.900"}/>
            </FormControl>
            <FormControl id="subject" isRequired>
              <FormLabel color={"whiteAlpha.900"}>Subject</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}  color={"whiteAlpha.900"}/>
                <InputRightElement h={'full'}>
                  <Button color={"whiteAlpha.800"}
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl id='message' isRequired>
            <FormLabel color={"whiteAlpha.900"}>Message</FormLabel>
              <Input type="text"  color={"whiteAlpha.900"}/>
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
        <Box border={"1px solid gray"} w={["100%","70%"]} h={"30%"} color={"white"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
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
        <Box border={"1px solid gray"}  w={["100%","70%"]} h={"30%"} color={"white"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
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
        <Box border={"1px solid gray"}  w={["100%","70%"]} h={"30%"} color={"white"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
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




<Container maxW={"100%"}  h={["","80vh"]} bg={"#0f0836"}>
    <Container maxW={["100%","70%"]} h={["15vh","30%"]} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Heading color={"whiteAlpha.900"} fontSize={["2.5rem","6rem"]}>
            Latest News
        </Heading>
    </Container>

    <Container maxW={["100%","70%"]}  display={"flex"} justifyContent={"space-around"} flexDirection={["column","row"]} >

        <Box color={"white"}  w={["100%","29%"]} h={"100%"}>
            <img src={news1} alt="" />
            <Text mt={[2,0]}>
            By Admin. Nov 24, 2020
            </Text>
            <Text fontSize={["2xl","3xl"]} fontWeight={"bold"}>
            Helpful tips for become a successful designer
            </Text>
            <Link to={"#"}>
            Read More....
            </Link>
        </Box>
        <Box color={"white"}  w={["100%","29%"]} h={"100%"} mt={[2,0]}>
            <img src={news2} alt="" />
            <Text mt={[2,0]}>
            By Admin. Nov 24, 2020
            </Text>
            <Text fontSize={["2xl","3xl"]} fontWeight={"bold"}>
            Helpful tips for become a successful designer
            </Text>
            <Link to={"#"}>
            Read More....
            </Link>
        </Box>
        <Box color={"white"} w={["100%","29%"]} h={"100%"} mt={[2,0]}>
            <img src={news3} alt="" />
            <Text mt={[2,0]}>
            By Admin. Nov 24, 2020
            </Text>
            <Text fontSize={["2xl","3xl"]} fontWeight={"bold"}>
            Helpful tips for become a successful designer
            </Text>
            <Link to={"#"}>
            Read More....
            </Link>
        </Box>

    </Container>


</Container>



    </Stack>
  )
}

export default Home



const About =()=>{

    return(
        <Container display={"flex"} maxW={"100%"} h={"100%"} alignItems={"center"} flexDirection={["column","row"]}>
            <Box w={["95vw","50%"]} h={["100%","70%"]}>
                <img src={abouthero} alt="" />
            </Box>
            <Box w={["95vw","50%"]} h={["100%","70%"]} color={"whiteAlpha.900"} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} justifyContent={"space-around"}>
                <Heading size={["2xl","3xl"]}>
                    I created products not just art
                </Heading>

                <Text>
                My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </Text>
                <Button variant={"outline"} color={"whiteAlpha.800"} border={"1px solid crimson"} _hover={{color:"black", bgColor:"red", border:"none"}}>
                    Lets Talk
                </Button>
            </Box>
        </Container>
    )
}


const Skill= ()=>{
    return(
        <Container display={"flex"} maxW={["100vw","100%"]} h={"100%"} flexWrap={["wrap","wrap"]}
         alignContent={"center"} justifyContent={"center"} flexDirection={["row","row"]}>
            <Box borderBottom={"2px solid #f03737"} h={["","40%"]} w={["100%","30%"]} color={"whiteAlpha.900"} m={2}>
                <Heading fontSize={["3xl","7rem"]} color={"#f03737"}>
                    95%
                </Heading>
                <Text fontSize={["2xl","3xl"]}>
                    Project Management
                </Text>
            </Box>
            <Box borderBottom={"2px solid #0eb02e"} h={["","40%"]} w={["100%","30%"]} color={"whiteAlpha.900"} m={2}>
                <Heading fontSize={["3xl","7rem"]} color={"#0eb02e"}>
                    70%
                </Heading>
                <Text fontSize={["2xl","3xl"]}>
                    Communication Skills
                </Text>
            </Box>
            <Box borderBottom={"2px solid #c79f1c"} h={["","40%"]} w={["100%","30%"]} color={"whiteAlpha.900"} m={2}>
                <Heading fontSize={["3xl","7rem"]} color={"#c79f1c"}>
                    65%
                </Heading>
                <Text fontSize={["2xl","3xl"]}>
                    Problem Solving
                </Text>
            </Box>
            <Box borderBottom={"2px solid #e5e81e"} h={["","40%"]} w={["100%","30%"]} color={"whiteAlpha.900"} m={2}>
                <Heading fontSize={["3xl","7rem"]} color={"#e5e81e"}>
                    55%
                </Heading>
                <Text fontSize={["2xl","3xl"]}>
                    Analitical Ability
                </Text>
            </Box>
            <Box borderBottom={"2px solid #c20e4a"} h={["","40%"]} w={["100%","30%"]} color={"whiteAlpha.900"} m={2}>
                <Heading fontSize={["3xl","7rem"]} color={"#c20e4a"}>
                    43%
                </Heading>
                <Text fontSize={["2xl","3xl"]}>
                    Organization
                </Text>
            </Box>
            <Box borderBottom={"2px solid #25a9b3"} h={["","40%"]} w={["100%","30%"]} color={"whiteAlpha.900"} m={2}>
                <Heading fontSize={["3xl","7rem"]} color={"#25a9b3"}>
                    82%
                </Heading>
                <Text fontSize={["2xl","3xl"]}>
                    Creativity
                </Text>
            </Box>

        </Container>
    )
}


export const Service =()=>{
    return (
        <Container display={"flex"} maxW={"100%"} h={"100%"} flexWrap={["nowrap","wrap"]} flexDirection={["column","row"]}>
            <Box h={["50vh","50%"]} w={["100%","50%"]} color={"whiteAlpha.900"} display={"flex"}
             alignItems={["flex-start","center"]} flexDirection={["column","row"]} mt={2}>
                <Box >
                    <img src={shape1} alt="" />
                </Box>
                <Box>
                <Heading fontSize={["3rem","3rem"]} color={"#f03737"}>
                    Product design
                </Heading>
                <Text>
                consectetur adipiscing elit, eiusmod tempor incididunt labore.
                </Text>
                </Box>
            </Box>
            <Box h={["50vh","50%"]} w={["100%","50%"]} color={"whiteAlpha.900"} display={"flex"}
            alignItems={["flex-start","center"]} flexDirection={["column","row"]} mt={2}>
            <Box>
                    <img src={shape2} alt="" />
                </Box>
                <Box>
                <Heading fontSize={"3rem"} color={"#0eb02e"}>
                    Web Design
                </Heading>
                <Text>
                consectetur adipiscing elit, eiusmod tempor incididunt labore.
                </Text>
                </Box>
            </Box>
            <Box h={["50vh","50%"]} w={["100%","50%"]} color={"whiteAlpha.900"} display={"flex"}
            alignItems={["flex-start","center"]} flexDirection={["column","row"]} mt={2}>
               <Box>
               <img src={shape3} alt="" />
                
               </Box>
               <Box>
               <Heading fontSize={"3rem"} color={"#c79f1c"}>
                    Visual Design
                </Heading>
                <Text>
                consectetur adipiscing elit, eiusmod tempor incididunt labore.
                </Text>
               </Box>
            </Box>
            <Box h={["50vh","50%"]} w={["100%","50%"]} color={"whiteAlpha.900"} display={"flex"}
            alignItems={["flex-start","center"]} flexDirection={["column","row"]} mt={2}>
                <Box>
                <img src={shape4} alt="" />

                </Box>
                <Box>
                <Heading fontSize={"3rem"} color={"#e5e81e"}>
                    Business Stretegy
                </Heading>
                <Text >
                consectetur adipiscing elit, eiusmod tempor incididunt labore.
                </Text>
                </Box>
            </Box>
        </Container>
    )
}

const SocilaMedia= ()=>{
    return (
        <Container display={"flex"} flexDirection={["column","row"]} maxW={"100%"} h={"100%"}  flexWrap={["nowrap","wrap"]} >
            <Box  h={"40%"} w={["100%","30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <FaFacebookF style={{fontSize:"5rem"}}/>
                <Heading fontSize={"2rem"} color={"#f03737"}>
                    Facebook
                </Heading>
            </Box>
            <Box  h={"40%"} w={["100%","30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
               <FaInstagram style={{fontSize:"5rem"}}/>
                <Heading fontSize={"2rem"} color={"#0eb02e"}>
                    Instagram
                </Heading>
            </Box>
            <Box  h={"40%"} w={["100%","30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <FaTwitter style={{fontSize:"5rem"}}/>
               <Heading fontSize={"2rem"} color={"#c79f1c"}>
                    Twitter
                </Heading>
            </Box>
            <Box  h={"40%"} w={["100%","30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <FaDribbble style={{fontSize:"5rem"}}/>
                <Heading fontSize={"2rem"} color={"#e5e81e"}>
                    Dribble
                </Heading>
            </Box>
            <Box  h={"40%"} w={["100%","30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <FaLinkedinIn style={{fontSize:"5rem"}}/>
                <Heading fontSize={"2rem"} color={"#e5e81e"}>
                    Linkedin
                </Heading>
            </Box>
            <Box  h={"40%"} w={["100%","30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <FaBehance style={{fontSize:"5rem"}}/>
                <Heading fontSize={"2rem"} color={"#e5e81e"}>
                    Behance
                </Heading>
            </Box>
        </Container>
    )
}


const Award =()=>{
    return(
        <Heading color={"whiteAlpha.800"}>
            Award
        </Heading>
    )
}