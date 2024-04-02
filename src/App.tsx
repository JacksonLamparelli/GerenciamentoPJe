import { useState } from "react";
import { InputFileUpload } from "./components/InputCSV";
import { Processo } from "./tipos/processo";
import CollapsibleTable from "./components/CollapsibleTable";
import ListGroup from "./components/ListGroup";
import { ItemSelecionado } from "./tipos/ItemSelecionado";
import { Button } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";

function App() {
  const [acervo, setAcervo] = useState<Processo[]>([]);

  function onAcervoLoaded(processos: Processo[]) {
    setAcervo(processos);
  }

  const [tarefaSelecionada, setTarefaSelecionada] = useState<ItemSelecionado>();

  function onItemSelected(processos: ItemSelecionado) {
    setTarefaSelecionada(processos);
  }

  const [gabinete, setGabinete] = useState<Processo[]>([]);

  function onGabineteLoaded(processos: Processo[]) {
    setGabinete(processos);
  }

  const [audiencias, setAudiencias] = useState<Processo[]>([]);

  function onAudienciasLoaded(processos: Processo[]) {
    setAudiencias(processos);
  }
  //iniciais
  const [iniciais, setIniciais] = useState<Processo[]>([]);

  function onIniciaisLoaded(processos: Processo[]) {
    setIniciais(processos);
  }

  //processamento
  const [processamento, setProcessamento] = useState<Processo[]>([]);

  function onProcessamentoLoaded(processos: Processo[]) {
    setProcessamento(processos);
  }

  //Expedição

  const [expedicao, setExpedicao] = useState<Processo[]>([]);

  function onExpedicaoLoaded(processos: Processo[]) {
    setExpedicao(processos);
  }

  //Recursos
  const [recursos, setRecursos] = useState<Processo[]>([]);

  function onRecursosLoaded(processos: Processo[]) {
    setRecursos(processos);
  }

  //Execução
  const [execucao, setExecucao] = useState<Processo[]>([]);

  function onExecucaoLoaded(processos: Processo[]) {
    setExecucao(processos);
  }

  //Perícias

  const [pericias, setPericias] = useState<Processo[]>([]);

  function onPericiasLoaded(processos: Processo[]) {
    setPericias(processos);
  }

  //Incapacidade

  const [incapacidade, setIncapacidade] = useState<Processo[]>([]);

  function onIncapacidadeLoaded(processos: Processo[]) {
    setIncapacidade(processos);
  }

  //RPV e Precatórios
  const [RPVePrecatorios, setRPVePrecatorios] = useState<Processo[]>([]);

  function onRPVePrecatoriosLoaded(processos: Processo[]) {
    setRPVePrecatorios(processos);
  }

  //Tarefas Residuais
  const [residuais, setResiduais] = useState<Processo[]>([]);

  function onTarefasResiduaisLoaded(processos: Processo[]) {
    setResiduais(processos);
  }

  //Sobrestados

  const [sobrestados, setSobrestados] = useState<Processo[]>([]);

  function onSobrestadosLoaded(processos: Processo[]) {
    setSobrestados(processos);
  }

  //Em Instância Superior
  const [emInstanciaSuperior, setEmInstanciaSuperior] = useState<Processo[]>(
    []
  );

  function onEmInstanciaSuperiorLoaded(processos: Processo[]) {
    setEmInstanciaSuperior(processos);
  }

  if (tarefaSelecionada === undefined) {
    return (
      <>
        <div>
          <ListGroup
            acervo={acervo}
            onItemSelected={onItemSelected}
            onGabinete={gabinete}
            onAudiencias={audiencias}
            onIniciais={iniciais}
            onProcessamento={processamento}
            onExpedicao={expedicao}
            onRecursos={recursos}
            onExecucao={execucao}
            onPericias={pericias}
            onIncapacidade={incapacidade}
            onRPVePrecatorios={RPVePrecatorios}
            onTarefasResiduais={residuais}
            onSobrestados={sobrestados}
            onEmInstanciaSuperior={emInstanciaSuperior}
          />
        </div>
        <div>
          <InputFileUpload
            onAcervoLoaded={onAcervoLoaded}
            onGabinete={onGabineteLoaded}
            onAudiencias={onAudienciasLoaded}
            onIniciais={onIniciaisLoaded}
            onProcessamento={onProcessamentoLoaded}
            onExpedicao={onExpedicaoLoaded}
            onRecursos={onRecursosLoaded}
            onExecucao={onExecucaoLoaded}
            onPericias={onPericiasLoaded}
            onIncapacidade={onIncapacidadeLoaded}
            onRPVePrecatorios={onRPVePrecatoriosLoaded}
            onTarefasResiduais={onTarefasResiduaisLoaded}
            onSobrestados={onSobrestadosLoaded}
            onEmInstanciaSuperior={onEmInstanciaSuperiorLoaded}
          />
        </div>
      </>
    );
  }

  if (tarefaSelecionada != undefined) {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Button
            variant="contained"
            onClick={() => setTarefaSelecionada(undefined)}
          >
            <UndoIcon></UndoIcon>
          </Button>
        </div>

        <div>
          <CollapsibleTable
            tarefaSelecionada={tarefaSelecionada}
            acervo={acervo}
          />
        </div>
      </>
    );
  }
}

export default App;
