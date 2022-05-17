import Link from 'next/link'

const links = [
  {
    label: 'HOME',
    link: '/',
  },
  {
    label: 'LISTINGS',
    link: '/listings',
  },
  {
    label: 'POSTS',
    link: '/posts',
  },
  {
    label: 'ABOUT',
    link: '/about',
  },
  {
    label: 'CONTACT US',
    link: '/contact-us',
  },
]

export default function NavMain() {
  return (
    <nav
      className={`my-10 flex space-x-2 overflow-x-auto rounded-sm border border-primary-500 bg-gray-900 p-2.5 shadow-xl shadow-primary-500/10`}
    >
      {links.map((link) => (
        <Link key={link.link} href={link.link}>
          <a
            className={`shrink-0 rounded-sm bg-primary-500/10 bg-gradient-to-b px-6 py-1.5 font-bold text-primary-500 transition duration-100 hover:bg-primary-500 hover:text-gray-900`}
          >
            {link.label}
          </a>
        </Link>
      ))}
    </nav>
  )
}
