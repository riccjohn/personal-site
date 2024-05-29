import React from 'react'

type VimStatusBarBottomProps = {
  branchName?: string
  mode?: string
}

const VimStatusBarBottom: React.FC<VimStatusBarBottomProps> = ({
  branchName = 'main',
  mode = 'NORMAL',
}) => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  })
  return (
    <div className='flex h-6 w-full  justify-center bg-nosferatu-900 font-mono sm:justify-between '>
      <div id='left' className='flex'>
        {mode && (
          <div className='hidden sm:flex'>
            <span className='size-fit bg-dracula-cyan-400 px-4'>
              <p className='text-nosferatu'>{mode}</p>
            </span>
            <div
              id='right-arrow'
              className='z-10 size-0 border-y-[12px] border-l-[12px] border-y-transparent border-l-dracula-cyan-400'
            />
          </div>
        )}
        {branchName && (
          <div className='relative left-[-12px] hidden bg-transparent md:flex'>
            <span className=' bg-dracula-darker-700 pl-4 pr-2'>
              <p className='text-dracula-cyan-400'>{branchName}</p>
            </span>
            <div
              id='right-arrow'
              className='size-0 border-y-[12px] border-l-[12px] border-y-transparent border-l-dracula-darker-700'
            />
          </div>
        )}
      </div>
      <div id='center'>
        <p className='text-dracula-cyan-400'>
          Made with <span className='text-dracula-pink-300'>❤</span> in
          Madison, WI
        </p>
      </div>
      <div id='right' className='hidden sm:flex'>
        <div
          id='lef-arrow'
          className='size-0 border-y-[12px] border-r-[12px] border-y-transparent border-r-dracula-cyan-400'
        />

        <span className='size-fit bg-dracula-cyan-400 px-4'>
          <p className='text-nosferatu'>{currentTime}</p>
        </span>
      </div>
    </div>
  )
}

export default VimStatusBarBottom
