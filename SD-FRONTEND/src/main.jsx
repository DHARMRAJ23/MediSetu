import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DoctorContext, { DoctorContextProvider } from "./contextApi/DoctorContext.jsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(

  <StrictMode>
    <BrowserRouter >
      <DoctorContextProvider>
        <ConfigProvider theme={{ token: { colorPrimary: '#22c55e' } }}>
          <App />
        </ConfigProvider>
      </DoctorContextProvider>
    </BrowserRouter>
  </StrictMode>

);
