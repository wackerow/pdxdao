import { FC } from 'react'
import { Box, Flex, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import NextImage from 'next/image'
import { Link, LocalismBanner, MobileMenu } from '@/components'
import { NAV_LINKS } from '../../constants'

export const Header: FC = () => (
  <Box bg="body">
    <Flex
      justify="space-between"
      gap={16}
      color="bg"
      alignItems="center"
      px={[4, null, null, 8]}
      maxW="max"
      mx="auto"
    >
      <Link href="/" color="bg" h="fit-content">
        <Flex gap={4} alignItems="center" my={4}>
          <NextImage src="/assets/logo.png" width="60" height="75" alt="logo" />
          <Text
            fontSize={['3xl', '4xl', '5xl']}
            textStyle="heading"
            whiteSpace="nowrap"
            m={0}
          >
            PDX DAO
          </Text>
        </Flex>
      </Link>

      {/* "Skip to content" hidden button for a11y */}
      <Box
        as="a"
        href="#main-content"
        display={['none', null, 'block']}
        pointerEvents="none"
        w="0px"
        opacity={0}
        transition="opacity 200ms ease-in-out"
        _focus={{
          opacity: 1,
          w: 'auto',
          transition: 'opacity 200ms ease-in-out',
        }}
      >
        <Text textStyle="header" whiteSpace="nowrap" fontSize="xs" m={0}>
          skip to content
        </Text>
      </Box>

      <UnorderedList
        listStyleType="none"
        display={['none', null, 'flex']}
        gap={4}
        as="nav"
      >
        {NAV_LINKS.map(({ name, href }) => (
          <ListItem key={name}>
            <Link href={href}>{name}</Link>
          </ListItem>
        ))}
      </UnorderedList>

      <MobileMenu />
    </Flex>
    <LocalismBanner />
  </Box>
)
