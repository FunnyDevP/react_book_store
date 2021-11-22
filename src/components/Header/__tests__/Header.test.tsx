import { render, within } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  it("should render app bar component", () => {
    const header = render(<Header />);
    const appBar = header.getByTestId("app-bar");
    expect(appBar).toBeInTheDocument();
  });
  it("should display title on app bar component", () => {
    const header = render(<Header />);
    const appBar = header.getByTestId("app-bar");
    const insideAppBar = within(appBar);
    const typography = within(insideAppBar.getByTestId("app-bar-title"));
    expect(typography.getByText("FunnyDev")).toBeInTheDocument();
  });
});
