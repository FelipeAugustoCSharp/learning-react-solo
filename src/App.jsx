//import { useState } from 'react'
//import Evento from './components/Form'
//import Condicional from './components/Condicional'
import Listas from './components/Lista'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  //, {framework: 'X', alunos: 123,}
  const meusItens = ['React', 'Vue', 'Angular']
  return (
    <div>
      <h1>Renderização De Listas</h1>      
      <Listas itens={meusItens}/>
      <Listas itens={[]}/>
    </div>   
  )
}

export default App
