import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store.js";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";


if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker registered:", registration);
    })
    .catch((err) => console.error("SW registration failed:", err));
}



createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ToastContainer/>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
