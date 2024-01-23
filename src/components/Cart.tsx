import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Button,
  Container,
  HStack
} from '@chakra-ui/react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";
import axios from 'axios';
import Loader from './Loader';
import { useDispatch } from 'react-redux';
import { CartItem } from '../types/types';
import { addtocart } from "../reducer/cartReducer";
import {Helmet} from "react-helmet";


const Cart = () => {
  const [prod, setProd]= useState([]);
  const [loading, setloading]= useState(false);
  const [page, setPage] = useState(12);

  const dispatch= useDispatch();


  useEffect(() => {

    
    const  FetchCoins=async ()=>{
      try{
      const{data}= await axios.get(`https://fakestoreapi.com/products/?limit=${page}`);

      setProd(data);
      setloading(false);
    }catch(error){
      setloading(true);
    } 
  };

    // return () =>

      FetchCoins();
    // }
  }, [page]);

    const AddtoCartHandler=(cartItem:CartItem)=>{
            dispatch(addtocart(cartItem));
            console.log(cartItem);
      toast.success('Added to cart Successfully!')
    }

    const ChangePage=(page:any)=>{
      setPage(page);
    }
    const btns= new Array(20).fill(1)
   
    
    
  return (

    <Container maxW={"full"} display={"flex"} justifyContent={"space-around"} flexWrap={"wrap"} bgColor={"#252526"}>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
                <link rel="canonical" href="https://lakshmanportfolio2023.netlify.app/" />
            </Helmet>
    <Container maxW={["full","80%"]} display={"flex"} justifyContent={"space-around"} flexWrap={"wrap"} bgColor={"#252526"}>
      {
        loading?(
          <Loader/>
        ):(
    
    prod.map((i:any)=>{
      return(
             <ProductCard image={i.image} id={i.id} key={i.id}
                          price={`₹${i.price}`} name={i.title}
                          desc={i.description} carthandler={AddtoCartHandler}/>
             )
            })
          
        )
}
          <HStack mt={1} mb={1} overflow={'auto'} p={'8'} >
            {
              btns.map((item,index)=>{
                return(
                  <Button variant={"solid"} id={item} key={index+1} colorScheme={"purple"} onClick={()=>ChangePage((index+1)*12)}>
                    {index+1}
                  </Button>
                )
              })
            }
          </HStack>
            </Container>
            </Container>

    
  )
}

export default Cart


const ProductCard =({image,price,name,desc,id, carthandler }:any)=>{


    return(
      <Box 
      transition={"all 0.3s"}
      _hover={{transform: "scale(1.05)"}}
      border={"1px solid black"}
        maxW={'300px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        mt={5}
        overflow={'hidden'}>
          <Link to={`/productdetails/${id}`}>
        <Box h={'210px'} bg={'white.100'} mt={-6} mx={-6} mb={6} overflow={"none"} cursor={"pointer"}>
          <Image src={image} alt="Example" h={"210px"} w={"100%"} objectFit={"contain"}/>
        </Box>
        <Stack cursor={"pointer"}>
          <Text
            color={'black.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {price}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'} noOfLines={1}>
            {name}
          </Heading>
          <Text color={'gray.500'}  noOfLines={3}>
            {desc}
          </Text>
        </Stack>
        </Link>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
         
           <Button 
           rounded={'none'}
           w={'full'}
          //  mt={8}
           size={'lg'}
           py={'7'}
           bg={useColorModeValue('gray.900', 'gray.50')}
           color={useColorModeValue('white', 'gray.900')}
           textTransform={'uppercase'}
           _hover={{
             transform: 'translateY(2px)',
             boxShadow: 'lg',
           }} 
          //  onClick={carthandler} 
           onClick={() => carthandler({ name, price, id, qty: 1, image })}>Add to Cart</Button>
        </Stack>
      </Box>
    )
}


export {ProductCard}