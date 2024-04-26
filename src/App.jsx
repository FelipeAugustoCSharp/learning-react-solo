//import { useState } from 'react'
//import Evento from './components/Form'
//import Condicional from './components/Condicional'
//import Listas from './components/Lista'


import SeuNome from './components/SeuNome'
import './App.css'
import { useState } from 'react'
import Saudacao from './components/Saudacao'

function App() {
  //const [count, setCount] = useState(0)
  //, {framework: 'X', alunos: 123,}
  //const meusItens = ['React', 'Vue', 'Angular']  
  const [nome, setNome] = useState()

  return (
    <div>
      <h1>State Lift</h1>      
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>   
  )
}

export default App
