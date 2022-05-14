import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className={`wrapper`}>
      <header className={`my-10`}>
        <Link href={`/`}>
          <a className={`text-5xl font-black tracking-tight text-purple-600`}>
            PuppyCup
          </a>
        </Link>
      </header>
      <nav className={`flex space-x-2`}>
        <Link href={`/`}>
          <a>Home</a>
        </Link>
        <Link href={`/about`}>
          <a>About</a>
        </Link>
      </nav>
      {children}
    </div>
  );
}
