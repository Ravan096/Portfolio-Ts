import {
  Box, Button, Container, Flex, FormControl, FormLabel, HStack, Heading,
  Image,
  Input,
  Stack,
  Text, Textarea, VStack,
  useBreakpointValue
} from '@chakra-ui/react';
import { motion } from "framer-motion";
// import { useState } from 'react';
import { Helmet } from "react-helmet";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";



const Home = () => {
  // const [showPassword, setShowPassword] = useState(false);
  const skills = [
    { name: "React", value: 95, color: "teal.400" },
    { name: "Node Js", value: 90, color: "red.400" },
    { name: "Angular", value: 85, color: "yellow.400" },
    { name: "Html", value: 95, color: "gray.700" },
    { name: "Javascript", value: 90, color: "red.500" },
    { name: "MongoDB", value: 85, color: "blue.400" },
  ];

  const certificates = [
    { name: "ReactJs", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744889654/portfolio/reactCertificates_oh9ahs.png" },
    { name: "AZ-400", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744719789/portfolio/AZ-400_pispql.png" },
    { name: "AZ-204", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744719789/portfolio/AZ-400_pispql.png" },
    { name: "AZ-900", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744719789/portfolio/AZ-400_pispql.png" },
    { name: "DP-900", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744719789/portfolio/AZ-400_pispql.png" },
    { name: "PL-400", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744719789/portfolio/AZ-400_pispql.png" },
    { name: "PL-900", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744719789/portfolio/AZ-400_pispql.png" }
  ]
  const cv = "https://res.cloudinary.com/djcni3ioh/image/upload/v1738241564/Assets/DeveloperResume_vwo6tr.pdf";
  const fileName = 'myCV.pdf';
  const filePath = cv + fileName;

  const downloadFile = () => {
    console.log(cv);
    const a = document.createElement('a');
    a.href = filePath;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };


  // const [component, setComponent] = useState <JSX.Element>(<About/>);
  // const [compVal, setcompVal]= useState("");
  //   function changeComponent (e:any){
  //     setcompVal(e.target.id);
  //     console.log(compVal);


  //     if (compVal == "about") {
  //       setComponent(<About/>);
  //     }else if(compVal == "skill") {
  //       setComponent(<Skill/>);
  //     }else if(compVal == "service"){
  //         setComponent(<Service/>);
  //     }else if(compVal == "award"){
  //         setComponent(<Award/>);
  //     }else{
  //         setComponent(<SocilaMedia/>)
  //     }
  //   }
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <Stack bg={""}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="https://lakshmanportfolio2023.netlify.app/" />
      </Helmet>
      <Container maxW={"100%"} bg={"#F7F9FC"} h={"81vh"} display={"flex"} flexDirection={["column", "row"]}>
        <Box position={"relative"} width={["100%", "50%"]} height={["50%", "45%"]}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"space-around"}
          top={["20%", "30%"]}
          left={["0%", "10%"]}
        >

          <Heading as='h1' size={["2xl", "4xl"]} display={"flex"} color={"#1F2937"} >
            <motion.h1 {...animations.h1}>
              Hi, I Am <br /> Lakshman Gupta
            </motion.h1>

          </Heading>
          {/* <Heading as='h1' size={["2xl","4xl"]} display={"flex"} color={"whiteAlpha.900"} >
                I'am Lakshman Gupta
            </Heading> */}

          {/* <Text color={"white"} fontSize={["2xl","3xl"]} children="Full Stack Developer | Frontend Developer"/> */}
          <Text color={"#6B7280"} fontSize={["2xl", "3xl"]}>
            <Typewriter
              options={{
                strings: ["Frontend Developer", "A Designer", "Full Stack Developer"],
                autoStart: true,
                loop: true,
                cursor: "|",
              }}
            />
          </Text>
          <Box display={"flex"} width={["80%", "30%"]} justifyContent={"space-between"}>
            <Link to={"#"}><Box p={"3"} m={[0, 2]} border={"1px solid #E5E7EB"} borderRadius={"lg"}><FaFacebookF style={{ fontSize: "2.5rem", color: "#1F2937" }} /></Box></Link>
            <Link to={"#"}><Box p={"3"} m={[0, 2]} border={"1px solid #E5E7EB"} borderRadius={"lg"}><FaLinkedinIn style={{ fontSize: "2.5rem", color: "#1F2937" }} /></Box></Link>
            <Link to={"#"}><Box p={"3"} m={[0, 2]} border={"1px solid #E5E7EB"} borderRadius={"lg"}><FaInstagram style={{ fontSize: "2.5rem", color: "#1F2937" }} /></Box></Link>
          </Box>

          <Button bg={"#6366F1"} _hover={{ bg: "#4F46E5" }} color={"#FFFFFF"} onClick={downloadFile} mt={3}>Download CV <IoMdDownload /> </Button>
        </Box>
        <Box display={["none", "flex"]} sx={{ borderRadius: "100px" }} alignItems={"center"}>
          <img src={"https://res.cloudinary.com/djcni3ioh/image/upload/v1743766956/imgblack-removebg-preview_zlxin2.png"}
            style={{
              border: "2px solid #E5E7EB", borderRadius: "400px", objectFit: "contain", height: "", width: "100%", textAlign: "center"
            }} />
        </Box>
      </Container>





      <Container maxW={"100%"} h={["", "90vh"]} bg={""}>

        <Box py={10} px={5} maxW="container.lg" mx="auto">
          <Text
            fontSize="6xl"
            fontWeight="bold"
            textAlign="center"
            color="gray.200"
            position="absolute"
            top="5%"
            left="50%"
            transform="translateX(-50%)"
            zIndex="-1"
          >
            ABOUT
          </Text>

          <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="teal.500">
            ABOUT ME
          </Text>

          <Flex
            direction={useBreakpointValue({ base: "column", md: "row" })}
            align="center"
            justify="center"
            mt={10}
            gap={10}
          >
            {/* Profile Image */}
            <Image
              src={"https://res.cloudinary.com/djcni3ioh/image/upload/v1743766956/imgblack-removebg-preview_zlxin2.png"}
              alt="Profile Picture"
              boxSize="250px"
              borderRadius="full"
              objectFit="cover"
            />

            {/* Content Section */}
            <VStack align="start" spacing={4} maxW="lg">
              <Text fontSize="2xl" fontWeight="bold">
                Web Developer
              </Text>
              <Text color="gray.600">
                I'm a results-driven Web Developer with a passion for building responsive and user-friendly
                web applications. Skilled in React, JavaScript, and modern frontend frameworks, I excel at
                creating dynamic and scalable solutions. My experience includes social Media, E-Commerse & Client Projects,
                showcasing my ability to develop high-performance websites and seamless user experiences.
              </Text>

              {/* Details */}
              <HStack spacing={10} wrap="wrap">
                <VStack align="start" spacing={2}>
                  <Text fontWeight="bold">Name: <Text as="span" fontWeight="normal">Lakshman Gupta</Text></Text>
                  <Text fontWeight="bold">Experience: <Text as="span" fontWeight="normal">3+ years as Associate Developer</Text></Text>
                  <Text fontWeight="bold">Email: <Text as="span" fontWeight="normal">guptalakshman96.lg@gmail.com</Text></Text>
                  <Text fontWeight="bold">Freelance: <Text as="span" fontWeight="normal">Available</Text></Text>
                </VStack>
                <VStack align="start" spacing={2}>
                  <Text fontWeight="bold">Degree: <Text as="span" fontWeight="normal">B.Tech. Computer Science and Engineering (CSE)</Text></Text>
                  <Text fontWeight="bold">Phone: <Text as="span" fontWeight="normal">8948405832</Text></Text>
                  <Text fontWeight="bold">Address: <Text as="span" fontWeight="normal">Mohali Punjab | 160071</Text></Text>
                </VStack>
              </HStack>

              {/* Buttons */}
              <HStack mt={5}>
                <Button color={"#6366F1"} variant="outline" _hover={{color:"#4F46E5"}}>Hire Me</Button>
                <Button color={"#FFFFFF"} bg={"#6366F1"} _hover={{bg:"#4F46E5"}}>Learn More</Button>
              </HStack>
            </VStack>
          </Flex>
        </Box>

      </Container>

      {/* skill sections */}
      <Container maxW={"100%"} minH={["", "50vh"]} bg={""} position={"relative"} py={16}>

        <Text
          fontSize={["6xl", "8xl"]}
          fontWeight="extrabold"
          opacity={0.05}
          position="absolute"
          top={["16.5%", "22"]}
          left="50%"
          transform="translate(-50%, -50%)"
          whiteSpace="nowrap"
          zIndex={0}
        >
          SKILLS
        </Text>
        <VStack spacing={6} p={6} w={["", "80%"]} mx="auto" position={"relative"} zIndex={1}>

          <Text fontSize="2xl" fontWeight="bold" color="teal.500">
            MY SKILLS
          </Text>
          <Box display={"flex"} flexWrap={"wrap"} w={"100%"} gap={4}>
            {skills.map((skill, index) => (
              <Box key={index} w={["100%", "100%", "48%"]} mt={1}>
                <SkillBar key={index} {...skill} />
              </Box>
            ))}
          </Box>
        </VStack>
      </Container>



      {/* Cetifications sections */}
      <Container maxW={"100%"} minH={["", "50vh"]} bg={""} position={"relative"} py={16}>

        <Text
          fontSize={["5xl", "8xl"]}
          fontWeight="extrabold"
          opacity={0.05}
          position="absolute"
          top={["16.5%", "22"]}
          left="50%"
          transform="translate(-50%, -50%)"
          whiteSpace="nowrap"
          zIndex={0}
        >
          CERTIFICATIONS
        </Text>
        <VStack spacing={6} p={[0, 6]} w={["", "80%"]} mx="auto" position={"relative"} zIndex={1}>

          <Text fontSize="2xl" fontWeight="bold" color="teal.500">
            MY CERTIFICATES
          </Text>
          <Box display={"flex"} flexWrap={"wrap"} w={"100%"} gap={4}>
            {certificates.map((item, index) => (
              <Box key={index} w={["100%", "100%", "48%"]} mt={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Image
                  src={item.url} border={"1px solid gray"} rounded={"3xl"} objectFit={"contain"} />
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  {item.name}
                </Text>
              </Box>
            ))}
          </Box>
        </VStack>
      </Container>




      {/* portfolio section */}





      <Container maxW={"100%"} h={["", "90vh"]} bg={"#F7F9FC"}>

        <Container maxW={["100%", "70%"]} h={"100%"}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"} h={"20vh"}>
            <Heading fontSize={["3xl", "7xl"]} color={"#1F2937"}>
              Let’s Talk
            </Heading>
          </Box>

          <Container maxW={"100%"} display={"flex"} flexDirection={["column", "row"]}>

            <Flex
              direction={{ base: "column-reverse", md: "row" }}
              maxW="6xl"
              mx="auto"
              gap={8}>
              <Box
                flex={1}
                borderRadius="lg"
                p={[0,6]}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center">
                <Image
                  src="https://res.cloudinary.com/djcni3ioh/image/upload/v1744889654/portfolio/fae1fdb810ce1939fd9af8f4f0cd07c495648ae2-1920x1440_skceif.webp"
                  alt="Setup"
                  borderRadius="md"
                  objectFit="cover"
                  mb={4}
                />
                <VStack spacing={2} align="start" w="100%">
                  <Text fontWeight="bold" color="purple.400">
                    Test
                  </Text>
                  <Text>
                    <b>Email:</b> guptalakshman96.lg@gmail.com
                  </Text>
                  <Text>
                    <b>Address:</b> Uttar Pradesh, India
                  </Text>
                  <Text>
                    <b>Working Hours:</b> 9:00 AM - 1:00 AM
                  </Text>
                  {/* Social icons (optional) */}
                </VStack>
              </Box>

              {/* RIGHT FORM SECTION */}
              <Box flex={1}>
                <Text textAlign="center" mb={4}>
                  Leave your email and I will get back to you within 24 hours
                </Text>
                <VStack spacing={4}>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Lakshman Gupta" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="guptalakshman96.lg@gmail.com"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Subject</FormLabel>
                    <Input placeholder="Want to build a website" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      placeholder="Looking for a expert software developer skilled in React and Next.js for a specific project"
                    />
                  </FormControl>
                  <Button bg={"#6366F1"} _hover={{bg:"#4F46E5"}} width="100%" color={"#FFFFFF"}>
                    Submit ➤
                  </Button>
                </VStack>
              </Box>
            </Flex>





          </Container>
        </Container>
      </Container>




      {/* <Container maxW={"100%"} h={["", "80vh"]} bg={"#0f0836"}>
        <Container maxW={["100%", "70%"]} h={["15vh", "30%"]} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Heading color={"whiteAlpha.900"} fontSize={["2.5rem", "6rem"]}>
            Latest News
          </Heading>
        </Container>

        <Container maxW={["100%", "70%"]} display={"flex"} justifyContent={"space-around"} flexDirection={["column", "row"]} >

          <Box color={"white"} w={["100%", "29%"]} h={"100%"}>
            <img src={"https://res.cloudinary.com/djcni3ioh/image/upload/v1744007271/portfolio/1.8db7cac3_dcxvrh.jpg"} alt="" />
            <Text mt={[2, 0]}>
              By Admin. Nov 24, 2020
            </Text>
            <Text fontSize={["2xl", "3xl"]} fontWeight={"bold"}>
              Helpful tips for become a successful designer
            </Text>
            <Link to={"#"}>
              <Text _hover={{ color: "crimson", transition: "all 0.3s" }}>Read More....</Text>
            </Link>
          </Box>
          <Box color={"white"} w={["100%", "29%"]} h={"100%"} mt={[2, 0]}>
            <img src={"https://res.cloudinary.com/djcni3ioh/image/upload/v1744007271/portfolio/2.35c9abda_uahuyw.jpg"} alt="" />
            <Text mt={[2, 0]}>
              By Admin. Nov 24, 2020
            </Text>
            <Text fontSize={["2xl", "3xl"]} fontWeight={"bold"}>
              Helpful tips for become a successful designer
            </Text>
            <Link to={"#"}>
              <Text _hover={{ color: "crimson", transition: "all 0.3s" }}>Read More....</Text>
            </Link>
          </Box>
          <Box color={"white"} w={["100%", "29%"]} h={"100%"} mt={[2, 0]}>
            <img src={"https://res.cloudinary.com/djcni3ioh/image/upload/v1744007271/portfolio/3.43af2d95_gvkotj.jpg"} alt="" />
            <Text mt={[2, 0]}>
              By Admin. Nov 24, 2020
            </Text>
            <Text fontSize={["2xl", "3xl"]} fontWeight={"bold"}>
              Helpful tips for become a successful designer
            </Text>
            <Link to={"#"}>
              <Text _hover={{ color: "crimson", transition: "all 0.3s" }}>Read More....</Text>
            </Link>
          </Box>

        </Container>


      </Container> */}



    </Stack>
  )
}

export default Home



// const About = () => {

//   return (
//     <Container display={"flex"} maxW={"100%"} h={"100%"} alignItems={"center"} flexDirection={["column", "row"]}>
//       <Box w={["95vw", "50%"]} h={["100%", "70%"]}>
//         <img src={abouthero} alt="" />
//       </Box>
//       <Box w={["95vw", "50%"]} h={["100%", "70%"]} color={"whiteAlpha.900"} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} justifyContent={"space-around"}>
//         <Heading size={["2xl", "3xl"]}>
//           I created products not just art
//         </Heading>

//         <Text>
//           My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
//         </Text>
//         <Button variant={"outline"} color={"whiteAlpha.800"} border={"1px solid crimson"} _hover={{ color: "black", bgColor: "red", border: "none" }}>
//           Lets Talk
//         </Button>
//       </Box>
//     </Container>
//   )
// }


// const Skill = () => {
//   return (
//     <Container display={"flex"} maxW={["100vw", "100%"]} h={"100%"} flexWrap={["wrap", "wrap"]}
//       alignContent={"center"} justifyContent={"center"} flexDirection={["row", "row"]}>
//       <Box borderBottom={"2px solid #f03737"} h={["", "40%"]} w={["100%", "30%"]} color={"whiteAlpha.900"} m={2}>
//         <Heading fontSize={["3xl", "7rem"]} color={"#f03737"}>
//           95%
//         </Heading>
//         <Text fontSize={["2xl", "3xl"]}>
//           Project Management
//         </Text>
//       </Box>
//       <Box borderBottom={"2px solid #0eb02e"} h={["", "40%"]} w={["100%", "30%"]} color={"whiteAlpha.900"} m={2}>
//         <Heading fontSize={["3xl", "7rem"]} color={"#0eb02e"}>
//           70%
//         </Heading>
//         <Text fontSize={["2xl", "3xl"]}>
//           Communication Skills
//         </Text>
//       </Box>
//       <Box borderBottom={"2px solid #c79f1c"} h={["", "40%"]} w={["100%", "30%"]} color={"whiteAlpha.900"} m={2}>
//         <Heading fontSize={["3xl", "7rem"]} color={"#c79f1c"}>
//           65%
//         </Heading>
//         <Text fontSize={["2xl", "3xl"]}>
//           Problem Solving
//         </Text>
//       </Box>
//       <Box borderBottom={"2px solid #e5e81e"} h={["", "40%"]} w={["100%", "30%"]} color={"whiteAlpha.900"} m={2}>
//         <Heading fontSize={["3xl", "7rem"]} color={"#e5e81e"}>
//           55%
//         </Heading>
//         <Text fontSize={["2xl", "3xl"]}>
//           Analitical Ability
//         </Text>
//       </Box>
//       <Box borderBottom={"2px solid #c20e4a"} h={["", "40%"]} w={["100%", "30%"]} color={"whiteAlpha.900"} m={2}>
//         <Heading fontSize={["3xl", "7rem"]} color={"#c20e4a"}>
//           43%
//         </Heading>
//         <Text fontSize={["2xl", "3xl"]}>
//           Organization
//         </Text>
//       </Box>
//       <Box borderBottom={"2px solid #25a9b3"} h={["", "40%"]} w={["100%", "30%"]} color={"whiteAlpha.900"} m={2}>
//         <Heading fontSize={["3xl", "7rem"]} color={"#25a9b3"}>
//           82%
//         </Heading>
//         <Text fontSize={["2xl", "3xl"]}>
//           Creativity
//         </Text>
//       </Box>

//     </Container>
//   )
// }


export const Service = () => {
  return (
    <Container display={"flex"} maxW={"100%"} h={"100%"} flexWrap={["nowrap", "wrap"]} flexDirection={["column", "row"]}>
      <Box h={["50vh", "50%"]} w={["100%", "50%"]} color={"whiteAlpha.900"} display={"flex"}
        alignItems={["flex-start", "center"]} flexDirection={["column", "row"]} mt={2}>
        <Box >
          <img src={"https://res.cloudinary.com/djcni3ioh/image/upload/v1744007267/portfolio/shape1_memhdg.png"} alt="" />
        </Box>
        <Box>
          <Heading fontSize={["3rem", "3rem"]} color={"#f03737"}>
            Product design
          </Heading>
          <Text>
            consectetur adipiscing elit, eiusmod tempor incididunt labore.
          </Text>
        </Box>
      </Box>
      <Box h={["50vh", "50%"]} w={["100%", "50%"]} color={"whiteAlpha.900"} display={"flex"}
        alignItems={["flex-start", "center"]} flexDirection={["column", "row"]} mt={2}>
        <Box>
          <img src={"https://res.cloudinary.com/djcni3ioh/image/upload/v1744007267/portfolio/shape2_pvczra.png"} alt="" />
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
      <Box h={["50vh", "50%"]} w={["100%", "50%"]} color={"whiteAlpha.900"} display={"flex"}
        alignItems={["flex-start", "center"]} flexDirection={["column", "row"]} mt={2}>
        <Box>
          <img src={"https://res.cloudinary.com/djcni3ioh/image/upload/v1744007268/portfolio/shape-3_vspw0f.png"} alt="" />

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
      <Box h={["50vh", "50%"]} w={["100%", "50%"]} color={"whiteAlpha.900"} display={"flex"}
        alignItems={["flex-start", "center"]} flexDirection={["column", "row"]} mt={2}>
        <Box>
          <img src={"https://res.cloudinary.com/djcni3ioh/image/upload/v1744007268/portfolio/shape-4_jhn9v8.png"} alt="" />

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

// const SocilaMedia = () => {
//   return (
//     <Container display={"flex"} flexDirection={["column", "row"]} maxW={"100%"} h={"100%"} flexWrap={["nowrap", "wrap"]} >
//       <Box h={"40%"} w={["100%", "30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
//         <FaFacebookF style={{ fontSize: "5rem" }} />
//         <Heading fontSize={"2rem"} color={"#f03737"}>
//           Facebook
//         </Heading>
//       </Box>
//       <Box h={"40%"} w={["100%", "30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
//         <FaInstagram style={{ fontSize: "5rem" }} />
//         <Heading fontSize={"2rem"} color={"#0eb02e"}>
//           Instagram
//         </Heading>
//       </Box>
//       <Box h={"40%"} w={["100%", "30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
//         <FaTwitter style={{ fontSize: "5rem" }} />
//         <Heading fontSize={"2rem"} color={"#c79f1c"}>
//           Twitter
//         </Heading>
//       </Box>
//       <Box h={"40%"} w={["100%", "30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
//         <FaDribbble style={{ fontSize: "5rem" }} />
//         <Heading fontSize={"2rem"} color={"#e5e81e"}>
//           Dribble
//         </Heading>
//       </Box>
//       <Box h={"40%"} w={["100%", "30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
//         <FaLinkedinIn style={{ fontSize: "5rem" }} />
//         <Heading fontSize={"2rem"} color={"#e5e81e"}>
//           Linkedin
//         </Heading>
//       </Box>
//       <Box h={"40%"} w={["100%", "30%"]} m={4} color={"whiteAlpha.900"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
//         <FaBehance style={{ fontSize: "5rem" }} />
//         <Heading fontSize={"2rem"} color={"#e5e81e"}>
//           Behance
//         </Heading>
//       </Box>
//     </Container>
//   )
// }


// const Award = () => {
//   return (
//     <Heading color={"whiteAlpha.800"}>
//       In Progress.....
//       Comming soon!
//     </Heading>
//   )
// }

const SkillBar = ({ name, value, color }: any) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <VStack ref={ref} align="start" w="100%">
      <HStack justify="space-between" w="100%">
        <Text fontWeight="bold">{name}</Text>
        <Text>{value}%</Text>
      </HStack>
      <Box w="100%" bg="gray.200" borderRadius="md">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: inView ? `${value}%` : "0%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Box h="15px" bg={color} borderRadius="md" />
        </motion.div>
      </Box>
    </VStack>
  );
};