import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import ReactDOM from "react-dom/client";
import store from "./store.js";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import HomeScreen from "./screens/HomeScreen/HomeScreen.jsx";
import UserHomeScreen from "./screens/UserHomeScreen/UserHomeScreen.jsx";
import SettingScreen from "./screens/SettingScreen/SettingScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/home" element={<UserHomeScreen />} />
        <Route path="/settings" element={<SettingScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
