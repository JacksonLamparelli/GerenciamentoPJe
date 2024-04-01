import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Processo } from "../tipos/processo";
import { ItemSelecionado } from "../tipos/ItemSelecionado";
import { DateTime } from "luxon";
import WarningAmberTwoToneIcon from "@mui/icons-material/WarningAmberTwoTone";
import { orange, red } from "@mui/material/colors";

interface Props {
  acervo: Processo[];
  tarefaSelecionada: ItemSelecionado;
}

function createData(
  acervo: Processo[],
  tarefaAtualNome: string,
  tarefaAtualFiltro: string
) {
  //comparação entre as datas de entrada na tarefa e última movimentação
  const processosNaTarefaAtual = acervo.filter(
    (processo) => processo.tarefa_atual === tarefaAtualFiltro
  );
  const quantidadeProcessosNaTarefaAtual = processosNaTarefaAtual.length;

  //Cria um DateTime com o último movimento do processo
  processosNaTarefaAtual.map(
    (processos) =>
      (processos.data1 = DateTime.fromFormat(
        processos.dt_ultimo_movimento,
        "dd/MM/yyyy HH:mm:ss"
      ))
  );

  //Cria um DateTime com a data da entrada na tarefa do processo
  processosNaTarefaAtual.map(
    (processos) =>
      (processos.data2 = DateTime.fromFormat(
        processos.data_entrada_tarefa,
        "dd/MM/yyyy HH:mm:ss"
      ))
  );

  //Compara as duas datas anteriores e retorna a mais antiga
  function comparaDatas(data1: DateTime, data2: DateTime) {
    if (data1 <= data2) {
      return data1;
    } else {
      return data2;
    }
  }

  //Atribui valores à propriedade "mínimo" de cada processo, com o
  //retorno da função anterior (comparação entre as datas)
  processosNaTarefaAtual.forEach(
    (processos) =>
      (processos.minimo = comparaDatas(processos.data1, processos.data2))
  );

  //Ordena os processos em função do atributo "mínimo"
  processosNaTarefaAtual.sort((a, b) => {
    if (a.minimo < b.minimo) {
      return -1;
    }

    if (a.minimo > b.minimo) {
      return 1;
    }

    return 0;
  });

  //minimo2 é uma string correspondente ao minimo1, que tbm é DateTime
  processosNaTarefaAtual.forEach(
    (processos) => (processos.minimo2 = processos.minimo.toLocaleString())
  );

  return {
    tarefa: tarefaAtualNome,
    processos: processosNaTarefaAtual,
    quantidadeDeProcessos: quantidadeProcessosNaTarefaAtual,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const processosOrdenados = row.processos.sort((a, b) => {
    if (a.minimo < b.minimo) {
      return -1;
    }

    if (a.minimo > b.minimo) {
      return 1;
    }

    return 0;
  });

  const processoMaisAntigo = processosOrdenados[0];
  const dataMaisAntigaString = processoMaisAntigo?.minimo2;
  const dataMaisAntigaDateTime = processoMaisAntigo?.minimo;

  function allertButtons() {
    let result;
    if (dataMaisAntigaDateTime <= DateTime.now().minus({ days: 100 })) {
      return (
        <WarningAmberTwoToneIcon
          titleAccess="Anterior a 100 dias."
          sx={{ color: red[500] }}
        />
      );
    }

    if (dataMaisAntigaDateTime <= DateTime.now().minus({ days: 60 })) {
      return (
        <WarningAmberTwoToneIcon
          titleAccess="Anterior a 60 dias."
          sx={{ color: orange[500] }}
        />
      );
    }

    if (dataMaisAntigaDateTime <= DateTime.now().minus({ days: 30 })) {
      return (
        <WarningAmberTwoToneIcon
          titleAccess="Anterior a 30 dias."
          color="success"
        />
      );
    }

    return result;
  }

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="Expandir linha"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.tarefa}
        </TableCell>
        <TableCell align="justify">{row.processos.length}</TableCell>
        <TableCell align="justify">{dataMaisAntigaString}</TableCell>
        <TableCell align="justify">{allertButtons()}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Processos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Processo</TableCell>
                    <TableCell>Assunto</TableCell>
                    <TableCell>Última movimentação</TableCell>
                    <TableCell>Data da Última Movimentação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.processos.map((processo) => (
                    <TableRow key={processo.processo}>
                      <TableCell component="th" scope="row">
                        {processo.processo}
                      </TableCell>
                      <TableCell>{processo.assunto_principal}</TableCell>
                      <TableCell>{processo.ultimo_movimento}</TableCell>
                      <TableCell>{processo.minimo2}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props: Props) {
  const totalDeTarefas = props.tarefaSelecionada.totalDeTarefas;
  //const totalGabinete = props.acervo.filter(
  //(processo) => processo.tarefa_atual === tarefasGabinete
  //);

  const rows = [];

  for (let i = 0; i < totalDeTarefas; i++) {
    rows.push(
      createData(
        props.acervo,
        props.tarefaSelecionada.nomesDasTarefas[i],
        props.tarefaSelecionada.stringsParaFiltragem[i]
      )
    );
    console.log(rows);
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Tabela Colapsável">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Tarefa</TableCell>
            <TableCell>Nº de Processos</TableCell>
            <TableCell>Data da última movimentação *</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.tarefa} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
