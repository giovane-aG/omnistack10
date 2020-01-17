import React, { useEffect, useState } from 'react';
import api from './services/api'

import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

// Componente: Bloco isolado de HTML, CSS, JS que não interfere no resto da app e que pode ser reaproveitado.
// Estado: Informações mantida pelo componente (Lembrar: imutabilidade)
// Propriedade: Informações que um componente pai passa para o componente filho

function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }
    loadDevs()
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)
    
    setDevs([...devs, response.data])
  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App;
