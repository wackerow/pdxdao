import { Link } from '@/components'
import { Box, Flex, type BoxProps, type LinkProps } from '@chakra-ui/react'

interface IProps extends BoxProps, Pick<LinkProps, 'href'> {
  hideArrow?: boolean
}
export const ButtonLink: React.FC<IProps> = ({
  children,
  href,
  hideArrow,
  ...boxProps
}) => {
  const isExternal = href?.startsWith('http')
  return (
    <Link
      href={href}
      color="body"
      _hover={{ textDecoration: 'none' }}
      hideArrow
      data-group
      m={0}
    >
      <Flex
        alignItems="center"
        as="span"
        w="fit-content"
        px={4}
        py={2}
        m={0}
        bg="primary"
        _groupHover={{ bg: 'primary', boxShadow: '4px 4px 0 0 var(--chakra-colors-primaryHover)' }}
        cursor="pointer"
        _after={
          isExternal || hideArrow
            ? {}
            : {
                content: '"↗"',
                ms: '1',
                display: 'inline-block',
                fontFamily: 'heading',
              }
        }
        {...boxProps}
      >
        {children}
      </Flex>
    </Link>
  )
}
