import React from "react";
import { render } from "@testing-library/react";

import Home from "../pages/Home";

test("should render the table", () => {
  const { getByTestId } = render(<Home />);

  const tableHome = !!getByTestId("table-home");

  expect(tableHome).toBe(true);
});
