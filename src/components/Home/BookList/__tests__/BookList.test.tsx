import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import BookList from "../BookList";
import HttpClient from "../../../../service/api/API";
import Cookies from "js-cookie";

describe("Book list component", () => {
  beforeEach(() => {
    const spy = jest.spyOn(HttpClient, "getAll");
    const data = {
      data: [
        {
          categoryId: "b3d9e7a8-3c31-4aed-9984-c65c14ef0795",
          categoryName: "Data",
          books: [
            {
              id: "405f49b6-e570-4081-8c51-861dd6bfac65",
              name: "Getting Started with Natural Language Processing",
              author: "Ekaterina Kochmar",
              price: 19.99,
              publicationAt: "2021-11-28T18:00:20.003097",
            },
          ],
        },
      ],
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    spy.mockResolvedValue({ data: data });
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  describe("book list", () => {
    it("should render category name", async () => {
      const dateConv = new Date("2021-12-28T18:00:20.003097");
      console.log(dateConv.getFullYear(), dateConv.getMonth());
      await act(async () => {
        render(<BookList />);
      });

      await waitFor(() => {
        const bookData = screen.getAllByTestId("book_lists_data");
        expect(bookData.length).toEqual(1);
        expect(
          within(bookData[0]).getByTestId("category_name").textContent
        ).toEqual("Data");
      });
    });

    it("should render category name and list data", async () => {
      await act(async () => {
        render(<BookList />);
      });
      await waitFor(() => {
        const bookData = screen.getAllByTestId("book_lists_data");
        expect(bookData.length).toEqual(1);

        const categoryData = within(bookData[0]);
        expect(categoryData.getByTestId("category_name").textContent).toEqual(
          "Data"
        );
        expect(categoryData.getAllByTestId("category_lists").length).toEqual(1);
        const categoryDataLists1 = within(
          categoryData.getAllByTestId("category_lists")[0]
        );
        expect(
          categoryDataLists1.getByText(
            "Getting Started with Natural Language Processing"
          )
        ).toBeInTheDocument();
        expect(
          categoryDataLists1.getByText("Ekaterina Kochmar")
        ).toBeInTheDocument();
        expect(
          categoryDataLists1.getByText("Publication November 2021")
        ).toBeInTheDocument();
      });
    });
    it("should add book to cart", async () => {
      await act(async () => {
        render(<BookList />);
      });

      await waitFor(() => {
        const bookBt = screen.getAllByTestId("category_lists");
        fireEvent.click(bookBt[0]);

        expect(Cookies.get("hello_key")).toBeDefined();
      });
    });
  });
});
