import { ItemSelecionado } from "../tipos/ItemSelecionado";

interface Props {
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

export function ParametrosFiltragem(props: Props) {
  return (props.onGabinete = {
    nomesDasTarefas: [
      "Recebidos da Secretaria",
      "Minutar Sentença",
      "Minutar Decisão",
      "Assinar Sentença",
      "Assinar Decisão",
    ],
    stringsParaFiltragem: [
      "[JEF-GAB] Recebidos da secretaria",
      "[JEF-GAB] Conclusos - Minutar Sentença",
      "[JEF-GAB] Conclusos - Minutar Decisão",
      "[JEF-GAB] Conclusos - Assinar Sentença",
      "[JEF-GAB] Conclusos - Assinar Decisão",
    ],
    totalDeTarefas: 5,
  });

  props.onAudiencias = {
    nomesDasTarefas: [
      "Providências posteriores à audiência",
      "Aguardando realização de audiência",
    ],
    stringsParaFiltragem: [
      "[JEF-AUD] Verificar providências posteriores à audiência",
      "[JEF-AUD] Aguardando realização de audiência",
    ],
    totalDeTarefas: 2,
  };

  props.onIniciais = {
    nomesDasTarefas: [
      "Triagem Inicial",
      "Análise de Secretaria",
      "Analisar Manifestação Parcial",
      "Minutar Decisão",
      "Minutar Despacho",
      "Minutar Sentença",
      "Minutar Ato Ordinatório",
      "Processos sem Contestação Padrão - Triagem",
      "Processo com Prazo em Curso",
      "Cumprir Determinações",
      "Avaliar Determinações",
      "Avaliar Determinações - Sentença",
      "Assinar Ato Ordinatório",
      "Revisar Despacho",
      "Revisar Decisão",
      "Revisar Sentença",
    ],
    stringsParaFiltragem: [
      "[JEF-INICIAL] Triagem Inicial",
      "[JEF-INICIAL] Análise de secretaria",
      "[JEF-INICIAL] Analisar manifestação parcial",
      "[JEF-INICIAL] Minutar Ato - Decisão",
      "[JEF-INICIAL] Minutar Ato - Despacho",
      "[JEF-INICIAL] Minutar Ato - Sentença",
      "[JEF-INICIAL] Minutar ato ordinatório",
      "[JEF-INICIAL] Processos sem contestação padrão - Triagem",
      "[JEF-INICIAL] Processo com prazo em curso",
      "[JEF-INICIAL] Cumprir determinações",
      "[JEF-INICIAL] Avaliar determinações",
      "[JEF-INICIAL] Avaliar determinações - Sentença",
      "[JEF-INICIAL] Assinar ato ordinatório",
      "[JEF-INICIAL] Revisar Minuta - Despacho",
      "[JEF-INICIAL] Revisar Minuta - Decisão",
      "[JEF-INICIAL] Revisar Minuta - Sentença",
    ],
    totalDeTarefas: 16,
  };

  props.onProcessamento = {
    nomesDasTarefas: [
      "Triagem Inicial",
      "Análise de Secretaria",
      "Analisar Manifestação Parcial",
      "Minutar Decisão",
      "Minutar Despacho",
      "Minutar Sentença",
      "Minutar Ato Ordinatório",
      "Processo com Prazo em Curso",
      "Análise de Secretaria - Remetidos ao INSS",
      "Cumprir Determinações",
      "Avaliar Determinações",
      "Avaliar Determinações - Sentença",
      "Assinar Ato Ordinatório",
      "Revisar Despacho",
      "Revisar Decisão",
      "Revisar Sentença",
    ],

    stringsParaFiltragem: [
      "[JEF-PROC] Triagem Inicial",
      "[JEF-PROC] Análise de secretaria",
      "[JEF-PROC] Analisar manifestação parcial",
      "[JEF-PROC] Minutar Ato - Decisão",
      "[JEF-PROC] Minutar Ato - Despacho",
      "[JEF-PROC] Minutar Ato - Sentença",
      "[JEF-PROC] Minutar ato ordinatório",
      "[JEF-PROC] Processo com prazo em curso",
      "[JEF-PROC] Análise de secretaria - Remetidos ao INSS",
      "[JEF-PROC] Cumprir determinações",
      "[JEF-PROC] Avaliar determinações",
      "[JEF-PROC] Avaliar determinações - Sentença",
      "[JEF-PROC] Assinar ato ordinatório",
      "[JEF-PROC] Revisar Minuta - Despacho",
      "[JEF-PROC] Revisar Minuta - Decisão",
      "[JEF-PROC] Revisar Minuta - Sentença",
    ],

    totalDeTarefas: 16,
  };

  props.onExpedicao = {
    nomesDasTarefas: [
      "Análise de Secretaria",
      "Analisar Manifestação Parcial",
      "Aguardando Devolução do Mandado",
      "Avaliar Expedientes Assinados",
      "Assinar Ofício - Diretor",
      "Cumprir Determinações",
      "Minutar Carta Precatória",
      "Processo com Prazo em Curso",
    ],

    stringsParaFiltragem: [
      "[JEF-EXP] Análise de secretaria",
      "[JEF-EXP] Analisar manifestação parcial",
      "[JEF-EXP] Aguardando devolução do mandado",
      "[JEF-EXP] Avaliar expedientes assinados",
      "[JEF-EXP] Assinar Ofício - Diretor",
      "[JEF-EXP] Cumprir determinações",
      "[JEF-EXP] Minutar Carta Precatória",
      "[JEF-EXP] Processo com prazo em curso",
    ],

    totalDeTarefas: 8,
  };

  props.onRecursos = {
    nomesDasTarefas: [
      "Triagem Inicial",
      "Análise de Secretaria",
      "Analisar Manifestação Parcial",
      "Análise de Secretaria - Remetidos ao INSS",
      "Minutar Decisão",
      "Minutar Despacho",
      "Minutar Sentença",
      "Minutar Ato Ordinatório",
      "Assinar Ato Ordinatório",
      "Avaliar Determinações",
      "Avaliar Determinações - Sentença",
      "Cumprir Determinações",
      "Recebido da Instância Superior",
      "Remeter à Instância Superior",
      "Processo com Prazo em Curso",
    ],

    stringsParaFiltragem: [
      "[JEF-REC] Triagem Inicial",
      "[JEF-REC] Análise de secretaria",
      "[JEF-REC] Analisar manifestação parcial",
      "[JEF-REC] Análise de secretaria - Remetidos ao INSS",
      "[JEF-REC] Minutar Ato - Decisão",
      "[JEF-REC] Minutar Ato - Despacho",
      "[JEF-REC] Minutar Ato - Sentença",
      "[JEF-REC] Minutar ato ordinatório",
      "[JEF-REC] Assinar ato ordinatório",
      "[JEF-REC] Avaliar determinações",
      "[JEF-REC] Avaliar determinações - Sentença",
      "[JEF-REC] Cumprir determinações",
      "[JEF-REC] Recebido da instância superior",
      "[JEF-REC] Remeter à Instância Superior",
      "[JEF-REC] Processo com prazo em curso",
    ],

    totalDeTarefas: 15,
  };

  props.onExecucao = {
    nomesDasTarefas: [
      "Triagem Inicial",
      "Análise de Secretaria",
      "Analisar Manifestação Parcial",
      "Análise de Secretaria - Remetidos ao INSS",
      "Minutar Decisão",
      "Minutar Despacho",
      "Minutar Sentença",
      "Minutar Ato Ordinatório",
      "Assinar Ato Ordinatório",
      "Avaliar Determinações",
      "Avaliar Determinações - Sentença",
      "Cumprir Determinações",
      "Certificar Trânsito em Julgado",
      "Recebidos da Contadoria",
      "Remetidos à Contadoria",
      "Recebidos do INSS - Decisão Cumprida",
      "Recebidos do INSS - Sem Cumprimento de Decisão",
      "Remetidos ao INSS para Cumprimento de Decisão",
      "Processo com Prazo em Curso",
    ],

    stringsParaFiltragem: [
      "[JEF-EXEC] Triagem Inicial",
      "[JEF-EXEC] Análise de secretaria",
      "[JEF-EXEC] Analisar manifestação parcial",
      "[JEF-EXEC] Análise de secretaria - Remetidos ao INSS",
      "[JEF-EXEC] Minutar Ato - Decisão",
      "[JEF-EXEC] Minutar Ato - Despacho",
      "[JEF-EXEC] Minutar Ato - Sentença",
      "[JEF-EXEC] Minutar ato ordinatório",
      "[JEF-EXEC] Assinar ato ordinatório",
      "[JEF-EXEC] Avaliar determinações",
      "[JEF-EXEC] Avaliar determinações - Sentença",
      "[JEF-EXEC] Cumprir determinações",
      "[JEF-EXEC] Preparar certidão de trânsito em julgado",
      "[JEF-EXEC] Recebidos da Contadoria",
      "[JEF-EXEC] Remetidos à Contadoria",
      "[JEF-EXEC] Recebidos do INSS - DECISÃO CUMPRIDA",
      "[JEF-EXEC] Recebidos do INSS - SEM CUMPRIMENTO DE DECISÃO",
      "[JEF-EXEC] Remetidos para o INSS para cumprimento de decisão",
      "[JEF-EXEC] Processo com prazo em curso",
    ],

    totalDeTarefas: 19,
  };

  props.onPericias = {
    nomesDasTarefas: [
      "Triagem Inicial",
      "Análise de Secretaria",
      "Administrar Perícia",
      "Triagem de Perícia",
      "Analisar Manifestação Parcial",
      "Minutar Decisão",
      "Minutar Despacho",
      "Minutar Sentença",
      "Minutar Ato Ordinatório",
      "Assinar Ato Ordinatório",
      "Avaliar Determinações",
      "Avaliar Determinações - Sentença",
      "Cumprir Determinações",
      "Revisar Despacho",
      "Revisar Decisão",
      "Revisar Sentença",
      "Processo com Prazo em Curso",
    ],

    stringsParaFiltragem: [
      "[JEF-PER] Triagem inicial",
      "[JEF-PER] Análise de secretaria",
      "[JEF-PER] Administrar Perícia",
      "[JEF-PER] Triagem de Perícia",
      "[JEF-PER] Analisar manifestação parcial",
      "[JEF-PER] Minutar Ato - Decisão",
      "[JEF-PER] Minutar Ato - Despacho",
      "[JEF-PER] Minutar Ato - Sentença",
      "[JEF-PER] Minutar ato ordinatório",
      "[JEF-PER] Assinar ato ordinatório",
      "[JEF-PER] Avaliar determinações",
      "[JEF-PER] Avaliar determinações - Sentença",
      "[JEF-PER] Cumprir determinações",
      "[JEF-PER] Revisar Minuta - Despacho",
      "[JEF-PER] Revisar Minuta - Decisão",
      "[JEF-PER] Revisar Minuta - Sentença",
      "[JEF-PER] Processo com prazo em curso",
    ],

    totalDeTarefas: 17,
  };

  props.onIncapacidade = {
    nomesDasTarefas: [
      "Análise de secretaria",
      "Analisar Manifestação Parcial",
      "Analisar Manifestação Sobre Laudo Pericial",
      "Minutar Despacho",
      "Minutar Decisão",
      "Minutar Sentença",
      "Minutar Ato ordinatório",
      "Assinar Ato ordinatório",
      "Avaliar Determinações",
      "Avaliar Determinações - Sentença",
      "Processo com Prazo em Curso  - Intimação sobre Laudo Pericial",
      "Processo com Prazo em Curso",
      "Revisar Despacho",
      "Revisar Decisão",
      "Revisar Sentença",
    ],

    stringsParaFiltragem: [
      "[JEF-INC] Análise de secretaria",
      "[JEF-INC] Analisar Manifestação Parcial",
      "[JEF-INC] Analisar manifestação sobre laudo pericial",
      "[JEF-INC] Minutar Ato - Despacho",
      "[JEF-INC] Minutar Ato - Decisão",
      "[JEF-INC] Minutar Ato - Sentença",
      "[JEF-INC] Minutar ato ordinatório",
      "[JEF-INC] Assinar ato ordinatório",
      "[JEF-INC] Avaliar determinações",
      "[JEF-INC] Avaliar determinações - Sentença",
      "[JEF-INC] Processo com prazo em curso - Intimação sobre laudo pericial",
      "[JEF-INC] Processo com prazo em curso",
      "[JEF-INC] Revisar Minuta - Despacho",
      "[JEF-INC] Revisar Minuta - Decisão",
      "[JEF-INC] Revisar Minuta - Sentença",
    ],

    totalDeTarefas: 15,
  };

  props.onRPVePrecatorios = {
    nomesDasTarefas: [
      "Triagem Inicial",
      "Análise de secretaria",
      "Analisar Manifestação Parcial",
      "Análise de secretaria - Remetidos ao INSS",
      "Minutar Despacho",
      "Minutar Decisão",
      "Minutar Sentença",
      "Minutar Certidão",
      "Minutar Ato ordinatório",
      "Expedir Ofício Requisitório",
      "Conferir Ofício Requisitório",
      "Revisar Ofício Requisitório",
      "Assinar Ato ordinatório",
      "Assinar Certidão",
      "Avaliar Determinações",
      "Avaliar Determinações - Sentença",
      "Processo com Prazo em Curso",
      "Revisar Despacho",
      "Revisar Decisão",
      "Revisar Sentença",
    ],

    stringsParaFiltragem: [
      "[JEF-REQ] Triagem inicial",
      "[JEF-REQ] Análise de secretaria",
      "[JEF-REQ] Analisar manifestação parcial",
      "[JEF-REQ] Análise de secretaria - Remetidos ao INSS",
      "[JEF-REQ] Minutar Ato - Despacho",
      "[JEF-REQ] Minutar Ato - Decisão",
      "[JEF-REQ] Minutar Ato - Sentença",
      "[JEF-REQ] Minutar certidão",
      "[JEF-REQ] Minutar ato ordinatório",
      "[JEF-REQ] Expedir ofício requisitório",
      "[JEF-REQ] Conferir ofício requisitório",
      "[JEF-REQ] Revisar ofício requisitório",
      "[JEF-REQ] Assinar ato ordinatório",
      "[JEF-REQ] Assinar certidão",
      "[JEF-REQ] Avaliar determinações",
      "[JEF-REQ] Avaliar determinações - Sentença",
      "[JEF-REQ] Processo com prazo em curso",
      "[JEF-REQ] Revisar Minuta - Despacho",
      "[JEF-REQ] Revisar Minuta - Decisão",
      "[JEF-REQ] Revisar Minuta - Sentença",
    ],

    totalDeTarefas: 20,
  };

  props.onTarefasResiduais = {
    nomesDasTarefas: [
      "Recebidos do Substituto Legal",
      "Desarquivados - Analisar Petição",
      "Sobrestados - Analisar Petição",
      "Sobrestados por Motivos Diversos - Analisar Petição",
      "Nomear Perito - Integração AJG",
      "Análise da Distribuição",
      "Arquivar",
    ],

    stringsParaFiltragem: [
      "[JEF-AUX] Recebidos do Substituto Legal",
      "[JEF] Arquivo permanente - Analisar petição",
      "[JEF] Sobrestados - Analisar petição",
      "[JEF] Sobrestados por Motivos Diversos - Analisar petição",
      "[JEF] Nomear perito - Integração AJG",
      "[JEF] Análise da distribuição",
      "[JEF] Verificar pendências anteriores ao arquivamento",
    ],

    totalDeTarefas: 7,
  };

  props.onSobrestados = {
    nomesDasTarefas: [
      "Sobrestados por Determinação de Tribunais Superiores",
      "Sobrestados por Determinação em IRDR ou IAC",
      "Sobrestados por Motivos Diversos",
      "Sobrestados por Motivos Diversos - SISJEF",
    ],

    stringsParaFiltragem: [
      "[JEF] Sobrestado por Determinação de Tribunais Superiores",
      "[JEF] Sobrestados por Determinação em IRDR ou IAC",
      "[JEF] Sobrestados por Motivos Diversos",
      "[JEF] Sobrestados por Motivos Diversos - SISJEF",
    ],

    totalDeTarefas: 4,
  };

  props.onEmInstanciaSuperior = {
    nomesDasTarefas: [
      "Aguardando julgamento pela instância superior [JEF-REC]",
      "Aguardando julgamento pela instância superior [JEF-PROC]",
    ],

    stringsParaFiltragem: [
      "[JEF-REC] Aguardando julgamento pela instância superior",
      "[JEF-PROC] Aguardando julgamento pela instância superior",
    ],

    totalDeTarefas: 2,
  };
}
