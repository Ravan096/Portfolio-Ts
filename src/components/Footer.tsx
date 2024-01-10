import { Container,Box,Heading,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa';


const Footer = () => {
  
  return (
    <Container maxW={"100%"} bg={"#2b264a"} h={"30vh"}>
        <Container maxW={["100%","70%"]} h={"90%"} display={"flex"} flexDirection={["column","row"]} justifyContent={["space-around",""]}>
        <Box w={["100%","25%"]}  display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Heading color={"whiteAlpha.800"}>Lakshman.</Heading>
    </Box>

    <Box w={["100%","40%"]} fontWeight={"bold"} color={"whiteAlpha.800"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Link to={'/about'}><Text children={"About"} _hover={{color:"crimson",transition:"all 0.3s"}}/></Link>
        <Link to={'/portfolio'}><Text children={"Portfolio"} _hover={{color:"crimson",transition:"all 0.3s"}}/></Link>
        <Link to={'/blog'}><Text children={"Blog"} _hover={{color:"crimson",transition:"all 0.3s"}}/></Link>
        <Link to={'/contact'}><Text children={"Contact"} _hover={{color:"crimson",transition:"all 0.3s"}}/></Link>
    </Box>
    <Box w={["100%","35%"]} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
        <Box border={"1px solid #206da8"} p={"2vh"} borderRadius={"full"}>
        <FaFacebookF style={{fontSize:"3rem", color:"white"}}/>
        </Box>
        <Box border={"1px solid #206da8"} p={"2vh"} borderRadius={"full"}>
        <FaTwitter style={{fontSize:"3rem" , color:"white"}}/>
        </Box>
        <Box border={"1px solid #206da8"} p={"2vh"} borderRadius={"full"}>
        <FaInstagram style={{fontSize:"3rem" , color:"white"}}/>
        </Box>
    </Box>


        </Container>

        <Text color={"whiteAlpha.900"} textAlign={"center"}>
        © 2023 Lakshman. all rights reserved
        </Text>

    </Container>
  )
}

export default Footer