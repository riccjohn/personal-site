import React from 'react'

const VimStatusBarBottom: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  })

  const mode = 'NORMAL'

  return (
    <div className='flex h-6 w-full justify-between bg-nosferatu-900 font-mono'>
      <div className='flex'>
        <span className='size-fit bg-dracula-cyan-400'>
          <p className='text-nosferatu'>{mode}</p>
        </span>
        <span className='bg-dracula-darker-700'>
          <p className='text-dracula-cyan-400'>123-main</p>
        </span>
      </div>
      <div className='flex'>
        <span className='size-fit bg-dracula-cyan-400'>
          <p className='text-nosferatu'>{currentTime}</p>
        </span>
      </div>
    </div>
  )
}

export default VimStatusBarBottom
