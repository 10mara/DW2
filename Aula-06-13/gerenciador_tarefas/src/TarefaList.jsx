import TarefaItem from './TarefaItem'

export default function TarefaList({ tarefas, onConcluir, onRemover }){
    return (
        <ul>
            {tarefas.map((tarefa) => (
                <TarefaItem
                    tarefa={tarefa}
                    onConcluir={onConcluir}
                    onRemover={onRemover}
                />
            ))}
        </ul>
    );
}