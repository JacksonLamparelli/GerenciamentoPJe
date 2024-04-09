import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ChangeEvent } from "react";
import { Processo } from "../tipos/processo";
import { DateTime } from "luxon";

interface Props {
  onAcervoLoaded: (processos: Processo[]) => void;
  onGabinete: (processos: Processo[]) => void;
  onGabineteMinimo: (minimo2: string) => void;
  onAudiencias: (processos: Processo[]) => void;
  onAudienciasMinimo: (minimo2: string) => void;
  onIniciais: (processos: Processo[]) => void;
  onIniciaisMinimo: (minimo2: string) => void;
  onProcessamento: (processos: Processo[]) => void;
  onProcessamentoMinimo: (minimo2: string) => void;
  onExpedicao: (processos: Processo[]) => void;
  onExpedicaoMinimo: (minimo2: string) => void;
  onRecursos: (processos: Processo[]) => void;
  onRecursosMinimo: (minimo2: string) => void;
  onExecucao: (processos: Processo[]) => void;
  onExecucaoMinimo: (minimo2: string) => void;
  onPericias: (processos: Processo[]) => void;
  onPericiasMinimo: (minimo2: string) => void;
  onIncapacidade: (processos: Processo[]) => void;
  onIncapacidadeMinimo: (minimo2: string) => void;
  onRPVePrecatorios: (processos: Processo[]) => void;
  onRPVMinimo: (minimo2: string) => void;
  onTarefasResiduais: (processos: Processo[]) => void;
  onResiduaisMinimo: (minimo2: string) => void;
  onSobrestados: (processos: Processo[]) => void;
  onSobrestadosMinimo: (minimo2: string) => void;
  onEmInstanciaSuperior: (processos: Processo[]) => void;
  onTurmasMinimo: (minimo2: string) => void;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export function InputFileUpload(props: Props) {
  function onChange(evento: ChangeEvent<HTMLInputElement>) {
    if (evento.target.files != null) {
      const arquivo = evento.target.files[0];
      arquivo.text().then((conteudoArquivo) => {
        const linhas = conteudoArquivo.split("\n").slice(1);
        const processos = linhas.map(processaLinhaCSV);
        props.onAcervoLoaded(processos);

        //DateTime (data1 - ultimo movimento) geral
        function data1(processos: Processo[]) {
          processos.map(
            (processos) =>
              (processos.data1 = DateTime.fromFormat(
                processos.dt_ultimo_movimento,
                "dd/MM/yyyy HH:mm:ss"
              ))
          );

          //DateTime (data2 - entrada na tarefa) geral
          processos.map(
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
          processos.forEach(
            (processos) =>
              (processos.minimo = comparaDatas(
                processos.data1,
                processos.data2
              ))
          );

          processos.sort((a, b) => {
            if (a.minimo < b.minimo) {
              return -1;
            }

            if (a.minimo > b.minimo) {
              return 1;
            }

            return 0;
          });

          //Define minimo2: string correspondente ao minimo1
          processos.map(
            (processos) =>
              (processos.minimo2 = processos.minimo.toLocaleString())
          );

          return processos[0].minimo2;
        }

        const gabineteMinimo = processos.filter(
          (processo) =>
            processo.tarefa_atual === "[JEF-GAB] Recebidos da secretaria" ||
            processo.tarefa_atual ===
              "[JEF-GAB] Conclusos - Minutar Sentença" ||
            processo.tarefa_atual === "[JEF-GAB] Conclusos - Minutar Decisão" ||
            processo.tarefa_atual ===
              "[JEF-GAB] Conclusos - Assinar Sentença" ||
            processo.tarefa_atual === "[JEF-GAB] Conclusos - Assinar Decisão"
        );
        const audiencias = processos.filter(
          (processo) =>
            processo.tarefa_atual ===
              "[JEF-AUD] Verificar providências posteriores à audiência" ||
            processo.tarefa_atual ===
              "[JEF-AUD] Aguardando realização de audiência"
        );
        const iniciais = processos.filter(
          (processo) =>
            processo.tarefa_atual === "[JEF-INICIAL] Triagem Inicial" ||
            processo.tarefa_atual === "[JEF-INICIAL] Análise de secretaria" ||
            processo.tarefa_atual ===
              "[JEF-INICIAL] Analisar manifestação parcial" ||
            processo.tarefa_atual === "[JEF-INICIAL] Minutar Ato - Decisão" ||
            processo.tarefa_atual === "[JEF-INICIAL] Minutar Ato - Despacho" ||
            processo.tarefa_atual === "[JEF-INICIAL] Minutar Ato - Sentença" ||
            processo.tarefa_atual === "[JEF-INICIAL] Minutar ato ordinatório" ||
            processo.tarefa_atual ===
              "[JEF-INICIAL] Processos sem contestação padrão - Triagem" ||
            processo.tarefa_atual ===
              "[JEF-INICIAL] Processo com prazo em curso" ||
            processo.tarefa_atual === "[JEF-INICIAL] Cumprir determinações" ||
            processo.tarefa_atual === "[JEF-INICIAL] Avaliar determinações" ||
            processo.tarefa_atual ===
              "[JEF-INICIAL] Avaliar determinações - Sentença" ||
            processo.tarefa_atual === "[JEF-INICIAL] Assinar ato ordinatório" ||
            processo.tarefa_atual ===
              "[JEF-INICIAL] Revisar Minuta - Despacho" ||
            processo.tarefa_atual ===
              "[JEF-INICIAL] Revisar Minuta - Decisão" ||
            processo.tarefa_atual === "[JEF-INICIAL] Revisar Minuta - Sentença"
        );
        const processamento = processos.filter(
          (processo) =>
            processo.tarefa_atual === "[JEF-PROC] Triagem Inicial" ||
            processo.tarefa_atual === "[JEF-PROC] Análise de secretaria" ||
            processo.tarefa_atual ===
              "[JEF-PROC] Analisar manifestação parcial" ||
            processo.tarefa_atual === "[JEF-PROC] Minutar Ato - Decisão" ||
            processo.tarefa_atual === "[JEF-PROC] Minutar Ato - Despacho" ||
            processo.tarefa_atual === "[JEF-PROC] Minutar Ato - Sentença" ||
            processo.tarefa_atual === "[JEF-PROC] Minutar ato ordinatório" ||
            processo.tarefa_atual ===
              "[JEF-PROC] Processo com prazo em curso" ||
            processo.tarefa_atual ===
              "[JEF-PROC] Análise de secretaria - Remetidos ao INSS" ||
            processo.tarefa_atual === "[JEF-PROC] Cumprir determinações" ||
            processo.tarefa_atual === "[JEF-PROC] Avaliar determinações" ||
            processo.tarefa_atual ===
              "[JEF-PROC] Avaliar determinações - Sentença" ||
            processo.tarefa_atual === "[JEF-PROC] Assinar ato ordinatório" ||
            processo.tarefa_atual === "[JEF-PROC] Revisar Minuta - Despacho" ||
            processo.tarefa_atual === "[JEF-PROC] Revisar Minuta - Decisão" ||
            processo.tarefa_atual === "[JEF-PROC] Revisar Minuta - Sentença"
        );
        const expedicao = processos.filter(
          (processo) =>
            processo.tarefa_atual === "[JEF-EXP] Análise de secretaria" ||
            processo.tarefa_atual ===
              "[JEF-EXP] Analisar manifestação parcial" ||
            processo.tarefa_atual ===
              "[JEF-EXP] Aguardando devolução do mandado" ||
            processo.tarefa_atual ===
              "[JEF-EXP] Avaliar expedientes assinados" ||
            processo.tarefa_atual === "[JEF-EXP] Assinar Ofício - Diretor" ||
            processo.tarefa_atual === "[JEF-EXP] Cumprir determinações" ||
            processo.tarefa_atual === "[JEF-EXP] Minutar Carta Precatória" ||
            processo.tarefa_atual === "[JEF-EXP] Processo com prazo em curso"
        );
        const recursos = processos.filter(
          (processo) =>
            processo.tarefa_atual === "[JEF-REC] Triagem Inicial" ||
            processo.tarefa_atual === "[JEF-REC] Análise de secretaria" ||
            processo.tarefa_atual ===
              "[JEF-REC] Analisar manifestação parcial" ||
            processo.tarefa_atual ===
              "[JEF-REC] Análise de secretaria - Remetidos ao INSS" ||
            processo.tarefa_atual === "[JEF-REC] Minutar Ato - Decisão" ||
            processo.tarefa_atual === "[JEF-REC] Minutar Ato - Despacho" ||
            processo.tarefa_atual === "[JEF-REC] Minutar Ato - Sentença" ||
            processo.tarefa_atual === "[JEF-REC] Minutar ato ordinatório" ||
            processo.tarefa_atual === "[JEF-REC] Assinar ato ordinatório" ||
            processo.tarefa_atual === "[JEF-REC] Cumprir determinações" ||
            processo.tarefa_atual === "[JEF-REC] Avaliar determinações" ||
            processo.tarefa_atual ===
              "[JEF-REC] Avaliar determinações - Sentença" ||
            processo.tarefa_atual ===
              "[JEF-REC] Recebido da instância superior" ||
            processo.tarefa_atual ===
              "[JEF-REC] Remeter à Instância Superior" ||
            processo.tarefa_atual === "[JEF-REC] Processo com prazo em curso"
        );
        const execucao = processos.filter(
          (processo) =>
            processo.tarefa_atual === "[JEF-EXEC] Triagem Inicial" ||
            processo.tarefa_atual === "[JEF-EXEC] Análise de secretaria" ||
            processo.tarefa_atual ===
              "[JEF-EXEC] Analisar manifestação parcial" ||
            processo.tarefa_atual ===
              "[JEF-EXEC] Análise de secretaria - Remetidos ao INSS" ||
            processo.tarefa_atual === "[JEF-EXEC] Minutar Ato - Decisão" ||
            processo.tarefa_atual === "[JEF-EXEC] Minutar Ato - Despacho" ||
            processo.tarefa_atual === "[JEF-EXEC] Minutar Ato - Sentença" ||
            processo.tarefa_atual === "[JEF-EXEC] Minutar ato ordinatório" ||
            processo.tarefa_atual === "[JEF-EXEC] Assinar ato ordinatório" ||
            processo.tarefa_atual === "[JEF-EXEC] Avaliar determinações" ||
            processo.tarefa_atual ===
              "[JEF-EXEC] Avaliar determinações - Sentença" ||
            processo.tarefa_atual === "[JEF-EXEC] Cumprir determinações" ||
            processo.tarefa_atual ===
              "[JEF-EXEC] Preparar certidão de trânsito em julgado" ||
            processo.tarefa_atual === "[JEF-EXEC] Recebidos da Contadoria" ||
            processo.tarefa_atual === "[JEF-EXEC] Remetidos à Contadoria" ||
            processo.tarefa_atual ===
              "[JEF-EXEC] Recebidos do INSS - DECISÃO CUMPRIDA" ||
            processo.tarefa_atual ===
              "[JEF-EXEC] Recebidos do INSS - SEM CUMPRIMENTO DE DECISÃO" ||
            processo.tarefa_atual ===
              "[JEF-EXEC] Remetidos para o INSS para cumprimento de decisão" ||
            processo.tarefa_atual === "[JEF-EXEC] Processo com prazo em curso"
        );
        const pericias = processos.filter(
          (processo) =>
            processo.tarefa_atual === "[JEF-PER] Triagem Inicial" ||
            processo.tarefa_atual === "[JEF-PER] Análise de secretaria" ||
            processo.tarefa_atual === "[JEF-PER] Administrar Perícia" ||
            processo.tarefa_atual ===
              "[JEF-PER] Analisar manifestação parcial" ||
            processo.tarefa_atual === "[JEF-PER] Minutar Ato - Decisão" ||
            processo.tarefa_atual === "[JEF-PER] Minutar Ato - Despacho" ||
            processo.tarefa_atual === "[JEF-PER] Minutar Ato - Sentença" ||
            processo.tarefa_atual === "[JEF-PER] Minutar ato ordinatório" ||
            processo.tarefa_atual === "[JEF-PER] Assinar ato ordinatório" ||
            processo.tarefa_atual === "[JEF-PER] Avaliar determinações" ||
            processo.tarefa_atual ===
              "[JEF-PER] Avaliar determinações - Sentença" ||
            processo.tarefa_atual === "[JEF-PER] Cumprir determinações" ||
            processo.tarefa_atual === "[JEF-PER] Revisar Minuta - Decisão" ||
            processo.tarefa_atual === "[JEF-PER] Revisar Minuta - Despacho" ||
            processo.tarefa_atual === "[JEF-PER] Revisar Minuta - Sentença" ||
            processo.tarefa_atual === "[JEF-PER] Processo com prazo em curso"
        );
        const inc = processos.filter(
          (processo) =>
            processo.tarefa_atual === "[JEF-INC] Análise de secretaria" ||
            processo.tarefa_atual ===
              "[JEF-INC] Analisar Manifestação Parcial" ||
            processo.tarefa_atual ===
              "[JEF-INC] Analisar manifestação sobre laudo pericial" ||
            processo.tarefa_atual === "[JEF-INC] Minutar Ato - Despacho" ||
            processo.tarefa_atual === "[JEF-INC] Minutar Ato - Decisão" ||
            processo.tarefa_atual === "[JEF-INC] Minutar Ato - Sentença" ||
            processo.tarefa_atual === "[JEF-INC] Minutar ato ordinatório" ||
            processo.tarefa_atual === "[JEF-INC] Assinar ato ordinatório" ||
            processo.tarefa_atual === "[JEF-INC] Avaliar determinações" ||
            processo.tarefa_atual ===
              "[JEF-INC] Avaliar determinações - Sentença" ||
            processo.tarefa_atual ===
              "[JEF-INC] Processo com prazo em curso - Intimação sobre laudo pericial" ||
            processo.tarefa_atual === "[JEF-INC] Processo com prazo em curso" ||
            processo.tarefa_atual === "[JEF-INC] Revisar Minuta - Despacho" ||
            processo.tarefa_atual === "[JEF-INC] Revisar Minuta - Decisão" ||
            processo.tarefa_atual === "[JEF-INC] Revisar Minuta - Sentença"
        );
        const rpv = processos.filter(
          (processo) =>
            processo.tarefa_atual === "[JEF-REQ] Triagem Inicial" ||
            processo.tarefa_atual === "[JEF-REQ] Análise de secretaria" ||
            processo.tarefa_atual ===
              "[JEF-REQ] Analisar manifestação parcial" ||
            processo.tarefa_atual ===
              "[JEF-REQ] Análise de secretaria - Remetidos ao INSS" ||
            processo.tarefa_atual === "[JEF-REQ] Minutar Ato - Despacho" ||
            processo.tarefa_atual === "[JEF-REQ] Minutar Ato - Decisão" ||
            processo.tarefa_atual === "[JEF-REQ] Minutar Ato - Sentença" ||
            processo.tarefa_atual === "[JEF-REQ] Minutar certidão" ||
            processo.tarefa_atual === "[JEF-REQ] Minutar ato ordinatório" ||
            processo.tarefa_atual === "[JEF-REQ] Expedir ofício requisitório" ||
            processo.tarefa_atual === "[JEF-REQ] Revisar ofício requisitório" ||
            processo.tarefa_atual === "[JEF-REQ] Assinar ato ordinatório" ||
            processo.tarefa_atual === "[JEF-REQ] Assinar certidão" ||
            processo.tarefa_atual === "[JEF-REQ] Avaliar determinações" ||
            processo.tarefa_atual ===
              "[JEF-REQ] Avaliar determinações - Sentença" ||
            processo.tarefa_atual === "[JEF-REQ] Processo com prazo em curso" ||
            processo.tarefa_atual === "[JEF-REQ] Processo com prazo em curso" ||
            processo.tarefa_atual === "[JEF-REQ] Revisar Minuta - Despacho" ||
            processo.tarefa_atual === "[JEF-REQ] Revisar Minuta - Decisão" ||
            processo.tarefa_atual === "[JEF-REQ] Revisar Minuta - Sentença"
        );
        const residuais = processos.filter(
          (processo) =>
            processo.tarefa_atual ===
              "[JEF-AUX] Recebidos do Substituto Legal" ||
            processo.tarefa_atual ===
              "[JEF] Arquivo permanente - Analisar petição" ||
            processo.tarefa_atual === "[JEF] Sobrestados - Analisar petição" ||
            processo.tarefa_atual ===
              "[JEF] Sobrestados por Motivos Diversos - Analisar petição" ||
            processo.tarefa_atual === "[JEF] Nomear perito - Integração AJG" ||
            processo.tarefa_atual === "[JEF] Análise da distribuição" ||
            processo.tarefa_atual ===
              "[JEF] Verificar pendências anteriores ao arquivamento"
        );
        const sobrestados = processos.filter(
          (processo) =>
            processo.tarefa_atual ===
              "[JEF] Sobrestado por Determinação de Tribunais Superiores" ||
            processo.tarefa_atual ===
              "[JEF] Sobrestados por Determinação em IRDR ou IAC" ||
            processo.tarefa_atual ===
              "[JEF] Sobrestados por Motivos Diversos" ||
            processo.tarefa_atual ===
              "[JEF] Sobrestados por Motivos Diversos - SISJEF"
        );
        const turmas = processos.filter(
          (processo) =>
            processo.tarefa_atual ===
              "[JEF-REC] Aguardando julgamento pela instância superior" ||
            processo.tarefa_atual ===
              "[JEF-PROC] Aguardando julgamento pela instância superior"
        );

        props.onGabinete(gabineteMinimo);
        props.onGabineteMinimo(data1(gabineteMinimo));

        props.onAudiencias(audiencias);
        props.onAudienciasMinimo(data1(audiencias));

        props.onIniciais(iniciais);
        props.onIniciaisMinimo(data1(iniciais));

        props.onProcessamento(processamento);
        props.onProcessamentoMinimo(data1(processamento));

        props.onExpedicao(expedicao);
        props.onExpedicaoMinimo(data1(expedicao));

        props.onRecursos(recursos);
        props.onRecursosMinimo(data1(recursos));

        props.onExecucao(execucao);
        props.onExecucaoMinimo(data1(execucao));

        props.onPericias(pericias);
        props.onPericiasMinimo(data1(pericias));

        props.onIncapacidade(inc);
        props.onIncapacidadeMinimo(data1(inc));

        props.onRPVePrecatorios(rpv);
        props.onRPVMinimo(data1(rpv));

        props.onTarefasResiduais(residuais);
        props.onResiduaisMinimo(data1(residuais));

        props.onSobrestados(sobrestados);
        props.onSobrestadosMinimo(data1(sobrestados));

        props.onEmInstanciaSuperior(turmas);
        props.onTurmasMinimo(data1(turmas));
      });
    }
  }

  function processaLinhaCSV(linha: string): Processo {
    // array destructuring
    const [
      processo,
      data_distribuicao,
      codigo_classe,
      sigla_classe,
      classe_judicial,
      situacao_atual,
      materia,
      cod_assunto,
      assunto_principal,
      orgao_atual,
      qtde_autor,
      autor,
      doc_autor,
      qtde_reu,
      reu,
      doc_reu,
      dt_ultimo_movimento,
      ultimo_movimento,
      tarefa_atual,
      data_entrada_tarefa,
      valor_causa,
      cargo_judicial,
      etiquetas,
      municipio_autor,
      endereco_autor,
      municipio_reu,
      endereco_reu,
      advogado_pa,
      advogado_pp,
      dpu,
      mpf,
      dt_evento_primeira_distribuicao,
      dt_primeiro_evento,
      todas_situacoes,
    ] = linha.split(";").map((coluna) => coluna.slice(1, -1));

    return {
      //retorna um objeto com os atributos abaixo, recebendo os valores das variáveis acima;
      processo,
      data_distribuicao,
      codigo_classe,
      sigla_classe,
      classe_judicial,
      situacao_atual,
      materia,
      cod_assunto,
      assunto_principal,
      orgao_atual,
      qtde_autor,
      autor,
      doc_autor,
      qtde_reu,
      reu,
      doc_reu,
      dt_ultimo_movimento,
      ultimo_movimento,
      tarefa_atual,
      data_entrada_tarefa,
      valor_causa,
      cargo_judicial,
      etiquetas,
      municipio_autor,
      endereco_autor,
      municipio_reu,
      endereco_reu,
      advogado_pa,
      advogado_pp,
      dpu,
      mpf,
      dt_evento_primeira_distribuicao,
      dt_primeiro_evento,
      todas_situacoes,
    };
  }

  return (
    <Button
      component="label"
      id="b_csv"
      role={undefined}
      variant="contained"
      tabIndex={-1}
    >
      Carregar Arquivo CSV
      <VisuallyHiddenInput
        type="file"
        accept=".csv"
        onChange={(event) => onChange(event)}
      />
    </Button>
  );
}
