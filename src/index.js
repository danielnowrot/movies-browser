import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import StyledGlobal from "./styled";
import theme from "./theme";
import App from "./App";
import Movies from "./Routes/Movies/index";
import People from "./Routes/People/index";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MovieList } from "./features/moveList/MovieList";
import { MovieDetails } from "./features/movieDetails/MovieDetails";
import { Provider } from "react-redux";
import store from "./core/store";
import { PersonList } from "./features/personList/PersonList";
import { PersonDetails } from "./features/personDetails/PersonDetails";
import { Container } from "./core/Container";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "movies",
        element: <Movies />,
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
      <Provider store={store}>
        <RouterProvider router={router} />
        <Container>
          <StyledGlobal />
          <MovieList />
          {/* <MovieDetails /> */}
          <PersonList />
          <PersonDetails />
        </Container>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
