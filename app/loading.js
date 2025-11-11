"use client" 
import { Box, Text, keyframes } from '@chakra-ui/react';

export default function Loading() {
  const pulseAnimation = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  `;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Text fontSize="2xl" fontWeight="bold" animation={`${pulseAnimation} 2s infinite`}>
        Loading Techmapperz...
      </Text>
    </Box>
  );
}
