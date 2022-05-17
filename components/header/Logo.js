import Link from 'next/link'
import Image from 'next/image'

const sizes = {
  small: {
    css: 'h-[50px] w-[50px]',
    size: 50,
    fontSize: 'text-3xl',
  },
  medium: {
    css: 'h-[100px] w-[100px]',
    size: 100,
    fontSize: 'text-5xl',
  },
  large: {
    css: 'h-[120px] w-[120px]',
    size: 120,
    fontSize: 'text-7xl',
  },
}

export default function Logo({ size }) {
  return (
    <Link href={`/`}>
      <a className={`block flex items-center font-black tracking-tight ${sizes[size]['fontSize']}`}>
        <span className={`relative mr-2 block block ${sizes[size]['css']}`}>
          <Image
            src={'/puppycup-footer.svg'}
            layout={`responsive`}
            width={sizes[size]['size']}
            height={sizes[size]['size']}
            alt={`Puppy Cup Logo`}
          />
        </span>
        <span className={`block bg-gradient-to-b from-primary-500 to-primary-700 bg-clip-text py-3 text-transparent`}>Puppy</span>
        <span className={`block bg-gradient-to-b from-gray-100 to-gray-300 bg-clip-text py-3 text-transparent`}>Cup</span>
      </a>
    </Link>
  )
}

Logo.defaultProps = {
  size: 'small',
}
