import { Box, type BoxProps } from '@chakra-ui/react'

export const Section: React.FC<BoxProps> = ({ children, ...boxProps }) => (
  <Box as="section" maxW="70ch" mx="auto" mb={12} px={[6, 8]} {...boxProps}>
    {children}
  </Box>
)