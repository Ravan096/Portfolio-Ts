import { Box, Image, Stack, Text, Heading, useColorModeValue, Button, HStack } from "@chakra-ui/react";
import {AiFillDelete} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement,removeCartItem ,calculatePrice} from "../reducer/cartReducer";
import "../styles/animation.css"
import { StoreType } from "../store";
import toast from "react-hot-toast";
import {useEffect} from "react";
import {Helmet} from "react-helmet";


const CartItem = () => {
  const cartitem= useSelector((state:StoreType) => state.cartReducer.cartitems);
  const {total, subtotal,tax, shippingCharges} = useSelector((state:StoreType)=>state.cartReducer)

  const dispatch= useDispatch();

  const removeProduct=(id:string)=>{
    dispatch(removeCartItem(id))
    toast.success("Product Removed From Cart")
  }
  const incrementItem=(id:string)=>{
    dispatch(increment(id))   
  }
  const decrementItem=(id:string)=>{
    dispatch(decrement(id))
  }
  

  useEffect(() => {
    dispatch(calculatePrice());
  }, [cartitem]);

  return (
    <Stack h={["","90vh"]} w={"100%"}>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Cart</title>
                <link rel="canonical" href="https://lakshmanportfolio2023.netlify.app/" />
            </Helmet>
    
    {
        cartitem.length > 0?(
            <Stack direction={["column","row"]} h={["","90vh"]} >
        <Stack  w={["100%","75%"]} roundedRight={"3xl"} bgColor={"#232424"} overflow={"auto"}
         __css={{'&::-webkit-scrollbar':{
          display: "none"
          }
          }}>
          {
            cartitem.map((i,idx)=>(
              <CartView image={i.image} name={i.name} key={idx} price={i.price} id={i.id}
               decrementhandler={decrementItem} incrementhandler={incrementItem}
               deletehandler={removeProduct} qty={i.qty}/>
            ))
          }

        
        </Stack>


        <Stack border={"2px solid black"} w={["","25%" ]} roundedLeft={"3xl"} bgColor={"#232424"} color={"whiteAlpha.700"} 
               display={"flex"} alignItems={"center"} justifyContent={"center"}>

                <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} justifyContent={"space-around"}
                h={"40%"} w={"100%"}>
            <Heading ml={[3,0]} fontSize={["xl","4xl"]} fontWeight={"light"}>Subtotal: ${subtotal}</Heading>
            <Heading ml={[3,0]} fontSize={["xl","4xl"]} fontWeight={"light"}>Shipping: ${shippingCharges}</Heading>
            <Heading ml={[3,0]} fontSize={["xl","4xl"]} fontWeight={"light"}>Tax: ${tax}</Heading>
            <Heading ml={[3,0]} fontSize={["xl","4xl"]} fontWeight={"light"}>Total: ${total}</Heading>
            </Box>

            <Box  w={"100%"} h={"10%"} display={"flex"} alignItems={"center"}>
              <Link to={'/payment'}>
              <Button rounded={['2xl','none']}  ml={[3,0]}
            size={'lg'}
            py={'7'}
            bgColor={'orange'}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }} >
                Proceed to Payment
              </Button>
              </Link>
            </Box>
        </Stack>
    </Stack>
        ):(
            <Stack direction={"row"} h={["60vh","90vh"]} bgColor={"#232424"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box w={["100%","50%"]} h={["100%","50%"]} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                  <Box fontSize={"9xl"} className="image">
                    🛒
                  </Box>
                    <Heading color={"whiteAlpha.800"} fontSize={"5xl"}>
                        Cart is empty
                    </Heading>
                    <Link to={"/cart"}>
                    <Button bgColor={"crimson"} color={"whiteAlpha.900"} mt={5} _hover={{color:"black"}}>
                        Continue Shopping
                    </Button>
                    </Link>
                </Box>

    </Stack>
        )
    }
    
    </Stack>   
    
  )
}

export default CartItem




const CartView =({image,name,price,qty,id,deletehandler,incrementhandler,decrementhandler}: any)=>{
    return(
        <Stack direction={"row"} border={"2px solid greenyellow"} h={["30%","310px"]} rounded={"3xl"} bgColor={"white"}
               display={"flex"} alignItems={"center"} justifyContent={["space-between","space-around"]}>
            <Stack h={["100%",'210px']} w={["100%","40%"]} bg={'white.100'}overflow={"none"} cursor={"pointer"} >
          <Image src={image} alt="Example" h={"210px"} w={"100%"} objectFit={"contain"} />
        </Stack>

        <Stack w={["100%","60%"]} direction={["column","row"]} justifyContent={"space-around"}>
        <Stack cursor={"pointer"} w={["100%","30%"]}>
          <Text
            color={'black.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
              ₹
            {price}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'} noOfLines={1}>
            {name}
          </Heading>
        </Stack>

        <Stack w={["100%","30%"]}>
        <HStack display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                <Button onClick={()=>decrementhandler(id)} bgColor={"black"} color={"white"}>-</Button>
                <Text>{qty}</Text>
                <Button onClick={()=>incrementhandler(id)} bgColor={"black"} color={"white"}>+</Button>
            
                <Button onClick={()=>deletehandler(id)} bgColor={"black"}> <AiFillDelete style={{color:"white",fontSize:"1.4rem"}}/></Button>
            
            </HStack>
        
        </Stack>
        </Stack>
        </Stack>
    )
}