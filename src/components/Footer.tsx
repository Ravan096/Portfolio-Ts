import { Container,Box,Heading,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {FaFacebookF,FaInstagram,FaGithub} from 'react-icons/fa';


const Footer = () => {
  
  return (
    <Container maxW={"100%"} bg={"#F3F4F6"} h={"30vh"}>
        <Container maxW={["100%","70%"]} h={"90%"} display={"flex"} flexDirection={["column","row"]} justifyContent={["space-around",""]}>
        <Box w={["100%","25%"]}  display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Heading color={"#6B7280"}>Lakshman.</Heading>
    </Box>

    <Box w={["100%","40%"]} fontWeight={"bold"} color={"#1F2937"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Link to={'/about'}><Text children={"About"} _hover={{color:"#6366F1",transition:"all 0.3s"}}/></Link>
        <Link to={'/portfolio'}><Text children={"Portfolio"} _hover={{color:"#6366F1",transition:"all 0.3s"}}/></Link>
        <Link to={'/blog'}><Text children={"Blog"} _hover={{color:"#6366F1",transition:"all 0.3s"}}/></Link>
        <Link to={'/contact'}><Text children={"Contact"} _hover={{color:"#6366F1",transition:"all 0.3s"}}/></Link>
    </Box>
    <Box w={["100%","35%"]} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
        <Box border={"1px solid #E5E7EB"} p={"2vh"} borderRadius={"full"}>
        <FaFacebookF style={{fontSize:"3rem", color:"#1F2937"}}/>
        </Box>
        <Box border={"1px solid #E5E7EB"} p={"2vh"} borderRadius={"full"} onClick={()=> window.open("https://github.com/Ravan096","_blank")}>
        <FaGithub style={{fontSize:"3rem" , color:"#1F2937"}}/>
        </Box>
        <Box border={"1px solid #E5E7EB"} p={"2vh"} borderRadius={"full"}>
        <FaInstagram style={{fontSize:"3rem" , color:"#1F2937"}}/>
        </Box>
    </Box>


        </Container>

        <Text color={"#6B7280"} textAlign={"center"}>
        © 2023 Lakshman. all rights reserved
        </Text>

    </Container>
  )
}

export default Footer