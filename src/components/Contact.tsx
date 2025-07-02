import { Helmet } from "react-helmet";


import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Image, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import { HomeBanner } from './About';

const Contact = () => {
  return (
    <Container maxW={"full"} h={""}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="https://lakshmanportfolio2023.netlify.app/" />
      </Helmet>
      <HomeBanner heading={"Contact"} home={"Home"} path={"Contact"} />


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
                p={[0, 6]}
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
                  <Button bg={"#6366F1"} _hover={{ bg: "#4F46E5" }} width="100%" color={"#FFFFFF"}>
                    Submit ➤
                  </Button>
                </VStack>
              </Box>
            </Flex>





          </Container>
        </Container>
      </Container>


    </Container>
  )
}

export default Contact