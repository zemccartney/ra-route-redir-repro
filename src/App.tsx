
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Admin from "./Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/admin/*",
    element: <Admin />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
