import Link from 'next/link'
import Navbar from './navbar'

const name = 'Jordi Capellades'
export const siteTitle = 'Jordi Capellades'

export default function Layout({ children, home }) {
  return (
    <>
      <div className="prose container mt-10 mx-auto px-8">
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
    </>
  )
}
