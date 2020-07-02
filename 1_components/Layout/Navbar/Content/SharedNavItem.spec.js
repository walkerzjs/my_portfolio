import { shallow, mount } from "enzyme";
import SharedNavButton from "./SharedNavItem.jsx";
import Link from "next/link";
describe("shared navigation item", () => {
  it("output as expected based on input props", () => {
    const wrapper = shallow(<SharedNavButton />);
    wrapper.setProps({
      label: "try me",
      id: "0",
      ariaLabel: "shared nav item",
    });
    expect(
      wrapper.contains(
        <Link href="0">
          <a aria-label="shared nav item">try me</a>
        </Link>
      )
    ).toEqual(true);
  });
});
