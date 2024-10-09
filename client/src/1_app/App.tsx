import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "@/2_pages/MainPage/MainPage";
import Layout from "@/2_pages/Layout/Layout";
import Directions from "@/2_pages/Admin/Directions";
import AddDirection from "@/2_pages/Admin/AddDirection";
import RoutesEl from "@/2_pages/Admin/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<MainPage />} />} />
        <Route path="/admin/direction" element={<Layout children={<Directions />} />} />
        <Route path="/admin/direction/add" element={<Layout children={<AddDirection />} />} />
        <Route path="/admin/routes" element={<Layout children={<RoutesEl />} />} />
        <Route path="/admin/*" element={<Layout children={<Navigate to={"/admin/direction"} />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
