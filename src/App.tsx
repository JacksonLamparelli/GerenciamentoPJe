import { useState } from "react";
import { InputFileUpload } from "./components/InputCSV";
import { Processo } from "./tipos/processo";
import CollapsibleTable from "./components/CollapsibleTable";
import ListGroup from "./components/ListGroup";
import { ItemSelecionado } from "./tipos/ItemSelecionado";
import { Button } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import "./styles.css";

function App() {
  const [acervo, setAcervo] = useState<Processo[]>([]);

  function onAcervoLoaded(processos: Processo[]) {
    setAcervo(processos);
  }

  const [tarefaSelecionada, setTarefaSelecionada] = useState<ItemSelecionado>();

  function onItemSelected(processos: ItemSelecionado) {
    setTarefaSelecionada(processos);
  }

  //Gabinete
  const [gabinete, setGabinete] = useState<Processo[]>([]);

  function onGabineteLoaded(processos: Processo[]) {
    setGabinete(processos);
  }

  //Gabinete - Data externa
  const [gabMin, setGabMin] = useState<string>();

  function onGabMinLoaded(minimo2: string) {
    setGabMin(minimo2);
  }

  //Audiências
  const [audiencias, setAudiencias] = useState<Processo[]>([]);

  function onAudienciasLoaded(processos: Processo[]) {
    setAudiencias(processos);
  }

  //Audiências - Data externa
  const [audMin, setAudMin] = useState<string>();

  function onAudMinLoaded(minimo2: string) {
    setAudMin(minimo2);
  }

  //iniciais
  const [iniciais, setIniciais] = useState<Processo[]>([]);

  function onIniciaisLoaded(processos: Processo[]) {
    setIniciais(processos);
  }

  //Iniciais - Data externa
  const [inicMin, setInicMin] = useState<string>();

  function onInicMinLoaded(minimo2: string) {
    setInicMin(minimo2);
  }

  //processamento
  const [processamento, setProcessamento] = useState<Processo[]>([]);

  function onProcessamentoLoaded(processos: Processo[]) {
    setProcessamento(processos);
  }

  //Processamento - Data externa
  const [procMin, setProcMin] = useState<string>();

  function onProcMinLoaded(minimo2: string) {
    setProcMin(minimo2);
  }

  //Expedição

  const [expedicao, setExpedicao] = useState<Processo[]>([]);

  function onExpedicaoLoaded(processos: Processo[]) {
    setExpedicao(processos);
  }

  //Expedição - Data externa
  const [expMin, setExpMin] = useState<string>();

  function onExpMinLoaded(minimo2: string) {
    setExpMin(minimo2);
  }

  //Recursos
  const [recursos, setRecursos] = useState<Processo[]>([]);

  function onRecursosLoaded(processos: Processo[]) {
    setRecursos(processos);
  }

  //Recursos - Data externa
  const [recMin, setRecMin] = useState<string>();

  function onRecMinLoaded(minimo2: string) {
    setRecMin(minimo2);
  }

  //Execução
  const [execucao, setExecucao] = useState<Processo[]>([]);

  function onExecucaoLoaded(processos: Processo[]) {
    setExecucao(processos);
  }

  //Execução - Data externa
  const [execMin, setExecMin] = useState<string>();

  function onExecMinLoaded(minimo2: string) {
    setExecMin(minimo2);
  }

  //Perícias

  const [pericias, setPericias] = useState<Processo[]>([]);

  function onPericiasLoaded(processos: Processo[]) {
    setPericias(processos);
  }

  //Perícias - Data externa
  const [perMin, setPerMin] = useState<string>();

  function onPerMinLoaded(minimo2: string) {
    setPerMin(minimo2);
  }

  //Incapacidade

  const [incapacidade, setIncapacidade] = useState<Processo[]>([]);

  function onIncapacidadeLoaded(processos: Processo[]) {
    setIncapacidade(processos);
  }

  //Incapacidade - Data externa
  const [incMin, setIncMin] = useState<string>();

  function onIncMinLoaded(minimo2: string) {
    setIncMin(minimo2);
  }

  //RPV e Precatórios
  const [RPVePrecatorios, setRPVePrecatorios] = useState<Processo[]>([]);

  function onRPVePrecatoriosLoaded(processos: Processo[]) {
    setRPVePrecatorios(processos);
  }

  //Requisitórios - Data externa
  const [reqMin, setReqMin] = useState<string>();

  function onRPVMinLoaded(minimo2: string) {
    setReqMin(minimo2);
  }

  //Tarefas Residuais
  const [residuais, setResiduais] = useState<Processo[]>([]);

  function onTarefasResiduaisLoaded(processos: Processo[]) {
    setResiduais(processos);
  }

  //Tarefas Residuais - Data externa
  const [residMin, setResidMin] = useState<string>();

  function onResidMinLoaded(minimo2: string) {
    setResidMin(minimo2);
  }

  //Sobrestados

  const [sobrestados, setSobrestados] = useState<Processo[]>([]);

  function onSobrestadosLoaded(processos: Processo[]) {
    setSobrestados(processos);
  }

  //Sobrestados - Data externa
  const [sobrestadosMin, setSobrestadosMin] = useState<string>();

  function onSobrestadosMinLoaded(minimo2: string) {
    setSobrestadosMin(minimo2);
  }

  //Em Instância Superior
  const [emInstanciaSuperior, setEmInstanciaSuperior] = useState<Processo[]>(
    []
  );

  function onEmInstanciaSuperiorLoaded(processos: Processo[]) {
    setEmInstanciaSuperior(processos);
  }

  //Em Instância Superior - Data externa
  const [turmasMin, setTurmasMin] = useState<string>();

  function onTurmasMinLoaded(minimo2: string) {
    setTurmasMin(minimo2);
  }

  if (tarefaSelecionada === undefined) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#0078aa",
          color: "white",
        }}
      >
        <img src="pje2-branco.png" style={{ margin: "08px" }}></img>
        <div style={{ maxWidth: "60%" }}>
          <ListGroup
            acervo={acervo}
            onItemSelected={onItemSelected}
            onGabinete={gabinete}
            onGabMin={gabMin}
            onAudiencias={audiencias}
            onAudMin={audMin}
            onIniciais={iniciais}
            onInicMin={inicMin}
            onProcessamento={processamento}
            onProcMin={procMin}
            onExpedicao={expedicao}
            onExpMin={expMin}
            onRecursos={recursos}
            onRecMin={recMin}
            onExecucao={execucao}
            onExecMin={execMin}
            onPericias={pericias}
            onPerMin={perMin}
            onIncapacidade={incapacidade}
            onIncMin={incMin}
            onRPVePrecatorios={RPVePrecatorios}
            onRPVMin={reqMin}
            onTarefasResiduais={residuais}
            onResidMin={residMin}
            onSobrestados={sobrestados}
            onSobrestadosMin={sobrestadosMin}
            onEmInstanciaSuperior={emInstanciaSuperior}
            onTurmasMin={turmasMin}
          />
        </div>
        <div style={{ margin: "05px" }}>
          <InputFileUpload
            onAcervoLoaded={onAcervoLoaded}
            onGabinete={onGabineteLoaded}
            onGabineteMinimo={onGabMinLoaded}
            onAudiencias={onAudienciasLoaded}
            onAudienciasMinimo={onAudMinLoaded}
            onIniciais={onIniciaisLoaded}
            onIniciaisMinimo={onInicMinLoaded}
            onProcessamento={onProcessamentoLoaded}
            onProcessamentoMinimo={onProcMinLoaded}
            onExpedicao={onExpedicaoLoaded}
            onExpedicaoMinimo={onExpMinLoaded}
            onRecursos={onRecursosLoaded}
            onRecursosMinimo={onRecMinLoaded}
            onExecucao={onExecucaoLoaded}
            onExecucaoMinimo={onExecMinLoaded}
            onPericias={onPericiasLoaded}
            onPericiasMinimo={onPerMinLoaded}
            onIncapacidade={onIncapacidadeLoaded}
            onIncapacidadeMinimo={onIncMinLoaded}
            onRPVePrecatorios={onRPVePrecatoriosLoaded}
            onRPVMinimo={onRPVMinLoaded}
            onTarefasResiduais={onTarefasResiduaisLoaded}
            onResiduaisMinimo={onResidMinLoaded}
            onSobrestados={onSobrestadosLoaded}
            onSobrestadosMinimo={onSobrestadosMinLoaded}
            onEmInstanciaSuperior={onEmInstanciaSuperiorLoaded}
            onTurmasMinimo={onTurmasMinLoaded}
          />
        </div>
      </div>
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
