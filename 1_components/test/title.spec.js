import { mount } from "enzyme";

import Title from "./title";

/** @test {Title Component} */
describe("Title Component", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<Title label="test" />);

    expect(wrapper.find("h1").text()).toEqual("test");
  });
});
