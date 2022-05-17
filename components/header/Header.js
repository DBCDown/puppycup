import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={`wrapper my-10 flex justify-center`}>
      <Link href={'/'}>
        <a className="relative block h-[180px] w-[180px]">
          <Image src={'/puppycup-logo.svg'} layout={`responsive`} width={200} height={200} alt={'Puppy Cup Logo'} />
        </a>
      </Link>
    </div>
  )
}
