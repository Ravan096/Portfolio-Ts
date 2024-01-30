import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Box, Button, Container, FormControl, Heading, Input, Radio, RadioGroup, Stack, Text, useColorModeValue} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import  { FC } from 'react';
        import QRCode from 'qrcode.react';

// Replace with your own publishable key
const stripePromise = loadStripe('pk_test_123456789');

const PaymentSystem = () => {
  const [amount, setAmount] = useState(0); 
  const [error, setError] = useState(''); 
  const [value, setValue] = React.useState('')



  const handleCardOptionChange = (event:any) => {
    // alert(event.target.value);
  };

  return (
    <Container h={"90vh"} maxW={"100%"} border={"1px solid red"}>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Cart</title>
                <link rel="canonical" href="https://lakshmanportfolio2023.netlify.app/" />
    </Helmet>


    <Container border={"2px solid yellow"} maxW={["","50%"]}>

      <Box>
        <Heading>Payments</Heading>
      </Box>





      <Box>
     
    <RadioGroup onChange={setValue} value={value}>
      <Stack>
        <Box p={2} borderTop={"1px solid grey"} borderBottom={"1px solid grey"}>
          <Radio onChange={handleCardOptionChange} value='phonepe'>
            <Text fontSize={"lg"} fontWeight={"semibold"}>PhonePe (UPI,Wallet)</Text>
            </Radio>
          </Box>


        <Box p={2} borderBottom={"1px solid grey"}>
          <Radio onChange={handleCardOptionChange} value='cards'>
          <Text fontSize={"lg"} fontWeight={"semibold"}>Credit/Debit/ATM Card </Text>
          </Radio>
          </Box>


        <Box p={2} borderBottom={"1px solid grey"}>
          <Radio onChange={handleCardOptionChange} value='netbanking'>
           <Text fontSize={"lg"} fontWeight={"semibold"}>Net Banking</Text> 
            </Radio>
          </Box>


        <Box p={2} borderBottom={"1px solid grey"}>
          <Radio onChange={handleCardOptionChange} value='cod'>
            <Text fontSize={"lg"} fontWeight={"semibold"}>Cash on Delivery</Text> 
            </Radio>
          </Box>

      </Stack>
    </RadioGroup>
      </Box>


      {
        value == "cards" ?(
          <Container display={value?"cards":"none"} bgGradient="linear(to-r, pink.200, purple.500)" rounded={"lg"}>
  <Box h={"18vh"}  >
            <FormControl h={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
              <Box>
                <Box>
                  <Input type="text" placeholder="1234 5678 9012 3457"/>
                </Box>
              </Box>

              <Box className="d-flex justify-content-between align-items-center mb-4">
                <Box className="form-outline">
                  <Input type="text" placeholder="Cardholder's Name" />
                </Box>
              </Box>

              <Box display={"flex"} justifyContent={"space-between"}>
                <Box >
                  <Input type="number" placeholder="MM/YYYY" />
                </Box>
                <Box className="form-outline">
                  <Input type="password" maxLength={3} placeholder="&#9679;&#9679;&#9679;"/>
                </Box>
              </Box>
            </FormControl >
  </Box>
</Container>
        ):(null)
      }



      {
        value == "phonepe" ?(
          <Container border={"1px solid crimson"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <QRCodeGenerator value='test'/>
            </Container>
        ):(null)
        
      }








      <Box border={"1px solid black"} display={"flex"} alignItems={'center'} justifyContent={"space-around"} mt={2}>
        <Heading>
        $ 500
        </Heading>
        <Button rounded={'none'}
            w={"50%"}
            // mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
          Continue
        </Button>
      </Box>

    </Container>


      
    </Container>
  );
};

export default PaymentSystem;





        
        interface QRCodeProps {
          value: string; // the text to encode in the QR code
          size?: number; // the size of the QR code in pixels
          bgColor?: string; // the background color of the QR code
          fgColor?: string; // the foreground color of the QR code
          level?: 'L' | 'M' | 'Q' | 'H'; // the error correction level of the QR code
        }
        
        const QRCodeGenerator: FC<QRCodeProps> = ({
          value,
          size = 256,
          bgColor = '#FFFFFF',
          fgColor = '#000000',
          level = 'L',
        }) => {
          return (
            <div className="qr-code-generator">
              <QRCode
                value={value}
                size={size}
                bgColor={bgColor}
                fgColor={fgColor}
                level={level}
              />
            </div>
          );
        };
