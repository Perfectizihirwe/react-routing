import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { PropertiesScreen } from "./screens/properties";
import { MLSSearch } from "./screens/mlsSearch";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PropertiesScreen />,
  },
  {
    path: "/mlssearch",
    element: <MLSSearch />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
