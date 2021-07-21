import React from 'react'

import { useMyHook } from '@elmnt/use-hooks'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
