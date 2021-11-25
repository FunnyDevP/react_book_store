import { render, within } from "@testing-library/react";
import BookCategory from "../BookCategory";
import DummyBookCategory from "../../../../service/DummyBookCategory";

describe("Book Category Component", () => {
  it("should render category list", () => {
    const bookCategoryComponent = render(<BookCategory />);
    const cateLists = bookCategoryComponent.getAllByTestId("cate_lists");
    expect(cateLists.length).toEqual(9);
    cateLists.forEach((cate, index) => {
      expect(
        within(cate).getByText(DummyBookCategory[index])
      ).toBeInTheDocument();
    });
  });
});
