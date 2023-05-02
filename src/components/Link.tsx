import { FC } from 'react'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Link: FC<LinkProps> = ({ href, ...restProps }) => {
  if (!href) return null
  const isExternal = href?.startsWith('http')
  return isExternal ? (
    <ChakraLink
      color="link"
      isExternal
      _after={{
        content: '"↗"',
        ms: '0.5',
        display: isExternal ? 'inline-block' : 'none',
        fontFamily: 'heading',
      }}
      href={href}
      {...restProps}
    />
  ) : (
    <NextLink href={href} passHref legacyBehavior>
      <ChakraLink color="link" {...restProps} />
    </NextLink>
  )
}
