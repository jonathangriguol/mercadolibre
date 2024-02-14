import { render, screen } from "@testing-library/react";
import App from "./App";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

test("Only Header is shown correctly when renders App on root URL", () => {
  const router = createMemoryRouter(
    [{ path: "/", element: <App /> }],
    { initialEntries: ["/"] },
  );

  render(<RouterProvider router={router} />);

  const inputElement = screen.getByPlaceholderText("Nunca dejes de buscar");
  const mainContent = screen.getByTestId('main-content');
  expect(mainContent).toBeEmptyDOMElement();
  expect(inputElement).toBeInTheDocument();
});