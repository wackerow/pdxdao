export const SITE_NAME = 'PDX DAO'
export const SITE_URL = 'https://ethpdx.eth.limo'
export const TWITTER_HANDLE = '@PDXDAO'
export const MOLOCH_CONTRACT_ADDRESS =
  '0x90d6f7e3460472c7d0a354096c113e1a767a2ac9'

interface NavLink {
  name: string
  href: string
}
export const NAV_LINKS: NavLink[] = [
  // {
  //   name: 'Projects',
  //   href: '/projects/',
  // },
  {
    name: 'Documentation',
    href: 'https://pdx-dao.gitbook.io/pdx-dao-docs/',
  },
  // {
  //   name: 'PDX DAO on Mirror.xyz',
  //   href: '#',
  // },
  {
    name: 'EthPDX on Meetup',
    href: 'https://www.meetup.com/ethpdx/',
  },
]
