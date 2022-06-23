import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time className="text-[#a1a1aa]" dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}
