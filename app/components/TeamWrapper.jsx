import React from 'react'

const TeamWrapper = ({ children }) => {
  return (
    <div style={{
        padding: '20px',
        borderRadius: '10px',
        border: '1px solid gray',
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    }}>
      {children}
    </div>
  )
}

export default TeamWrapper
