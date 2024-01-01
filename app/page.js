import Link from 'next/link'
// import the cases in lib/cases.mjs
import { cases } from '@/app/lib/cases'

export default function Home() {
  // Display a list of links to the cases
  // with the title of each case
  return (
    <div>
      <h1>Case List</h1>
      <ul>
        {Object.keys(cases).map((key) => (
          <li key={key}>
            <Link href={`/chat/${key}/0`}>
              {cases[key].title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
