import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyNavBar from "./components/navbar/navbar";
import Form from "./pages/form";
import Home from "./pages/home";

function App() {
  return (
    <div className="h-screen bg-back-pattern">
      <Router>
        <MyNavBar key="mynavbar" />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/submit_resource" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
