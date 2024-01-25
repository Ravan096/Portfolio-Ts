import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md';
import {useEffect, useState} from "react";
import axios from 'axios';
import Loader from './Loader';
import toast from 'react-hot-toast';
import {useParams}from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addtocart } from '../reducer/cartReducer';
import {Helmet} from "react-helmet";
import { CartItem } from '../types/types';
const ProductDetail=()=> {
  const [prod, setProd]= useState<any>([]);
  const [loading, setloading]= useState(false);
  const params= useParams()
  console.log(params.id)

  useEffect(() => {

    
    const  FetchCoins=async ()=>{
      try{
      const{data}= await axios.get(`https://fakestoreapi.com/products/${params.id}`);

      setProd(data);
      setloading(false);
      console.log(prod);
    }catch(error){
      setloading(false);
    } 
  };

    // return () =>

      FetchCoins();
    // }
  }, []);


  const dispatch= useDispatch();
  const AddtoCart= (prod:CartItem)=>{
    dispatch(addtocart(prod))
    toast.success("Added Successfully")
  }

  return (
    <Container maxW={'7xl'}>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Item Details</title>
                <link rel="canonical" href="https://lakshmanportfolio2023.netlify.app/" />
            </Helmet>
      {
        loading?(
          <Loader/>
        ):(
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={prod.image}
            fit={'cover'}
            objectFit={"contain"}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {/* Automatic Watch */}
              {prod.title}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {`₹ ${prod.price} INR`}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {prod.description}
              </Text>
              <Text fontSize={'lg'}>
              {prod.description}

              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment
                  inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }} onClick={() => AddtoCart({qty: 1, name: prod.title, image: prod.image, price: prod.price, id:prod.id})}>
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
        )
          }
    </Container>
  )
}


export default ProductDetail;