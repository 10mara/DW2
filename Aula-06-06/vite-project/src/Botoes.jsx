import './Botoes.css'
function Botoes({onIncrement, onDecrement}){
    return(
        <div>
            <button onClick={onDecrement} style={{marginRight: '10px'}}> - </button>
            <button onClick={onIncrement}> + </button>
        </div>
    );
}
export default Botoes;