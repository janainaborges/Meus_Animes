import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Routes from "../../routes";
import Home from "../../pages/Home";
import Favoritos from "../../pages/Favorite";

test('renders home page when path is "/"', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes />
    </MemoryRouter>
  );

  const homePageElement = getByText("Home Page");
  expect(homePageElement).toBeInTheDocument();
});

test('renders favoritos page when path is "/favoritos"', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/favoritos"]}>
      <Routes />
    </MemoryRouter>
  );

  const favoritosPageElement = getByText("Favoritos Page");
  expect(favoritosPageElement).toBeInTheDocument();
});
