import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { TodosPage } from "./pages/TodosPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
      <Routes>
        <Route element={<TodosPage />} path="/todo-list/" />
        <Route element={<AboutPage />} path="/todo-list/about" />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
