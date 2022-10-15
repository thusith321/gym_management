import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddClient from "./pages/AddClient";
import ClientAdminView from "./pages/ClientAdminView";

function App() {
  return (
  <BrowserRouter>    
    <Routes>
      <Route path="/" element={<AddClient/>} />
      <Route path="/dash-view" element={<ClientAdminView/>} />
    

    </Routes>
  </BrowserRouter>
  );
}

export default App;