import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/app/App";
import reportWebVitals from "./reportWebVitals";
import { LocaleProvider } from "./context/LocaleContext";
import ToolbarContent from "./pages/toolbar/ToolbarContent";
import Shell from "./components/Shell";

// TODO: make locale dinamic.
const locale = "de-DE";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LocaleProvider locale={locale}>
      <Shell toolbarContent={ToolbarContent()}>
        <App />
      </Shell>
    </LocaleProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
