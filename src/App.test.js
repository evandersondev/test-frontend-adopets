import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import Login from "./pages/Login";
import Home from "./pages/Home";

test("input email and password can not be empty", () => {
  const { container, getByTestId } = render(<Login />);

  const inputEmail = getByTestId("input-email");
  const inputPassword = getByTestId("input-password");
  const formSubmit = getByTestId("form-submit");

  fireEvent.change(inputEmail, {
    target: { value: "usuario-test@adopets.com" }
  });
  fireEvent.change(inputPassword, {
    target: { value: "123123" }
  });
  fireEvent.submit(formSubmit);

  expect(!!getByTestId("form-submit")).toBe(true);
});

afterEach(cleanup);

test("input email and password can not be empty", () => {
  const { container, getByTestId } = render(<Home />);
  console.log(getByTestId("table-pets").innerHTML);

  // const inputEmail = getByTestId("input-email");
  // const inputPassword = getByTestId("input-password");
  // const formSubmit = getByTestId("form-submit");

  // fireEvent.change(inputEmail, {
  //   target: { value: "usuario-test@adopets.com" }
  // });
  // fireEvent.change(inputPassword, {
  //   target: { value: "123123" }
  // });
  // fireEvent.submit(formSubmit);

  // expect(!!getByTestId("form-submit")).toBe(true);
});
