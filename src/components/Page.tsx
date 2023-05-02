import { FC } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { PageMetadata } from '@/components'

interface PageProps extends Pick<BoxProps, 'children'> {
  title: string
  description: string
  image?: string
}
export const Page: FC<PageProps> = ({
  title,
  description,
  image,
  children,
}) => (
  <main>
    <PageMetadata title={title} description={description} image={image} />
    <Box maxW="max" mx="auto" p={[6, 8]} id="main-content">
      {children}
    </Box>
  </main>
)
