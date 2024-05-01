import React from 'react'

export default {
  title: 'example/accessibility-test',
}

export const Accessible = () => <button>Accessible button</button>

export const Inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>
    Inaccessible button
  </button>
)
