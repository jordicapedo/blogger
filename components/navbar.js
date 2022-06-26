import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-4 justify-between bg-zinc-100 p-3 sm:p-0 sm:pt-16 mb-2 m-4 sm:m-0 rounded-xl sm:rounded-none sm:block gap-x-12 sm:gap-x-0 sm:h-screen sm:fixed sm:inset-y-0 sm:left-0 sm:w-16 sm:space-y-6">
      <Link href="/posts">
        <a className="">Posts</a>
      </Link>
    </nav>
  )
}
