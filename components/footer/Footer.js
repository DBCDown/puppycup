import Link from 'next/link'
import Logo from '../header/Logo'
import { links } from '../../lib/footer-links'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-primary-900 bg-gray-900 text-gray-400">
      <div className="wrapper flex flex-col flex-wrap py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <Logo size={'small'} />
          <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
          {links.map((cat) => (
            <div key={cat.name} className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium uppercase tracking-widest text-white">{cat.name}</h2>
              <nav className="mb-10 list-none">
                {cat.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.uri} target={`_blank`} className="text-gray-400 hover:text-white hover:underline">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.uri}>
                        <a className="text-red-400 hover:text-white hover:underline">{link.label}</a>
                      </Link>
                    )}
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="wrapper flex flex-col flex-wrap py-4 sm:flex-row">
          <p className="text-center text-sm text-gray-400 sm:text-left">
            © 2022 PuppyCup —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="ml-1 text-gray-500" target="_blank">
              @DesignByCode
            </a>
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-400">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
