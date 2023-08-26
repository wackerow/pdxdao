import { FC } from 'react'
import { Box, Divider, Flex, Icon, Text } from '@chakra-ui/react'
import { ButtonLink, Link, Page, Section, TextCardWithIcon } from '@/components'
import { SITE_NAME } from '../../constants'
import { FaMeetup } from 'react-icons/fa'
import { FaRegGrinBeam, FaGlobe } from 'react-icons/fa'
import { GiFlexibleStar } from 'react-icons/gi'

const Home: FC = () => (
  <Page title={SITE_NAME} description="An IRL DAO based in Portland, Oregon">
    <Text as="h1" textStyle="h1" mb={16} mt={12}>
      {SITE_NAME}
    </Text>
    <Section maxW="70ch">
      <Text>
        <strong>{SITE_NAME}</strong> is an IRL DAO based in Portland, Oregon,
        whose members share an interest in the implementation and application of{' '}
        <Link href="https://ethereum.org">Ethereum</Link> and web3 technologies,
        tools and decentralized systems, as a means to promote the Ethereum
        ecosystem while benefiting our local community.
      </Text>
    </Section>
    <Section
      position="relative"
      mx={0}
      maxW="unset"
      w="100%"
      _before={{
        content: "''",
        position: 'absolute',
        insetInline: 0,
        insetBlock: 0,
        bg: 'gray.100',
        zIndex: -1,
      }}
      py={12}
      mt={24}
      mb={28}
    >
      <Section
        display="flex"
        mb={0}
        flexDirection="column"
        alignItems="center"
        gap={6}
      >
        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="2xl">
            The best way to learn more about PDX DAO is to attend EthPDX meetups
            and events
          </Text>{' '}
          <Text>
            There, you&apos;ll be able to ask questions and get a sense of the{' '}
            <Text
              as="span"
              fontFamily="cursive"
              fontSize="1.25em"
              _before={{ content: '"✨"' }}
              _after={{ content: '"✨"' }}
            >
              vibe
            </Text>{' '}
            of our community—we&apos;d be glad to meet you!
          </Text>
        </Box>
        <ButtonLink href="https://www.meetup.com/ethpdx/" hideArrow>
          <Icon as={FaMeetup} me={2} fontSize="xl" />
          <Text m={0} as="span">
            Check us out on Meetup
          </Text>
        </ButtonLink>
      </Section>
    </Section>
    <Flex direction="column" gap={16} my={32} sx={{ section: { mb: 0 } }}>
      <Section maxW="max">
        <TextCardWithIcon
          title="What does PDX DAO do?"
          fadeColor="secondary"
          icon={GiFlexibleStar}
        >
          <Text>
            We organize to support community-level thriving—manifested in a
            growing variety of ways, including organizing meetup and educational
            events, and offering web3-related opportunities for local creators.
            We work together collaboratively to produce projects that benefit
            the community.
          </Text>
          <Text>
            <Link href="https://pdx-dao.gitbook.io/pdx-dao-docs/">
              Read the docs
            </Link>
          </Text>
        </TextCardWithIcon>
      </Section>
      <Divider borderColor="body" w={64} mx="auto" />
      <Section maxW="max">
        <TextCardWithIcon
          title="Who joins PDX DAO?"
          fadeColor="primary"
          icon={FaRegGrinBeam}
        >
          <Text>
            Anyone who is interested in building in web3 on Ethereum, while
            actively contributing to our community. All DAO members can submit
            proposals to the group. Trusted DAO members gain proposal approval
            rights and scaled voting power. An individual is welcome to forge
            their own path to DAO membership through active community
            involvement.
          </Text>
        </TextCardWithIcon>
      </Section>
      <Divider borderColor="body" w={64} mx="auto" />
      <Section maxW="max">
        <TextCardWithIcon
          title="What's a DAO?"
          fadeColor="tertiary"
          icon={FaGlobe}
        >
          <Text>
            A decentralized autonomous organization, or DAO, describes a new way
            for humans to work together toward a shared vision without the need
            for centralized power. A DAO is typically defined by its smart
            contract—the blockchain-based protocol in place for shared
            management of the community treasury—and by the purpose, governance
            structure, and vibe of the community.
          </Text>
          <Text>
            <Link href="https://ethereum.org/dao/">Learn more about DAOs</Link>
          </Text>
        </TextCardWithIcon>
      </Section>
    </Flex>
  </Page>
)

export default Home
