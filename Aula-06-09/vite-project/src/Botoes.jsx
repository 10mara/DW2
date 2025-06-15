import'./Botoes.css'
export default function Botoes({ onCalcular }) {
  return (
    <div>
      <button onClick={onCalcular}>Calcular IMC</button>
    </div>
  );
}
