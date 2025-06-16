
export default function TarefaItem({ tarefa, onConcluir, onRemover }) {
    return (
        <li>
            <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
                {tarefa.descricao}
            </span>
            <button onClick={() => onConcluir(tarefa.id)}>
                {tarefa.concluida ? 'Desfazer' : 'Concluir'}
            </button>
            <button onClick={() => onRemover(tarefa.id)} >Remover</button>
        </li>
    );
}