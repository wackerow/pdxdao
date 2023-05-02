import { FC } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Link, Page } from '@/components'
import { SITE_NAME } from '../../constants'

const Home: FC = () => (
  <Page title={SITE_NAME} description="An IRL DAO based in Portland, Oregon">
    <Text as="h1" textStyle="h1">
      {SITE_NAME}
    </Text>
    <Box as="section">
      <Text>
        <strong>{SITE_NAME}</strong> is an IRL DAO based in Portland, Oregon,
        whose members share an interest in the implementation and application of{' '}
        <Link href="https://ethereum.org">Ethereum</Link> and web3 technologies,
        tools and decentralized systems, as a means to promote the Ethereum
        ecosystem while benefiting our local community.
      </Text>
      <Text>
        {SITE_NAME} plays a working role in supporting{' '}
        <strong>EthPDX—Portland&apos;s Ethereum community</strong>, organized
        via <Link href="https://www.meetup.com/ethpdx/">Meetup.com</Link>. The
        purpose of EthPDX is to support community networking, learning, and
        building. Anyone can attend an EthPDX event, you don&apos;t need to be a
        member of the DAO.{' '}
        <strong>
          The best way to learn more is to attend EthPDX meetups and events.
        </strong>{' '}
        There, you&apos;ll be able to ask questions and get a sense of the{' '}
        <Text
          as="span"
          fontFamily="cursive"
          _before={{ content: '"✨"' }}
          _after={{ content: '"✨"' }}
        >
          vibe
        </Text>{' '}
        of our community. We&apos;d be glad to meet you!
      </Text>
    </Box>
    <Box as="section">
      <Text as="h2" textStyle="h2">
        What does {SITE_NAME} do?
      </Text>
      <Text>
        We organize to support community-level thriving—manifested in a growing
        variety of ways, including organizing meetup and educational events, and
        offering web3-related opportunities for local creators. We work together
        collaboratively to produce projects that benefit the community.{' '}
        {SITE_NAME} is currently comprised of the following working groups:
        Communication and Design, Tech and Education, and Operations and
        Treasury.
      </Text>
      <Text>
        <Link href="https://pdxdao-docs.readthedocs.io/en/latest/">
          Read the docs
        </Link>
      </Text>
      {/* TODO: Add back mirror.xyz callout/link */}
    </Box>
    <Box as="section">
      <Text as="h2" textStyle="h2">
        Who joins {SITE_NAME}?
      </Text>
      <Text>
        Anyone who is interested in building in web3 on Ethereum, while actively
        contributing to our community. All DAO members can submit proposals to
        the group. Trusted DAO members gain proposal approval rights and scaled
        voting power. An individual is welcome to forge their own path to DAO
        membership through active community involvement.
      </Text>
    </Box>
    <Box as="section">
      <Text
        as="h2"
        textStyle="h2"
        _before={{
          content: '"👀"',
          me: '0.5em',
        }}
      >
        What&apos;s a DAO?
      </Text>
      <Text>
        A decentralized autonomous organization, or DAO, describes a new way for
        humans to work together toward a shared vision without the need for
        centralized power. A DAO is typically defined by its smart contract—the
        blockchain-based protocol in place for shared management of the
        community treasury—and by the purpose, governance structure, and vibe of
        the community.
      </Text>
      <Text>
        <Link href="https://ethereum.org/dao/">Learn more about DAOs</Link>
      </Text>
    </Box>
  </Page>
)

export default Home
