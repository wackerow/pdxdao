import { TextCard } from '@/components'
import { type As, type BoxProps, Grid, Icon, Flex, Box } from '@chakra-ui/react'

interface IProps extends BoxProps {
  fadeColor: string
  icon: As
}
export const TextCardWithIcon: React.FC<IProps> = ({
  children,
  title,
  icon,
  fadeColor,
}) => (
  <Flex
    direction={{ base: 'column-reverse', md: 'row' }}
    gap={12}
    alignItems="start"
  >
    <TextCard title={title} fadeColor={fadeColor} flex={4}>
      {children}
    </TextCard>
    <Box flex={1} position="relative" w={32} mx="auto">
      <Icon
        as={icon}
        fill={fadeColor}
        stroke="body"
        strokeWidth={0}
        w="full"
        h="full"
        maxH={32}
        flex={1}
      />
      <Icon
        as={icon}
        fill="body"
        w="full"
        h="full"
        maxH={32}
        flex={1}
        position="absolute"
        inset={0}
        zIndex={-1}
        transform="translate(0.25em, 0.25em)"
      />
    </Box>
  </Flex>
)
