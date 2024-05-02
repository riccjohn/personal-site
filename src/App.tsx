import React from 'react'
import '@fontsource-variable/source-code-pro'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { VimStatusBarBottom } from './components'

const App: React.FC = () => {
  const defaultNavWidth = 18
  const defaultContentWidth = 100 - defaultNavWidth

  return (
    <div className='flex min-h-screen flex-col content-between justify-between bg-dracula-cyan-300'>
      <PanelGroup
        autoSaveId='persistence'
        direction='horizontal'
        className='h-full min-h-full grow'
      >
        <Panel
          className='bg-nosferatu text-dracula-light'
          minSize={8}
          defaultSize={defaultNavWidth}
          maxSize={25}
          data-testid='navigation-panel'
        >
          <nav className='font-mono'>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </nav>
        </Panel>
        <PanelResizeHandle className='w-2 border border-y-0 border-nosferatu bg-nosferatu-800' />
        <Panel
          className='bg-nosferatu-800 text-dracula-darker-100'
          defaultSize={defaultContentWidth}
        >
          right
        </Panel>
      </PanelGroup>
      <VimStatusBarBottom />
    </div>
  )
}

export default App
