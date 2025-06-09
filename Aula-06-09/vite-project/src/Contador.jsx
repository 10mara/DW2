import { useState } from 'react';
import Inputs from './Inputs';
import Botoes from './Botoes';

export default function IMC() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
            alert("Por favor, insira valores válidos para peso e altura.");
            return;
        }

        const imc = pesoNum / (alturaNum * alturaNum);
        setResultado(imc.toFixed(2));

        if (imc < 18.5) setClassificacao('Magreza');
        else if (imc < 24.9) setClassificacao('Normal');
        else if (imc < 29.9) setClassificacao('Sobrepeso');
        else if (imc < 39.9) setClassificacao('Obesidade');
        else setClassificacao('Obesidade grave');
    };

    return (
            <div>
                <h3>IMC: {resultado}</h3>
                <p>Classificação: {classificacao}</p>
            </div>
    );
}
