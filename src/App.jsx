import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Clock } from './components/LocalDateTime'
import FormPage from './pages/Formulario'
import SearchBar from './components/SearchBar'
import Colors from './components/Colors'
import ListaItens from './components/ListaDeItens'


function App() {
  const [count, setCount] = useState(0)
 


  return (
    <>
      <ListaItens/>
      <h2>Botão Contador</h2>
     <button onClick={() => setCount((count) => count + 1)}>
          Contador igual: {count}
        </button> 
        <br/><br/><FormPage /><br/><br/>
        <div className='relógio'> <h3>Hora Local
        <Clock/></h3> </div>
        <br/><br/>
        
        <button> <SearchBar items={['banana','batata','boliche', 'banco','banca', 'bola ', 'bateria']} /></button>
        <Colors/>

    </>
  )
}
export default App
