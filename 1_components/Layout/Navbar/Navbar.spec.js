import { shallow, mount } from "enzyme";
import Navbar from "./Navbar.jsx";
import { Nav } from "./Navbar.jsx";
describe("navbar", () => {
  it("should render one  element", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Nav)).toHaveLength(1);
  });
  it("should render a nav element with aria-label equals to specified message ", () => {
    const wrapper = mount(<Navbar />);
    expect(wrapper.find("nav").getDOMNode().getAttribute("aria-label")).toEqual(
      "Navigation bar"
    );
  });
});
