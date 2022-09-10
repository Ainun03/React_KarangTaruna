import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import TentangPage from "./pages/tentang/TentangPage";
import EventPage from "./pages/eventPage/AgendaPage";
import KontakPage from "./pages/kontakPage/KontakPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/loginPage/Register";
import KantorPage from "./pages/kantorSekPage/KantorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/tentang" element={<TentangPage />}/>
        <Route path="/event" element={<EventPage />}/>
        <Route path="/kontak" element={<KontakPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/kantor-sekretariat" element={<KantorPage />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
