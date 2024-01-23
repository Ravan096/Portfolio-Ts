import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import projectimg1 from "../assets/flighlocal-cover-image.jpg";
import projectimg2 from "../assets/ailabgranada.com-poster.jpg";
import projectimg3 from "../assets/tryotel-b2c-cover.jpg";
import projectimg4 from "../assets/kananaskis-nordic-spa-poster.jpg";
import projectimg5 from "../assets/tapy-co-poster.jpg";
import projectimg6 from "../assets/khora-urban-thinkers-poster-r.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const Projects = () => {
  return (
    <Box h={["","245vh"]} w={"100%"} bgColor={"#24262B"}>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Projects</title>
                <link rel="canonical" href="https://lakshmanportfolio2023.netlify.app/" />
            </Helmet>
      <Container maxW={"100%"} h={"100%"}>

        <Box textAlign={"center"} boxSize={"border-box"} h={["","10%"]} w={["100%","80%"]} margin={"auto"}>
          <Heading color={"whiteAlpha.800"} size={["2xl","4xl"]}>
            My Work
          </Heading>
        </Box>

        <Box  h={"85%"} display={"flex"} flexDirection={["column", "row"]} justifyContent={"space-around"}
        w={["100%","80%"]} margin={"auto"} flexWrap={"wrap"}>

          <ProjectCard img={projectimg1} title={"Web Development"} url={"/cart"} heading={"Ecommerse Sample"}/>
          <ProjectCard img={projectimg2} title={"Web Development"} url={"https://cryptography-net.netlify.app/"} heading={"Real Time Crypto Currency"}/>
          <ProjectCard img={projectimg3} title={"Web Development"} url={"/"} heading={"Portfolio"}/>
          <ProjectCard img={projectimg4} title={"Web Development"} url={"https://demo-chat-app0.netlify.app"} heading={"Real Time Chat App"}/>
          <ProjectCard img={projectimg5} title={"Web Development"} url={"https://carthandler.netlify.app"} heading={"Cart Handler"}/>
          <ProjectCard img={projectimg6} title={"Web Development"} heading={"Walker IP Pty Ltd"}/>
          <ProjectCard img={projectimg1} title={"Web Development"} heading={"Flight Local (B2B Travel Solution"}/>
          <ProjectCard img={projectimg2} title={"Web Development"} heading={"Al Lab Granada"}/>
          <ProjectCard img={projectimg3} title={"Web Development"} heading={"Tryotel Web (B2C)"}/>
          <ProjectCard img={projectimg4} title={"Web Development"} heading={"Kanaskis Nodic Spa Web"}/>
          <ProjectCard img={projectimg5} title={"Web Development"} heading={"A Higher Thought"}/>
          <ProjectCard img={projectimg6} title={"Web Development"} heading={"Walker IP Pty Ltd"}/>
        </Box>


      </Container>

    </Box>
  )
}

export default Projects




const ProjectCard = ({img,title,heading,url}:any)=> {

  return(
  <Box w={["","20vw"]} h={["","50vh"]} mt={[2,0]} mb={[3,0]} className="card" boxSizing={"border-box"} >

    <Box _hover={{cursor:"pointer"}} overflow={"hidden"} h={"60%"}>
    <Image src={img} alt={title} _hover={{cursor:"pointer", transform:"scale(1.09)", transition:"ease-in-out 0.3s"}}/>
    </Box>
    <Box h={"30%"} display={"flex"} alignItems={["flex-start","center"]} flexDirection={"column"} justifyContent={"center"} mt={[2,0]} >
      <Heading color={"whiteAlpha.900"} size={["md","lg"]} fontWeight={"medium"}  noOfLines={1}>
        {heading}
      </Heading>

      <Text color={"whiteAlpha.900"} fontWeight={"bold"} textColor={"grey"}>
        {title}
      </Text>
    </Box>
    <Box h={["","10%"]}>
      <Link to={url} target="_blank">
      <Button colorScheme="crimson" color={"whiteAlpha.800"} bgColor={"crimson"}
            w={'full'}
            size={'lg'}
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: 'lg'}}>
        <Text mr={2}>View Demo</Text> <FaExternalLinkAlt />
      </Button>
      </Link>
    </Box>

  </Box>
  )
}