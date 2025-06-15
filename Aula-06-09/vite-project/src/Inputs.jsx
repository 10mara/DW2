import './Inputs.css'
export default function Inputs({ peso, setPeso, altura, setAltura }) {
  return (
    <div>
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <input
        type="number"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
    </div>
  );
}

