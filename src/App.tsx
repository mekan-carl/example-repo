import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./components/Success";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
