import { Box, Button, Container,Heading,Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";


const PageNotFound = () => {

  return (
    <Container bgColor={"#000000"} h={"100%"} maxW={"100%"} border={"1px solid #000000"}>
       <Helmet>
                <meta charSet="utf-8" />
                <title>404 Not Found</title>
                <link rel="canonical" href="https://lakshmanportfolio2023.netlify.app/" />
            </Helmet>
        <Container maxH={"100%"} maxW={"100%"} display={"flex"} bgColor={"#000000"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} mt={10}>
        <Heading color={"whiteAlpha.900"} fontSize={"4xl"} mb={[5,2]}>
        The page you were looking for doesn't exist.
        </Heading>
        <Box bgColor={"black"} >
            <Image src={"https://res.cloudinary.com/djcni3ioh/image/upload/v1744007265/portfolio/gfg_wstxkh.jpg"} objectFit={"cover"} maxW={"100%"} maxH={"100%"}/>
            <div>

            </div>
        </Box>
        <Link to={"/contact"}>
        <Button backgroundColor={"#cd4ee3"} fontSize={"2xl"} color={"whiteAlpha.900"} textTransform={"uppercase"}
                letterSpacing={"3px"} borderRadius={"50px"} height={"50px"} _hover={{color:"black", backgroundColor:"white", transition:"all 0.5s"}} mt={2} mb={4}>
            Contact Us
        </Button>
        </Link>
        </Container>
    </Container>
   
  )
}

export default PageNotFound



