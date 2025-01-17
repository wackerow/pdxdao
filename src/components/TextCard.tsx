import { Box, type BoxProps, Text } from '@chakra-ui/react'

interface IProps extends BoxProps {
  fadeColor: string
}
export const TextCard: React.FC<IProps> = ({
  title,
  children,
  fadeColor,
  ...boxProps
}) => (
  <Box {...boxProps}>
    <Text
      as="h2"
      textStyle="h2"
      position="relative"
      maxW="70ch"
      mb={2}
      _after={{
        content: '""',
        position: 'absolute',
        insetInline: 0,
        h: 3,
        bottom: { base: 1, md: 3 },
        background: `linear-gradient(to right, var(--chakra-colors-${fadeColor}), var(--chakra-colors-bg))`,
        zIndex: -1,
      }}
    >
      {title}
    </Text>
    {children}
  </Box>
)
