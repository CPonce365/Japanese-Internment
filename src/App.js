import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PearlHarbor from "./pages/PearlHarbor";
import Distinguish from "./pages/Distinguish";
import Camp from "./pages/Camp";
import Error from "./pages/Error";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pearlharbor" element={<PearlHarbor />} />
        <Route path="/distinguish" element={<Distinguish />} />
        <Route path="/camp" element={<Camp />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
