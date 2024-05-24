import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import ThemeWrapper from "@/config/ThemeWrapper";
import "@/config/i18n";
import { AppProvider } from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeWrapper>
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeWrapper>
  </React.StrictMode>
);
