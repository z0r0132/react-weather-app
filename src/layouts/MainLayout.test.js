import React from "react";
import { shallow } from "enzyme";
import MainLayout from "./MainLayout";

const wrap = (props = {}) => shallow(<MainLayout {...props} />);

it("renders children correctly", () => {
  const wrapper = wrap({
    children: "<div>React weather app</div>",
  });

  expect(wrapper.contains("<div>React weather app</div>")).toBeTruthy();
});
