import { DragAndDropList } from "./components/DragAndDrop";

function App() {
  return (
    <div className="flex flex-col items-center justify-center m-6">
      <h1 className="font-bold text-xl">Ordene as músicas de acordo com sua preferência</h1>
      <DragAndDropList />
    </div>
  );
}

export default App;
