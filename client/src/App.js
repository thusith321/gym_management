import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEquipment from "./pages/AddEquipment";
import EquipmentAdminView from "./pages/EquipmentAdminView";
import Pricecal from "./pages/Pricecal"

function App() {
  return (
  <BrowserRouter>    
    <Routes>
      <Route path="/" element={<AddEquipment/>} />
      <Route path="/dash-view" element={<EquipmentAdminView/>} />
      <Route path="/cal" element={<Pricecal/>} />
    

    </Routes>
  </BrowserRouter>
  );
}

export default App;