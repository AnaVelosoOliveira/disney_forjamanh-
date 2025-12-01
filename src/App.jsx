import { useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState([])

  return (
    <>
    <h1 className={setData.title}>Disney</h1>
    <main>
      <input type="text" value={''}  onChange={''} placeholder='1/50'/>
      <input type="text" value={''} onChange={''} placeholder={'Procure o personagem'} />
    </main>
    </>
  )
}

export default App
