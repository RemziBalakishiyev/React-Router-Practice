import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import User from "./pages/User";
import AppLayout from "./pages/AppLayout";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> , loader: async()=>{
        const response = await fetch("http://localhost:3000/products")
        return await response.json()
      } },
      { path: "/users", element: <User /> },
      { path: "/products/:id", element: <ProductDetail /> },
    ],
  },
]);
function App() {
  return (
    <div className="container-fluid">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
