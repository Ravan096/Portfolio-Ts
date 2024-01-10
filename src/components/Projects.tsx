import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import projectimg1 from "../assets/flighlocal-cover-image.jpg";
import projectimg2 from "../assets/ailabgranada.com-poster.jpg";
import projectimg3 from "../assets/tryotel-b2c-cover.jpg";
import projectimg4 from "../assets/kananaskis-nordic-spa-poster.jpg";
import projectimg5 from "../assets/tapy-co-poster.jpg";
import projectimg6 from "../assets/khora-urban-thinkers-poster-r.jpg";

const Projects = () => {
  return (
    <Box h={["","120vh"]} w={"100%"} bgColor={"#24262B"}>
      <Container maxW={"100%"} h={"100%"}>

        <Box textAlign={"center"} boxSize={"border-box"} h={["","10%"]} w={["100%","80%"]} margin={"auto"}>
          <Heading color={"whiteAlpha.800"} size={["2xl","4xl"]}>
            My Work
          </Heading>
        </Box>

        <Box  h={"85%"} display={"flex"} flexDirection={["column", "row"]} justifyContent={"space-around"}
        w={["100%","80%"]} margin={"auto"} flexWrap={"wrap"}>

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




const ProjectCard = ({img,title,heading}:any)=> {
  return(
  <Box w={["","20vw"]} h={["","45vh"]} mt={[2,0]} mb={[2,0]}>

    <Box _hover={{cursor:"pointer"}} overflow={"hidden"}>
    <Image src={img} alt={title} _hover={{cursor:"pointer", transform:"scale(1.09)", transition:"ease-in-out 0.3s"}}/>
    </Box>
    <Box h={"35%"} display={"flex"} alignItems={["flex-start","center"]} flexDirection={"column"} justifyContent={"center"}>
      <Heading color={"whiteAlpha.900"} size={["md","lg"]} fontWeight={"medium"}  noOfLines={1}>
        {heading}
      </Heading>

      <Text color={"whiteAlpha.900"} fontWeight={"bold"} textColor={"grey"}>
        {title}
      </Text>
    </Box>

  </Box>
  )
}