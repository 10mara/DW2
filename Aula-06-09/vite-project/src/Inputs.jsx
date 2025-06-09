import './Inputs.css'
function Inputs({ peso, setPeso, altura, setAltura }){
    
    return(
        <div>
            <input  
                type="number" 
                placeholder="Digite seu peso (kg)"
                value={peso}
                onChange={e => setPeso(e.target.value)}/>
            <input    
                type="number" 
                step="0.01"
                placeholder="Digite sua altura (m)"
                value={altura}
                onChange={e => setAltura(e.target.value)}/>
        </div>
    );
}
export default Inputs;