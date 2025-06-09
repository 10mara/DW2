import Contador from './Contador'
import './App.css'
import Inputs from './Inputs'
import Botoes from './Botoes'

function App() {
  
  return (
    <div className='conteiner'>
      <h1>CALCULADORA IMC</h1>
      <Inputs peso={peso} setPeso={setPeso} altura={altura} setAltura={setAltura} />
      <Botoes onCalcular={calcularIMC} />
      <Contador/>
    </div>
  )
}

export default App
