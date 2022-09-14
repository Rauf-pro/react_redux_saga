import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NoteList from "./containers/noteList";
import AddNewNote from "./containers/addNotes";

function App() {
  return (
    <div className="App">
      {/* header part */}
      <Header />

      {/* header part */}

      {/* {Page Content} */}

      <Routes>
        <Route path="/" index element={<NoteList/>} />
        <Route path="/add-new-note" element={<AddNewNote/>}/>
      </Routes>

      {/* {Page Content} */}
    </div>
  );
}

export default App;
