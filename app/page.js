"use client";

import Link from 'next/link'
// import the cases in lib/cases.mjs
import { cases } from '@/app/lib/cases'
import { useEffect } from 'react'

export default function Home() {
  // Get the url and log it using useEffect
  useEffect(() => {
    // Parse the fragment part of the url after # as query string format
    const url = new URL(window.location.href);
    const fragment = url.hash.substring(1);
    const params = new URLSearchParams(fragment);

    params.forEach((value, key) => {
      localStorage.setItem(key, value);
    });
  }, []);

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
