import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

const App: React.FC = () => {
  return (
    <PanelGroup
      autoSaveId='persistence'
      direction='horizontal'
      className='min-h-screen'
    >
      <Panel
        className='bg-nosferatu text-dracula-light'
        minSize={8}
        defaultSize={18}
        maxSize={25}
        data-testid='navigation-panel'
      >
        <nav>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </nav>
      </Panel>
      <PanelResizeHandle className='w-2 border border-y-0 border-nosferatu bg-nosferatu-800' />
      <Panel className='bg-nosferatu-800 text-dracula-darker-100'>right</Panel>
    </PanelGroup>
  )
}

export default App
