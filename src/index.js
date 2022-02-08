import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Produtos from "./pages/Produtos/index";
import Finalizar from "./pages/Finalizacao";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="finalizar" element={<Finalizar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
