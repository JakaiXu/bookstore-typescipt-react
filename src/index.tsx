import { createRoot } from "react-dom/client";
import App from "./components/App";
import { UseGlobalContext } from "./context/books";
import "./index.css";
const el = document.getElementById("root") as HTMLElement;
const root = createRoot(el);
root.render(
  <UseGlobalContext>
    <App />
  </UseGlobalContext>
);
