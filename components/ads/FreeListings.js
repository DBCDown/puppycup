import Image from 'next/image'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { Popover } from '@headlessui/react'

export default function FreeListings() {
  return (
    <a
      href={process.env.NEXT_PUBLIC_ETSY_40_FREE_LISTINGS}
      target={`_blank`}
      className={`group relative flex items-center justify-center overflow-hidden rounded-md border border-gray-800 bg-gray-900 bg-[url('/blob-scene-haikei.svg')] bg-cover bg-center bg-no-repeat p-10 text-primary-50 shadow-2xl transition duration-100  hover:shadow-primary-500  md:flex-col`}
    >
      <Popover className={'absolute right-4 top-4 z-50 '}>
        <Popover.Button>
          <div className="font-bold text-primary-300">
            <HiOutlineInformationCircle size={24} />
          </div>
        </Popover.Button>
        <Popover.Panel className="top -10 absolute right-0 z-10 w-[400px] rounded-md border-2 border-orange-600 bg-gray-100 p-5 text-gray-700 shadow-2xl shadow-primary-500/50">
          <p>
            By signing up to{' '}
            <a href={process.env.NEXT_PUBLIC_ETSY_40_FREE_LISTINGS} target={`_blank`} className={`font-bold text-orange-600`}>
              Etsy
            </a>{' '}
            using this link both of us will be rewarded 40{' '}
            <a href={process.env.NEXT_PUBLIC_ETSY_40_FREE_LISTINGS} target={`_blank`} className={`font-bold underline`}>
              FREE{' '}
            </a>
            listings valued at $8
          </p>
        </Popover.Panel>
      </Popover>
      <div className={`flex flex-col items-center transition duration-300 group-hover:scale-105 md:flex-row`}>
        <div className="relative my-5 h-[150px] w-[150px] shrink-0  overflow-hidden rounded-full border-4 border-primary-500 shadow-2xl drop-shadow-2xl transition  duration-300 group-hover:scale-110 group-hover:shadow-primary-500/20 md:mr-10">
          <Image layout={'fill'} src={`/profile-elzanne.jpg`} alt={`Elzannè Myburgh`} />
        </div>

        <div className="flex flex-col justify-center text-center drop-shadow-2xl md:text-left">
          <div className={` transition duration-300 group-hover:-rotate-6`}>
            <h2 className={`block text-2xl font-light uppercase`}>
              Open an <span className={`font-bold text-orange-600`}>ETSY</span> shop and
            </h2>
            <h3 className={`block text-4xl font-black md:text-6xl `}>
              GET <span className={`font-black text-orange-600`}>40</span> FREE LISTINGS
            </h3>
          </div>
          <div className={`mt-5 flex items-center justify-center md:justify-end `}>
            <button
              className={`mt-1 shrink-0 rounded-sm bg-gradient-to-b from-orange-500 to-orange-700 px-6 py-3 text-lg font-bold  text-white transition duration-100  group-hover:shadow-xl group-hover:shadow-amber-500/20`}
            >
              Get FREE Listings
            </button>
          </div>
        </div>
      </div>
    </a>
  )
}
