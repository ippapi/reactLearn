import "./App.css";
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicePage from "./pages/ServicePage"
import PricingPage from "./pages/PricingPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Service" element={<ServicePage />} />
          <Route path="/Price" element={<PricingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
