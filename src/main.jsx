import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <Notifications />

      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<App />} />
        </Routes>
      </BrowserRouter>

    </MantineProvider>
  </React.StrictMode>
);
