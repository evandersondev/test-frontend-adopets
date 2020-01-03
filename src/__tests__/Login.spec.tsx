import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Login from "../pages/Login";

test("should render two inputs and one button", () => {
  const { getByTestId } = render(<Login />);

  const inputEmail = getByTestId("input-email");
  const inputPassword = getByTestId("input-password");

  expect(inputEmail).toBeTruthy();
  expect(inputPassword).toBeTruthy();
});

afterEach(cleanup);

test("inputs should to have some value", () => {
  const { getByTestId } = render(<Login />);

  const inputEmail: any = getByTestId("input-email");
  const inputPassword: any = getByTestId("input-password");
  const formLogin = getByTestId("form-submit");

  fireEvent.change(inputEmail, {
    target: { value: "usuario-test@adopets.com" }
  });
  fireEvent.change(inputPassword, { target: { value: "123123" } });
  fireEvent.submit(formLogin);

  expect(inputEmail.value).toBe("usuario-test@adopets.com");
  expect(inputPassword.value).toBe("123123");
});
