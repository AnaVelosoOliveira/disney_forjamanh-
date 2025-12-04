import { useState, useEffect } from 'react'
import s from './App.module.css'
import { api } from './api/api'
import { Card } from './components/Card.jsx'

function App() {
  const [data, setData] = useState([])
  const [ searchName, setSearchName] = useState("")
  const [ searchPage, setSearchPage] = useState("")

  useEffect(() => {
    api.get(`/character/?name=${searchName}&page=${searchPage}`).then((response) => {
      setData(response.data.data)
    }).catch((error) => {
      console.error("NÃO FOI POSSÍVEL ACESSAR O API ", error)
    })
  }, [searchPage, searchName])

  return (
    <>
    <h1 className={s.title}>Disney</h1>
    <main>
      <div className={s.wrapinput}>
      <input type="text" value={searchPage} onChange={(e) => setSearchPage(e.target.value)} placeholder='1/197'/>
      <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder='Procure um personagem'/>

      </div>
    
    <div className={s.wrapCards}>
      {data.map((item, index) => {
        return(
        <div key={index}>
          <Card image={item.imageUrl} name={item.name}/>
        </div>
        )
      })}



    </div>
    
    </main>
    </>
  )
}

export default App
