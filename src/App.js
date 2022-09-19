import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyNavBar from "./components/navbar/navbar";
import Form from "./pages/form";
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="h-full bg-back-pattern bg-cover">
      <Router>
        <MyNavBar key="mynavbar" />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/submit_resource" element={<Form />} />
        </Routes>
        <Footer key="footer" />
      </Router>
    </div>
  );
}

export default App;
