import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders your courses", () => {
  const { getByText } = render(<App />);
  const text = getByText("Hello World");
  expect(text).toBeInTheDocument();
});
