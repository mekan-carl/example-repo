import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./components/Success";
import Home from "./pages/home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/succes" element={<Success />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
