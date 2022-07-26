export default function Personal() {
  return (
    <section>
      <h2 className="text-lg font-bold mb-4">Personal projects:</h2>
      <ul>
        <li>This personal website</li>
        <li>
          <a
            className="link"
            href="https://motes.jordicapellades.dev/"
            target="_blank"
          >
            Motes
          </a>
          , a simple note app
        </li>
        <li>A Spotify clone with Next and Tailwind</li>
        <li>Vault, a personal password manager. (In process)</li>
      </ul>
    </section>
  )
}
