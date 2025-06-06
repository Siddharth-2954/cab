// src/App.jsx
import { HashRouter, Route, Routes } from "react-router-dom";
import WrappedTravel from "./components/Travel";
import Services from "./components/Services";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/travel" element={<WrappedTravel />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </HashRouter>
  );
}

export default App;