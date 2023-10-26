import { Box, Container, Text} from '@chakra-ui/react';
import '../styles/loader.css';

const Loader = () => {
  

  return (
    <Container h={"90vh"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
        <Text>Loading...</Text>
        <Box className='progress'>

        </Box>
    </Container>
  )
}

export default Loader