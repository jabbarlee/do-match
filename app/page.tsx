'use client'

import Link from 'next/link'
import { generateMatchId } from './lib/data/data';


export default function Home() {
  const handleNewMatchCreate = () => {
    let matchId = generateMatchId();
    localStorage.setItem('matchId', JSON.stringify(matchId));
  }
  
  return (
    <div className="centered-container">
      <p className="title">Welcome to DoMatch!</p>
      <Link href="/match-config">
        <button className="link-button" onClick={handleNewMatchCreate}>
          Create a match
        </button>
      </Link>
    </div>
  );
}
