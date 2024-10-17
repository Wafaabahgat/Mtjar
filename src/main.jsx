import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./App";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { persist, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
// import 'swiper/swiper-bundle.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </PersistGate>
  </Provider>
);
