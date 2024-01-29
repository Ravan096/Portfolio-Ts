import { Container, Text,Heading, Box, Button , Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
// import {ColorModeSwitcher} from '../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri';
import { FaShoppingCart } from "react-icons/fa";



const LinkButton=({url='/', title="Home"})=>{
    return(
    <Link to={url} ><Button bg={"#0f0836"} color={"whiteAlpha.900"}>{title}</Button></Link> 
    )
  }

const Header = () => {
    const {isOpen, onClose, onOpen}= useDisclosure();
    const IsAuthenticated= false;
    const user={
        role:"admin",
    };
    const logoutHandler=()=>{
        console.log("logout");
    }

    const viewWidth = window.innerWidth;
  return (

    <>{
        viewWidth>500?
   <Container maxW={"100%"} display={'flex'} alignItems={"center"} justifyContent={"space-around"} bg={"black"} height={"7vh"} position={"sticky"} top={0} zIndex={1000}>
    <Box w={"25%"}  display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Heading color={"whiteAlpha.800"}>Lakshman.</Heading>
    </Box>

    <Box w={"50%"} fontWeight={"bold"} color={"whiteAlpha.800"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Link to={'/'}><Text color={"crimson"} children={"Home"} p={2} _hover={{color:"crimson", transition:"all 0.3s", borderBottom:"2px solid red",borderRadius:"50px"}}/></Link>
        <Link to={'/about'}><Text children={"About"} p={2} _hover={{color:"crimson", transition:"all 0.3s", borderBottom:"2px solid red",borderRadius:"50px"}}/></Link>
        <Link to={'/cart'}><Text children={"Ecommerse"}  p={2} _hover={{color:"crimson", transition:"all 0.3s" , borderBottom:"2px solid red",borderRadius:"50px"}}/></Link>
        <Link to={'/project'}><Text children={"Projects"}  p={2} _hover={{color:"crimson", transition:"all 0.3s" , borderBottom:"2px solid red",borderRadius:"50px"}}/></Link>
        <Link to={'/blog'}><Text children={"Blog"}  p={2} _hover={{color:"crimson", transition:"all 0.3s", borderBottom:"2px solid red",borderRadius:"50px"}}/></Link>
        <Link to={'/contact'}><Text children={"Contact"}  p={2} _hover={{color:"crimson", transition:"all 0.3s", borderBottom:"2px solid red",borderRadius:"50px"}}/></Link>
        <Link to={'/pricing'}><Text  p={2} _hover={{color:"crimson", transition:"all 0.3s", borderBottom:"2px solid red",borderRadius:"50px"}}> Pricing</Text></Link>
        <Link to={'/cartitem'}><Text  p={2} _hover={{color:"crimson", transition:"all 0.3s", borderBottom:"2px solid red",borderRadius:"50px"}}> <FaShoppingCart/></Text></Link>
    </Box>
    <Box w={"25%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
    <Link to={"/contact"}>
        <Button bg={"#162857"} variant={"outline"} color={"whiteAlpha.800"} border={"1px solid crimson"} _hover={{color:"black", bgColor:"red",border:"none", transition:"all 0.3s"}}>
            Let's Talk
        </Button>
            </Link>
    </Box>

    </Container>
    :






<>

    {/* <ColorModeSwitcher/> */}
    <Button colorScheme={'purple'} width={'12'} height={'12'}
    rounded={'full'} position='fixed' left={'6'} top='6' onClick={onOpen}>
        <RiMenu5Fill/> 
    </Button>
    
    <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(2px)'}/>
        <DrawerContent bg={"#0f0836"}>
            <DrawerHeader borderBottomWidth={'1px'} color={"whiteAlpha.900"}>Portfolio</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'} spacing='4' onClick={onClose}>
                    <LinkButton url='/' title='Home'/>
                    <LinkButton url='/about' title='About' />
                    <LinkButton url='/cart' title='Ecommerse' />
                    <LinkButton url='/project' title='Projects' />
                    <LinkButton url='/blog' title='Blog' />
                    <LinkButton url='/contact' title='Contact' />
                    <LinkButton url={'/cartitem'} title={"Cart"} />
                    <LinkButton url={'/pricing'} title={"Pricing"} />

                    <HStack justifyContent={'space-evenly'}
                    position='absolute' bottom={'2rem'}
                     width='80%'>
                        {
                            IsAuthenticated?(
                            <>
                            <VStack>
                                <HStack>
                                <Link to={'/profile'}>
                                <Button variant={'ghost'} colorScheme={'purple'}>Profile</Button>
                            </Link>
                            <Button variant={'ghost'} onClick={logoutHandler}>
                                <RiLogoutBoxLine/>Logout
                            </Button>
                                </HStack>
                                {
                                    user && user.role==="admin" && <Link to={'/admin/dashboard'}>
                                    <Button colorScheme={'purple'}
                                    variant={'ghost'}><RiDashboardFill style={{
                                        margin:"4px"
                                    }}/> Dashboard</Button>
                                    </Link>
                                }
                            </VStack>
                            </>
                            ):(
                            <>
                            <Link to={'/login'}>
                                <Button colorScheme={'green'}>Login</Button>
                            </Link>
                            <p>OR</p>
                            <Link to={'/signup'}>
                                <Button colorScheme={'red'}>SignUp</Button>
                            </Link>
                            </>
                            )
                        }

                    </HStack>
                </VStack>
            </DrawerBody>
        </DrawerContent>

    </Drawer>
    </>
}
    </>

     
  )
}

export default Header