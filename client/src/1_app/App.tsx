import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "@/2_pages/MainPage/MainPage";
import Layout from "@/2_pages/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<MainPage />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
