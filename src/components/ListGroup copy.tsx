import { ItemSelecionado } from "../tipos/ItemSelecionado";

interface Props {
  onItemSelected: (filtro: ItemSelecionado) => void;
  onGabinete: ItemSelecionado;
  onAudiencias: ItemSelecionado;
  onIniciais: ItemSelecionado;
  onProcessamento: ItemSelecionado;
  onExpedicao: ItemSelecionado;
  onRecursos: ItemSelecionado;
  onExecucao: ItemSelecionado;
  onPericias: ItemSelecionado;
  onIncapacidade: ItemSelecionado;
  onRPVePrecatorios: ItemSelecionado;
  onTarefasResiduais: ItemSelecionado;
  onSobrestados: ItemSelecionado;
  onEmInstanciaSuperior: ItemSelecionado;
}

export function ListGroup(props: Props) {
  return (
    <>
      <h1>Setores</h1>
      <ul className="list-group">
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onGabinete)}
        >
          Gabinete
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onAudiencias)}
        >
          Audiências
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onIniciais)}
        >
          Iniciais
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onProcessamento)}
        >
          Processamento
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onExpedicao)}
        >
          Expedição
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onRecursos)}
        >
          Recursos
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onExecucao)}
        >
          Execução
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onPericias)}
        >
          Perícias
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onIncapacidade)}
        >
          Incapacidade
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onRPVePrecatorios)}
        >
          RPV e Precatórios
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onTarefasResiduais)}
        >
          Tarefas Residuais
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onSobrestados)}
        >
          Sobrestados
        </li>
        <li
          className="list-group-item"
          onClick={() => props.onItemSelected(props.onEmInstanciaSuperior)}
        >
          Em Instância Superior
        </li>
      </ul>
    </>
  );
}

export default ListGroup;
