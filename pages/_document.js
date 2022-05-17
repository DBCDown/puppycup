import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className={`relative overflow-x-hidden bg-gray-900 text-gray-400 antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
