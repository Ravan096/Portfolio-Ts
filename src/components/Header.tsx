import { Container, Text,Heading, Box, Button , Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
// import {ColorModeSwitcher} from '../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri';
import { FaShoppingCart } from "react-icons/fa";



const LinkButton=({url='/', title="Home"})=>{
    return(
    <Link to={url} ><Button variant={'link'} _hover={{color:"#6366F1s"}} color={"#1F2937"}>{title}</Button></Link> 
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
   <Container maxW={"100%"} display={'flex'} alignItems={"center"} justifyContent={"space-around"} bg={"#FFFFFF"} height={"7vh"} position={"sticky"} top={0} zIndex={1000}>
    <Box w={"25%"}  display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Heading color={"#1F2937"}>Lakshman.</Heading>
    </Box>

    <Box w={"50%"} fontWeight={"bold"} color={"whiteAlpha.800"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Link to={'/'}><Text color={"#1F2937"} children={"Home"} p={2} _hover={{color:"#6366F1", transition:"all 0.3s", borderBottom:"2px solid #6366F1",borderRadius:"50px"}}/></Link>
        <Link to={'/about'}><Text color={"#1F2937"} children={"About"} p={2} _hover={{color:"#6366F1", transition:"all 0.3s", borderBottom:"2px solid #6366F1",borderRadius:"50px"}}/></Link>
        <Link to={'/cart'}><Text color={"#1F2937"} children={"E-commerce"}  p={2} _hover={{color:"#6366F1", transition:"all 0.3s" , borderBottom:"2px solid #6366F1",borderRadius:"50px"}}/></Link>
        <Link to={'/project'}><Text color={"#1F2937"} children={"Projects"}  p={2} _hover={{color:"#6366F1", transition:"all 0.3s" , borderBottom:"2px solid #6366F1",borderRadius:"50px"}}/></Link>
        <Link to={'/blog'}><Text color={"#1F2937"} children={"Blog"}  p={2} _hover={{color:"#6366F1", transition:"all 0.3s", borderBottom:"2px solid #6366F1",borderRadius:"50px"}}/></Link>
        <Link to={'/contact'}><Text color={"#1F2937"} children={"Contact"}  p={2} _hover={{color:"#6366F1", transition:"all 0.3s", borderBottom:"2px solid #6366F1",borderRadius:"50px"}}/></Link>
        <Link to={'/pricing'}><Text color={"#1F2937"}  p={2} _hover={{color:"#6366F1", transition:"all 0.3s", borderBottom:"2px solid #6366F1",borderRadius:"50px"}}> Pricing</Text></Link>
        <Link to={'/cartitem'}><Text color={"#1F2937"}  p={2} _hover={{color:"#6366F1", transition:"all 0.3s", borderBottom:"2px solid #6366F1",borderRadius:"50px"}}> <FaShoppingCart/></Text></Link>
    </Box>
    <Box w={"25%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
    <Link to={"/contact"}>
        <Button bg={"#6366F1"} variant={"outline"} color={"#FFFFFF"} border={"1px solid #6366F1"} _hover={{color:"#FFFFFF", bgColor:"#4F46E5",border:"none", transition:"all 0.3s"}}>
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
        <DrawerContent bg={"#FFFFFF"}>
            <DrawerHeader borderBottomWidth={'1px'} color={"#1F2937"}>Lakshman.</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'} spacing='4' onClick={onClose}>
                    <LinkButton url='/' title='Home'/>
                    <LinkButton url='/about' title='About' />
                    <LinkButton url='/cart' title='E-commerce' />
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