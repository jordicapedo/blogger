import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="prose container mt-10 mx-auto flex flex-col items-center justify-center px-8">
      <main className="mb-10">
        {children}
        <div className="mt-10">
          <Link href="/posts">
            <a className="font-bold no-underline hover:underline">
              ← Back to posts
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
