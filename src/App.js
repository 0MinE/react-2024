import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainView from "./views/MainView";
import LoginView from "./components/Login";
import FromView from "./components/InputFrom";
import TableView from "./components/Tables";

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/tables" element={<TableView />} />
            <Route path="/from" element={<FromView />} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;