import { FC } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Link } from './Link'
import { MOLOCH_CONTRACT_ADDRESS } from '../../constants'

export const Footer: FC = () => (
  <Box bg="body">
    <Flex
      as="footer"
      bg="body"
      color="bg"
      direction="column"
      alignItems="center"
      py={8}
      px={[4, null, null, 8]}
      maxW="max"
      mx="auto"
      sx={{ p: { textAlign: 'center' } }}
    >
      <Text
        maxW="100%"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
        fontSize="xs"
      >
        <Link
          href={`https://admin.daohaus.fun/#/molochv3/0xa/${MOLOCH_CONTRACT_ADDRESS}`}
        >
          {MOLOCH_CONTRACT_ADDRESS}
        </Link>
      </Text>
      <Text fontFamily="cursive">
        🪄 Summoned March 2023 on{' '}
        <Link href="https://www.optimism.io/">Optimism</Link> via{' '}
        <Link href="https://daohaus.club/">DAOhaus</Link>
      </Text>
      <Text role="img" aria-label="with love">
        🖤
      </Text>
    </Flex>
  </Box>
)
