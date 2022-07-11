import Link from 'next/link'
import { useState } from 'react'
import { HouseIcon, BlogIcon, TwitterIcon, GithubIcon } from './icons'

export default function Navbar() {
  return (
    <nav className="bg-zinc-100 p-3 sm:p-0 sm:pt-16 mb-2 m-4 sm:m-0 rounded-xl sm:rounded-none flex sm:block gap-x-12 sm:gap-x-0 justify-center sm:h-screen sm:fixed sm:inset-y-0 sm:left-0 sm:w-16 sm:space-y-6">
      <Link href="/">
        <a className="block">
          <HouseIcon />
        </a>
      </Link>
      <Link href="/posts">
        <a className="block">
          <BlogIcon isActiveBlog />
        </a>
      </Link>
      <Link href="https://twitter.com/jordi_codes">
        <a className="block" target="_blank">
          <TwitterIcon />
        </a>
      </Link>
      <Link href="https://github.com/jordicapedo">
        <a className="block" target="_blank">
          <GithubIcon />
        </a>
      </Link>
    </nav>
  )
}
