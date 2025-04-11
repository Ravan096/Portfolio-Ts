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
import { useEffect, useState } from "react";
import axios from 'axios';
import Loader from './Loader';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addtocart } from '../reducer/cartReducer';
import { Helmet } from "react-helmet";
import { CartItem } from '../types/types';
const ProductDetail = () => {
  const [prod, setProd] = useState<any>([]);
  const [loading, setloading] = useState(false);
  const [mainImage, setMainImage] = useState<string>();
  const params = useParams()

  useEffect(() => {


    const FetchCoins = async () => {
      try {
        setloading(true)
        var { data } = await axios.get(`https://portfolioserver-delta.vercel.app/api/v1/getsingleproduct/${params.id}`);

        setProd(data.product);
        setMainImage(data.product?.image?.[0])
        // console.log(prod)
        setloading(false);
      } catch (error) {
        setloading(false);
      }
    };

    // return () =>

    FetchCoins();
    // }
  }, []);


  const dispatch = useDispatch();
  const AddtoCart = (prod: CartItem) => {
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
        loading ? (
          <Loader />
        ) : (
          prod ? (
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 18, md: 24 }}>
              <Box>
                <Image
                  rounded={'md'}
                  alt={'product image'}
                  src={mainImage}
                  fit={'cover'}
                  objectFit={"contain"}
                  align={'center'}
                  w={'100%'}
                  h={{ base: '100%', sm: '400px', lg: '500px' }}
                />
                <Flex rounded={"md"} bgColor={"gray.100"} justifyContent={"center"} alignItems={"center"} mt={5} flexWrap={"wrap"} gap={2}>
                  {
                    prod.image?.map((item: string, idx: number) => (
                      <Image
                        key={idx}
                        src={item}
                        alt={`Thumbnail ${idx + 1}`}
                        boxSize={{ base: "4rem", sm: "5rem" }}
                        objectFit="cover"
                        borderRadius="md"
                        cursor="pointer"
                        opacity={mainImage === item ? 1 : 0.6}
                        _hover={{ opacity: 1 }}
                        transition="opacity 0.3s"
                        onClick={() => setMainImage(item)}
                      />
                    ))

                  }
                </Flex>
              </Box>
              <Stack spacing={{ base: 6, md: 10 }} mt={['16',0]}>
                <Box as={'header'}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                    {/* Automatic Watch */}
                    {prod.name}
                  </Heading>
                  <Text
                    color={useColorModeValue('gray.900', 'gray.400')}
                    fontWeight={300}
                    fontSize={'2xl'}>
                    {`₹ ${prod.price} USD`}
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
                      fontSize={'lg'}
                      fontWeight={'300'}>
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
                  }} onClick={() => AddtoCart({ qty: 1, name: prod.name, image: prod.image[0], price: prod.price, id: prod._id })}>
                  Add to cart
                </Button>

                <Stack direction="row" alignItems="center" justifyContent={'center'}>
                  <MdLocalShipping />
                  <Text>2-3 business days delivery</Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          ) : (
            <Box height={"90vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
              <Text color={"blackAlpha.900"} fontSize={"4xl"} fontWeight={"bold"} mt={10}>
                Product Not Found
              </Text>
            </Box>
          )
        )
      }
    </Container >
  )
}


export default ProductDetail;