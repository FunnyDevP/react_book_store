import { render } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("should display message Hello React bookstore", () => {
    const app = render(<App />);

    expect(app.getByText("Hello React bookstore")).toBeInTheDocument();
  });
});
