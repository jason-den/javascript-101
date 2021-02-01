import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>JS 101</title>
      </Head>

      <section>
        <ul>
          <li>
            <Link href="/oop">oop</Link>
          </li>
          <li>
            <Link href="/date">date</Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
