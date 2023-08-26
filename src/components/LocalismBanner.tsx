import { Flex, Text } from '@chakra-ui/react'
import { ButtonLink } from '@/components'

export const LocalismBanner = () => (
  <Flex
    justify="center"
    bg="pink.700"
    color="bg"
    boxShadow="0 4rem 4rem -4rem rgb(0 0 0 / 100%)"
  >
    <Flex
      py={4}
      alignItems="center"
      position="relative"
      direction={{ base: 'column', sm: 'row' }}
      rowGap={6}
      maxW="max"
    >
      <Text px={8} m={0} textAlign={{ base: 'center', sm: 'start' }}>
        PDX DAO is looking for speakers and attendees to join us in Portland for
        our General Forum on Ethereum Localism, Friday October 13th - Monday
        October 16th, 2023.
      </Text>
      <ButtonLink
        href="https://mirror.xyz/ethpdx.eth/kjpsLAAC2Si0XDmr_aFp0F5esPNH4DoPB4lOTlFbR5M"
        whiteSpace="nowrap"
        me={8}
        bg="transparent"
        border="2px"
        borderColor="bg"
        color="bg"
      >
        Learn more
      </ButtonLink>
    </Flex>
  </Flex>
)
