import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DessertContextProvider } from "./components/context/DessertContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DessertContextProvider>
      <App />
    </DessertContextProvider>
  </StrictMode>,
);
