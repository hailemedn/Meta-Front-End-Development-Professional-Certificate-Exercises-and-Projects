import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box borderRadius='lg' color='black' backgroundColor='white' maxW='lg'>
      <VStack >
        <Image src={imageSrc}  borderRadius='lg' width='100%' ></Image>
        <Box padding='3'>
          <Heading size='md'>{title}</Heading>
          <Text color='gray.500' my='4'>{description}</Text>
          <Text>See more <FontAwesomeIcon icon={faArrowRight}/></Text>
        </Box>

      </VStack>
    </Box>
    
  )
};

export default Card;
