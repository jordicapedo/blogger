import Image from 'next/image'
import Link from 'next/link'

const name = 'Jordi Capellades'
export const siteTitle = 'Jordi Capellades'

export default function Layout({ children, home }) {
  return (
    <div className="prose container mt-10 mx-auto flex flex-col items-center justify-center px-8">
      <header className="flex items-center flex-col gap-3">
        {home && (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full w-32 h-32 mx-auto"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="text-2xl font-bold">{name}</h1>
          </>
        )}
      </header>
      <main className="mb-10">
        {children}
        {!home && (
          <div className="mt-10">
            <Link href="/">
              <a className="font-bold no-underline hover:underline">
                ← Back to home
              </a>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
