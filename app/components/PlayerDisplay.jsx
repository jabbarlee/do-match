import React from 'react'

function PlayerDisplay({ player }) {
  return (
    <div style={{
        padding: '10px',
        borderRadius: '25px',
        backgroundColor: 'gray',
        width: 'fit-content',
        color: 'white'
    }}>
      {player}
    </div>
  )
}

export default PlayerDisplay
