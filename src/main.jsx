import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Movie from "./Movie.jsx"
import Error from "./Error.jsx"



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <MantineProvider>
      <Notifications />

      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<App />} />
          <Route path="/movie/:id" element={<Movie />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </MantineProvider>

  </React.StrictMode>
);
