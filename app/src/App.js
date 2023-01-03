import { useState } from "react";
import { DragAndDropList } from "./components/DragAndDrop";
import { RecommendedPlaylists } from "./components/RecommendedPlaylists";

function App() {
  const [inversionResult, setInversionResult] = useState(null)
  return (
    <div className="flex flex-col items-center justify-center m-6">
      <h1 className="font-bold text-xl">Ordene as músicas de acordo com sua preferência</h1>
      <DragAndDropList inversionResult={inversionResult} setInversionResult={setInversionResult} />
      <RecommendedPlaylists inversionResult={inversionResult}/>
    </div>
  );
}

export default App;
