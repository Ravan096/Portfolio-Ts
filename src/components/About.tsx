import { Container, Heading, Box, Text, UnorderedList, ListItem, Button, CircularProgress, CircularProgressLabel} from '@chakra-ui/react';
import aboutimg from '../assets/about.c275b471.jpg';
import { Service } from './Home';


const About = () => {
  return (
    <Container maxW={["100vw","100%"]}   w={["100vw",""]}>
        <HomeBanner heading={"About Us"} home={"Home"} path={"About"}/>

        <Container h={""} maxW={"100%"} bgColor={"#f2f2f2"} bg='gray.50'>
            <Container maxW={"100%"} h={["","90vh"]} display={'flex'} flexDirection={["column","row"]} alignItems={"center"} justifyContent={"center"}>
                <Container h={["","90%"]}  display={"flex"} flexDirection={["column","row"]} maxW  ={["100%","70%"]} justifyContent={"space-around"} alignItems={"center"}>
                <Box w={[350,"45%"]} display={"flex"} alignItems={"center"} justifyContent={"center"} h={"100%"} boxShadow='2xl'>
                    <img src={aboutimg} alt="" />
                </Box>

                <Box w={[350,"50%"]}  display={"flex"} justifyContent={"space-around"} flexDirection={"column"} h={"70%"}>
                    <Heading size={["2xl","3xl"]} color={"#0f0836"}>
                    I Create Products Not Just Art
                    </Heading>

                    <Text color={"gray.800"} fontWeight={"medium"}>
                    My name is Lakshman Gupta. I am a web designer and developer.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </Text>
                    <UnorderedList color={"gray.500"} fontSize={"1xl"}>
                        <ListItem>High Quality Service</ListItem>
                        <ListItem>Best Price in Marketplace.</ListItem>
                        <ListItem>Unique Design and Development.</ListItem>
                    </UnorderedList>

                    <Button variant={"ghost"} bg={"red.500"} w={"30%"}>
                        Download CV
                    </Button>
                </Box>
                </Container>

            </Container>



            <Container h={["","60vh"]} maxW={"100%"} bgColor={"#ebe9e8"}>
                <Box h={"40%"} display={"flex"} alignItems={"center"} justifyContent={"center"} mt={[3,""]}>
                    <Heading size={["2xl","4xl"]}>
                        My skills
                    </Heading>
                </Box>

                <Box h={"60%"} display={"flex"} flexDirection={["column","row"]} alignItems={"center"} justifyContent={"space-around"} mt={[3,""]}>
                    <Box borderRadius={"100%"} h={"200px"} w={"200px"} display={"flex"} alignItems={"center"} justifyContent={"center"} bgColor={"whiteAlpha.900"} mt={[3,""]}>
                        <CircularProgress value={90}  color='orange.400' size={"180px"} thickness={"5px"} >
                                <CircularProgressLabel>90%</CircularProgressLabel>
                        </CircularProgress>
                    </Box>
                    <Box borderRadius={"100%"} h={"200px"} w={"200px"} display={"flex"} alignItems={"center"} justifyContent={"center"} bgColor={"whiteAlpha.900"} mt={[3,""]}>
                    <CircularProgress value={80} color='blue.400' size={"180px"} thickness={"5px"}>
                                <CircularProgressLabel>80%</CircularProgressLabel>
                        </CircularProgress>
                    </Box>
                    <Box borderRadius={"100%"} h={"200px"} w={"200px"} display={"flex"} alignItems={"center"} justifyContent={"center"} bgColor={"whiteAlpha.900"} mt={[3,""]}>
                    <CircularProgress value={65} color='red.400' size={"180px"} thickness={"5px"}>
                                <CircularProgressLabel>65%</CircularProgressLabel>
                        </CircularProgress>
                    </Box>
                    <Box borderRadius={"100%"} h={"200px"} w={"200px"} display={"flex"} alignItems={"center"} justifyContent={"center"} bgColor={"whiteAlpha.900"} mt={[3,""]}>
                    <CircularProgress value={47} color='green.400' size={"180px"} thickness={"5px"}>
                                <CircularProgressLabel>47%</CircularProgressLabel>
                        </CircularProgress>
                    </Box>

                </Box>

            </Container>




            <Container h={["","70vh"]} maxW={"100%"} bgColor={"#bebfbd"} mt={[3,""]}>
                <Container color={"blackAlpha.800"} maxW={["100%","70%"]} h={"100%"} >
                <Box h={"8%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Heading size={["2xl","4xl"]}>
                        Services
                    </Heading>
                </Box>

            <Service/>
                </Container>
            </Container>


        </Container>

    </Container>
  )
}

export default About

export const HomeBanner = ({heading,home, path}:any)=>{
    return(
        <Container h={"40vh"} color={"white"} bg={"#0f0836"} maxW={["100vw","100%"]}
         display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
            <Box >
            <Heading>
               {heading}
            </Heading>
            </Box>

            <Box>
                <Text>
                    {home} / {path}
                </Text>
            </Box>
        </Container>
    )
}