import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ChangeEvent } from "react";
import { Processo } from "../tipos/processo";
import { ItemSelecionado } from "../tipos/ItemSelecionado";

interface Props {
  onAcervoLoaded: (processos: Processo[]) => void;
  onGabinete: (processos: Processo[]) => void;
  onAudiencias: (processos: Processo[]) => void;
  onIniciais: (processos: Processo[]) => void;
  onProcessamento: (processos: Processo[]) => void;
  onExpedicao: (processos: Processo[]) => void;
  onRecursos: (processos: Processo[]) => void;
  onExecucao: (processos: Processo[]) => void;
  onPericias: (processos: Processo[]) => void;
  onIncapacidade: (processos: Processo[]) => void;
  onRPVePrecatorios: (processos: Processo[]) => void;
  onTarefasResiduais: (processos: Processo[]) => void;
  onSobrestados: (processos: Processo[]) => void;
  onEmInstanciaSuperior: (processos: Processo[]) => void;
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

        props.onGabinete(
          processos.filter(
            (processo) =>
              processo.tarefa_atual === "[JEF-GAB] Recebidos da secretaria" ||
              processo.tarefa_atual ===
                "[JEF-GAB] Conclusos - Minutar Sentença" ||
              processo.tarefa_atual ===
                "[JEF-GAB] Conclusos - Minutar Decisão" ||
              processo.tarefa_atual ===
                "[JEF-GAB] Conclusos - Assinar Sentença" ||
              processo.tarefa_atual === "[JEF-GAB] Conclusos - Assinar Decisão"
          )
        );

        props.onAudiencias(
          processos.filter(
            (processo) =>
              processo.tarefa_atual ===
                "[JEF-AUD] Verificar providências posteriores à audiência" ||
              processo.tarefa_atual ===
                "[JEF-AUD] Aguardando realização de audiência"
          )
        );

        props.onIniciais(
          processos.filter(
            (processo) =>
              processo.tarefa_atual === "[JEF-INICIAL] Triagem Inicial" ||
              processo.tarefa_atual === "[JEF-INICIAL] Análise de secretaria" ||
              processo.tarefa_atual === "[JEF-INICIAL] Analisar manifestação parcial" ||
              processo.tarefa_atual === "[JEF-INICIAL] Minutar Ato - Decisão" ||
              processo.tarefa_atual === "[JEF-INICIAL] Minutar Ato - Despacho" ||
              processo.tarefa_atual === "[JEF-INICIAL] Minutar Ato - Sentença" ||
              processo.tarefa_atual === "[JEF-INICIAL] Minutar ato ordinatório" ||
              processo.tarefa_atual === "[JEF-INICIAL] Processos sem contestação padrão - Triagem" ||
              processo.tarefa_atual === "[JEF-INICIAL] Processo com prazo em curso" ||
              processo.tarefa_atual === "[JEF-INICIAL] Cumprir determinações" ||
              processo.tarefa_atual === "[JEF-INICIAL] Avaliar determinações" ||
              processo.tarefa_atual === "[JEF-INICIAL] Avaliar determinações - Sentença" ||
              processo.tarefa_atual === "[JEF-INICIAL] Assinar ato ordinatório" ||
              processo.tarefa_atual === "[JEF-INICIAL] Revisar Minuta - Despacho" ||
              processo.tarefa_atual === "[JEF-INICIAL] Revisar Minuta - Decisão" ||
              processo.tarefa_atual === "[JEF-INICIAL] Revisar Minuta - Sentença"
          )
        );
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
