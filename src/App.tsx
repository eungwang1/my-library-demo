import React from 'react'
import { useToast } from '../lib/index'
const App = () => {
  const { openToast } = useToast()
  return (
    <div>
      <button
        onClick={() =>
          openToast({
            type: 'success',
            message: 'ok',
          })
        }
      >
        클릭
      </button>
    </div>
  )
}

export default App
