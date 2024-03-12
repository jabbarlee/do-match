'use client'

import React, { useState, useEffect } from 'react'
import PlayerDisplay from '../components/PlayerDisplay'
import TeamWrapper from '../components/TeamWrapper'
import axios, { all } from 'axios'
import chunkFunction from '../lib/data/chunkFunction'

const page = () => {
    const [allPlayers, setAllPlayers] = useState([]);
    const [chunkedPlayers, setChunkedPlayers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/fetch/players').then(
            response => response.data
        ).then(data => {
            const playersArray = data.map(item => item.player)
            setAllPlayers(playersArray)
            setChunkedPlayers(chunkFunction(playersArray, 2))
        })
    }, [])

  return (
    <div style={{
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {chunkedPlayers.map(team => {
        return(
          <TeamWrapper>
            <PlayerDisplay player={team[0]}/>
            <PlayerDisplay player={team[1]}/>
          </TeamWrapper>
        )
      })}
    </div>
  )
}

export default page
