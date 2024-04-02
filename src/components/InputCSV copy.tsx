import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ChangeEvent } from "react";
import { Processo } from "../tipos/processo";

interface Props {
  onAcervoLoaded: (processos: Processo[]) => void;
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
