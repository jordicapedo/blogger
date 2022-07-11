import Link from 'next/link'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <div className="container mt-10 mx-auto flex flex-col items-center justify-center px-8">
        <main className="mb-10">{children}</main>
      </div>
    </>
  )
}
