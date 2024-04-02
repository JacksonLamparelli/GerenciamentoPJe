import { useState } from "react";
import { InputFileUpload } from "./components/InputCSV";
import { Processo } from "./tipos/processo";
import CollapsibleTableExecucao from "./components/CollapsibleTableExecucao";

function App() {
  const [acervo, setAcervo] = useState<Processo[]>([]);

  function onAcervoLoaded(processos: Processo[]) {
    setAcervo(processos);
  }

  return (
    <>
      <div>
        <CollapsibleTableExecucao acervo={acervo} />
      </div>
      <div>
        <InputFileUpload onAcervoLoaded={onAcervoLoaded} />
      </div>
    </>
  );
}

export default App;
