import { TextCard } from '@/components'
import { type As, type BoxProps, Grid, Icon, Flex } from '@chakra-ui/react'

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
  <Flex direction={{ base: 'column-reverse', md: 'row' }} gap={12} alignItems="start">
    <TextCard title={title} fadeColor={fadeColor} flex={4}>
      {children}
    </TextCard>
    <Icon as={icon} fill={fadeColor} w="full" h="full" maxH={32} flex={1} />
  </Flex>
)
