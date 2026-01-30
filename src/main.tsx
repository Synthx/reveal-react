import { createRoot } from "react-dom/client";
import "./globals.scss";
import App from "./app/App.tsx";

const element = document.getElementById("root");
if (!element) {
  throw new Error("root not found");
}

createRoot(element).render(<App />);
