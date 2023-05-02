import { FC } from 'react'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  ListItem,
  Menu,
  MenuButton,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { NAV_LINKS } from '../../constants'
import { Link } from '@/components'

export const MobileMenu: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box display={['block', null, 'none']}>
      <Menu id="menu-button">
        {isOpen ? (
          <MenuButton
            as={IconButton}
            aria-label="Close menu"
            variant="transparent"
            icon={<CloseIcon boxSize={5} color="link" />}
            onClick={onClose}
          />
        ) : (
          <MenuButton
            as={IconButton}
            aria-label="Open menu"
            variant="transparent"
            icon={<HamburgerIcon boxSize={8} color="link" />}
            onClick={onOpen}
          />
        )}
      </Menu>

      <Drawer placement="end" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="transparent">
          <DrawerBody bg="black" p={16}>
            <UnorderedList
              listStyleType="none"
              display="flex"
              flexDirection="column"
              gap={8}
              as="nav"
              textAlign="center"
            >
              {NAV_LINKS.map(({ name, href }) => (
                <ListItem key={name}>
                  <Link href={href}>{name}</Link>
                </ListItem>
              ))}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
