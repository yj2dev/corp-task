import ListPage from "./pages/ListPage";
import MyStore from "./store.js";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  return (
    <MyStore.Provider value={{ list, setList }}>
      <layout>
        <ListPage />
      </layout>
    </MyStore.Provider>
  );
}

export default App;
