import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddClient from "./pages/AddClient";
import ClientAdminView from "./pages/ClientAdminView";
import AddEquipment from "./pages/AddEquipment";
import EquipmentAdminView from "./pages/EquipmentAdminView";
import Pricecal from "./pages/Pricecal"

import AddTrainer from "./pages/AddTrainer";
import TrainerAdminView from "./pages/TrainerAdminView";

function App() {
  return (
  <BrowserRouter>    
    <Routes>
      <Route path="/" element={<AddClient/>} />
      <Route path="/dash-view" element={<ClientAdminView/>} />

      <Route path="/add" element={<AddEquipment/>} />
      <Route path="/dash-view1" element={<EquipmentAdminView/>} />
      <Route path="/cal" element={<Pricecal/>} />

      <Route path="/addt" element={<AddTrainer/>} />
      <Route path="/dash-view2" element={<TrainerAdminView/>} />
    

    </Routes>
  </BrowserRouter>
  );
}

export default App;