import { FC } from 'react'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'

interface IProps extends LinkProps {
  hideArrow?: boolean
}
export const Link: FC<IProps> = ({ href, hideArrow, ...restProps }) => {
  if (!href) return null
  const isExternal = href?.startsWith('http')
  return isExternal ? (
    <ChakraLink
      color="link"
      isExternal
      _after={
        hideArrow || !isExternal
          ? {}
          : {
              content: '"↗\uFE0E"',
              ms: '1',
              display: 'inline-block',
              fontFamily: 'heading',
            }
      }
      href={href}
      {...restProps}
    />
  ) : (
    <NextLink href={href} passHref legacyBehavior>
      <ChakraLink color="link" {...restProps} />
    </NextLink>
  )
}
