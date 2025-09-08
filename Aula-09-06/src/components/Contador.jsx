import { useState } from "react";
import styles from "./Contador.module.css"
export default function Contador(){

  // const estado=  useState(0)
  // // let contador= estado[0]
  // // const setContador= estado[1]

  const[contador, setContador]=useState(0)

  function increment(){
    // setContador(estado[0]+1)
    setContador(contador=> contador+1)
    
  }
  function decrement(){
    // setContador(estado[0]-1)
    setContador(contador=> contador-1)
    
  }
  function reset() {
    setContador(0);
  }

  return(
    <div className={styles.container}>
      <h1>Contador</h1>
      <div className={styles.contadorDisplay}>{contador}</div>
      <div className={styles.botaoContainer}>
        <button className={styles.botao} onClick={decrement}>-</button>
        <button className={styles.botao} onClick={increment}>+</button>
      </div>
      <button className={styles.botao} onClick={reset}>Reset</button>
    </div>
  )
}