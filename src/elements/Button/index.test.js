import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "./index";

test("Tombol tidak bisa ditekan apabila isDisabled", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Muncul spinner dan kata loading apabila isLoading", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Mencetak tag <a> apabila isExternal", () => {
  const { container } = render(
    <Button href="" type="link" isExternal></Button>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Mencetak component <Link> apabila isExternal tidak ada", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
