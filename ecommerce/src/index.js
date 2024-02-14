import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './pages/Error/Error';
import SearchResults, { loader as searchLoader } from './pages/SearchResults';
import Product, {loader as productLoader} from './pages/Product';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <></> },
          {
            path: "items",
            element: <SearchResults />,
            loader: searchLoader,
          },
          {
            path: "items/:id",
            element: <Product />,
            loader: productLoader,
          },
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
