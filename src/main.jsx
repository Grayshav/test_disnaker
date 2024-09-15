import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./page/Home";
import Pengadu from "./component/dashboard/PengaduIndex";
import PengaduanLayanan from "./component/dashboard/PengaduanLayananIndex";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./page/Form/index";
import Kontak from "./page/Kontak";
import TentangKami from "./page/TentangKami";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form-pengaduan",
    element: <Form />,
  },
  {
    path: "/pengadu",
    element: <Pengadu />,
  },
  {
    path: "/pengaduan",
    element: <PengaduanLayanan />,
  },
  {
    path: "/tentang-kami",
    element: <TentangKami />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
