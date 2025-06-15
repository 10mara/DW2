import { useState } from 'react';
import './App.css';
import Inputs from './Inputs';
import Botoes from './Botoes';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(imc.toFixed(2));

    if (imc < 18.5) setClassificacao('Baixo peso');
    else if (imc >= 18.5 && imc < 24.9) setClassificacao('Peso normal');
    else if (imc >= 24.9 && imc < 29.9) setClassificacao('Excesso de peso');
    else if (imc >= 29.9 && imc < 34.9) setClassificacao('Obesidade de classe 1');
    else if (imc >= 34.9 && imc < 39.9) setClassificacao('Obesidade de classe 2');
    else setClassificacao('Obesidade de classe 3');
  };

  return (
    <div className='conteiner'>
      <h1>CALCULADORA IMC</h1>

      <Inputs peso={peso} setPeso={setPeso} altura={altura} setAltura={setAltura} />
      <Botoes onCalcular={calcularIMC} />

      {resultado && (
        <div className='resposta'>
          <h3>IMC: {resultado}</h3>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;

