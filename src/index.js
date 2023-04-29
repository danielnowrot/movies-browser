import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import StyledGlobal from "./styled";
import theme from "./theme";
import App from "./App";
import Movies from "./Routes/Movies/index";
import People from "./Routes/People/index";
import ErrorPage from "./Routes/Error/index";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "movies",
        element: <Movies />,
        errorElement: <ErrorPage />,
      },
      {
        path: "people",
        element: <People />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <StyledGlobal />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
