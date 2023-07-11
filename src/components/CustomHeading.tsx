import { Box, Heading } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

export default function CustomHeading({children}: Props) {
  return (
   
    <Box position={"relative"} textAlign="center" mb={4}>
    <Heading fontSize={"4xl"} mb={4} letterSpacing="3px">{children}</Heading>
    <Box
      position="absolute"
      bottom="-8px"
      left="50%"
      transform="translateX(-50%)"
      width="25px"
      height="5px"
      bg="#7843e9"
      borderRadius="full"
    />
    </Box>
  )
}


