import React from 'react';
import { AbsoluteCenter, Box, Button, Container, Divider, FormControl, Heading, Input,
         InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, 
         ModalHeader, ModalOverlay, Radio, RadioGroup, Select, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { FC } from 'react';
import QRCode from 'qrcode.react';


const PaymentSystem = () => {
  const [value, setValue] = React.useState('');
  const [bank, setBank] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)




  const handleCardOptionChange = (event: any) => {
    // alert(event.target.value);
    console.log(event.target.value)
  };
  const handleBankOptionChange = (event: any) => {
    setBank(event.target.value);
  };

  return (
    <Container h={"90vh"} maxW={"100%"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Payment</title>
        <link rel="canonical" href="https://lakshmanportfolio2023.netlify.app/" />
      </Helmet>


      <Container maxW={["", "50%"]}  mt={5}>

        <Box py={2} my={2} display={"flex"} alignItems={"center"} justifyContent={["center","flex-start"]}>
          <Heading>Payments</Heading>
        </Box>





        <Box py={2} my={2}>

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
          value == "cards" ? (
            <Container display={value ? "cards" : "none"} bgGradient="linear(to-r, pink.200, purple.500)" rounded={"lg"}>
              <Box h={["","18vh"]}  >
                <FormControl h={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                  <Box>
                    <Box mt={[1,0]}>
                      <Input type="text" placeholder="1234 5678 9012 3457" />
                    </Box>
                  </Box>

                  <Box>
                    <Box mt={[1,0]}>
                      <Input type="text" placeholder="Cardholder's Name" />
                    </Box>
                  </Box>

                  <Box display={"flex"} flexDirection={["column","row"]} justifyContent={"space-between"}>
                    <Box mt={[1,0]}>
                      <Input type="number" placeholder="MM/YYYY" />
                    </Box>
                    <Box mt={[1,0]} mb={[1,0]}>
                      <Input type="password" maxLength={3} placeholder="&#9679;&#9679;&#9679;" />
                    </Box>
                  </Box>
                </FormControl >
              </Box>
            </Container>
          ) : (null)
        }



        {
          value == "phonepe" ? (
            <Container display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <QRCodeGenerator value='test' />

              <Box position='relative' padding='10' w={"100%"}>
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                  Or
                </AbsoluteCenter>
              </Box>

              <Box>
                <InputGroup>
                  <InputLeftAddon>
                    +91
                  </InputLeftAddon>
                  <Input type='tel' placeholder='phone number' />
                </InputGroup>
              </Box>
            </Container>
          ) : (null)

        }





        {
          value == "netbanking" ? (
            <Container maxW={"100%"} h={"20vh"}>
              <Container>
                <Select placeholder='Choose Bank' onChange={handleBankOptionChange} mt={5}>
                  <option value="SBI">State Bank of India</option>
                  <option value="HDFC">HDFC Bank</option>
                  <option value="ICICI">ICICI Bank</option>
                  <option value="AXIS">Axis Bank</option>
                  <option value="PNB">Punjab National Bank</option>
                  <option value="BOB">Bank of Baroda</option>
                  <option value="KOTAK">Kotak Mahindra Bank</option>
                  <option value="YES">Yes Bank</option>
                  <option value="IDBI">IDBI Bank</option>
                  <option value="INDUS">IndusInd Bank</option>
                  <option value="RBL">RBL Bank</option>
                  <option value="CANARA">Canara Bank</option>
                  <option value="BOI">Bank of India</option>
                  <option value="IOB">Indian Overseas Bank</option>
                  <option value="UBI">Union Bank of India</option>
                  <option value="OBC">Oriental Bank of Commerce</option>
                  <option value="SBH">State Bank of Hyderabad</option>
                  <option value="SBM">State Bank of Mysore</option>
                  <option value="SBBJ">State Bank of Bikaner and Jaipur</option>
                  <option value="SBT">State Bank of Travancore</option>

                </Select>
                <Box textAlign={"center"} mt={5}>
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
            }} 
            onClick={() => {
              setOverlay(<OverlayOne />)
              onOpen()
            }}>
                    Submit
                  </Button>




                  <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>{bank} Bank</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box border={"1px solid red"}>

            </Box>
            <Text> Your selected account is {bank} bank</Text>
            <Text>This is demo site net banking will be not proceed next</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

                </Box>
              </Container>
            </Container>
          ) : (null)
        }








        <Box display={"flex"} alignItems={'center'} justifyContent={"space-around"} my={2} py={2}>
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
  size = 150,
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

const OverlayOne = () => (
  <ModalOverlay
    bg='blackAlpha.300'
    backdropFilter='blur(10px) hue-rotate(90deg)'
  />
)
