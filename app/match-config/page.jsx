'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const page = () => {
    const [clientPlayers, setClientPlayers] = useState([])
    const [dbPlayers, setDbPlayers] = useState([])
    const [playerUsername, setPlayerUsername] = useState('')
    const [matchId, setMatchId] = useState('');

    useEffect(() => {
        let id = JSON.parse(localStorage.getItem('matchId'))
        setMatchId(id)
        console.log(matchId)
    }, [])

    const handlePlayerAddition = () => {
        setClientPlayers(prev => [...prev, playerUsername])
        
        axios.post('http:localhost:5000/insert/player', {
            player: playerUsername,
            match: matchId
        }).catch((error => console.log(error)))

        setPlayerUsername('')
    }
  return (
    <div className="match-config-container">
        <div className="title-container">
            <p>Players in this competition</p>
        </div>
        <div className="input-container">
            <input 
                className="input-field" 
                placeholder='Player name or username' 
                value={playerUsername}
                onChange={(e) => setPlayerUsername(e.target.value)}
            />
            <button className="add-button" onClick={handlePlayerAddition}>Add</button>
        </div>
        <div className="listing-container">
        <table className="custom-table">
            <thead>
                <tr>
                    <th className="table-header">ID</th>
                    <th className="table-header">Player</th>
                </tr>
            </thead>
            <tbody>
                {clientPlayers.map((player, index) => (
                    <tr key={index} className="table-row">
                        <td className="table-cell">{index + 1}</td>
                        <td className="table-cell">{player}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        </div>
    </div>

  )
}

export default page
