import { render, screen, within } from "@testing-library/react";
import BookList from "../BookList";
import DummyBookData from "../../../../service/DummyBookData";

describe("Book list component", () => {
  beforeEach(() => {
    DummyBookData.data = [
      {
        CategoryName: "Data",
        BookData: [
          {
            id: "1",
            name: "Data_name_test_1",
            author: "Data_author_test_1",
            price: 1234.56,
            createdAt: "hello world",
          },
          {
            id: "2",
            name: "Data_name_test_2",
            author: "Data_author_test_2",
            price: 1234.56,
            createdAt: "hello world",
          },
        ],
      },

      {
        CategoryName: "Development",
        BookData: [
          {
            id: "3",
            name: "Development_name_test_1",
            author: "Development_author_test_1",
            price: 1234.56,
            createdAt: "hello world",
          },
          {
            id: "2",
            name: "Development_name_test_2",
            author: "Development_author_test_2",
            price: 1234.56,
            createdAt: "hello world",
          },
        ],
      },
    ];
  });

  it("should render category name", function () {
    render(<BookList />);
    const bookData = screen.getAllByTestId("book_lists_data");
    expect(bookData.length).toEqual(2);
    expect(
      within(bookData[0]).getByTestId("category_name").textContent
    ).toEqual("Data");
    expect(
      within(bookData[1]).getByTestId("category_name").textContent
    ).toEqual("Development");
  });

  it("should render category name and list data", function () {
    render(<BookList />);
    const bookData = screen.getAllByTestId("book_lists_data");
    expect(bookData.length).toEqual(2);

    const categoryData = within(bookData[0]);
    expect(categoryData.getByTestId("category_name").textContent).toEqual(
      "Data"
    );
    expect(categoryData.getAllByTestId("category_lists").length).toEqual(2);
    const categoryDataLists1 = within(
      categoryData.getAllByTestId("category_lists")[0]
    );
    expect(
      categoryDataLists1.getByText("Data_name_test_1")
    ).toBeInTheDocument();
    expect(
      categoryDataLists1.getByText("Data_author_test_1")
    ).toBeInTheDocument();
    const categoryDataLists2 = within(
      categoryData.getAllByTestId("category_lists")[1]
    );
    expect(
      categoryDataLists2.getByText("Data_name_test_2")
    ).toBeInTheDocument();
    expect(
      categoryDataLists2.getByText("Data_author_test_2")
    ).toBeInTheDocument();

    const categoryDevelopment = within(bookData[1]);
    expect(
      categoryDevelopment.getByTestId("category_name").textContent
    ).toEqual("Development");
    expect(categoryDevelopment.getAllByTestId("category_lists").length).toEqual(
      2
    );
  });
});
