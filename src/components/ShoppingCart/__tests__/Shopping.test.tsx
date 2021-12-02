import { fireEvent, render, screen, within } from "@testing-library/react";
import ShoppingCart from "../ShoppingCart";
import { RecoilRoot, useRecoilState } from "recoil";
import { bookState } from "../../../state/BookState";
import { useEffect } from "react";

const RecoilObserver = () => {
  const expectedData = [
    {
      bookId: "405f49b6-e570-4081-8c51-861dd6bfac65",
      bookCateId: "b3d9e7a8-3c31-4aed-9984-c65c14ef0795",
      bookName: "Getting Started with Natural Language Processing",
      bookPrice: 19.99,
    },
    {
      bookId: "c1896798-5c34-4343-a5af-8b0eff2371a3",
      bookCateId: "b3ce1341-d10c-429f-954b-854f55aef90b",
      bookName: "Grokking Functional Programming",
      bookPrice: 28.79,
    },
  ];
  const [, setState] = useRecoilState(bookState);
  useEffect(() => setState(expectedData), []);
  return null;
};
describe("shopping cart component", () => {
  it("should open modal when click cart button", () => {
    const { baseElement, queryByRole } = render(
      <RecoilRoot>
        <ShoppingCart />
      </RecoilRoot>
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fireEvent.click(queryByRole("button"));
    expect(baseElement).toMatchSnapshot();

    expect(screen.queryByText("Shopping cart")).toBeInTheDocument();
  });
  it("should display result book", () => {
    render(
      <RecoilRoot>
        <RecoilObserver />
        <ShoppingCart />
      </RecoilRoot>
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fireEvent.click(screen.queryByRole("button"));
    expect(screen.queryByText("Shopping cart")).toBeInTheDocument();
    const resultListBook = screen.getAllByTestId("result_book_id");
    const list1 = within(resultListBook[0]);
    expect(
      list1.queryByText("Getting Started with Natural Language Processing")
    ).toBeInTheDocument();
    expect(list1.getByText("19.99")).toBeInTheDocument();
  });
  it("should count item and display", () => {
    render(
      <RecoilRoot>
        <RecoilObserver />
        <ShoppingCart />
      </RecoilRoot>
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fireEvent.click(screen.queryByRole("button"));
    expect(screen.queryByText("Shopping cart")).toBeInTheDocument();
    expect(screen.queryByText("summary 2 items")).toBeInTheDocument();
  });
  it("should summary book price and display", () => {
    render(
      <RecoilRoot>
        <RecoilObserver />
        <ShoppingCart />
      </RecoilRoot>
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fireEvent.click(screen.queryByRole("button"));
    expect(screen.queryByText("Shopping cart")).toBeInTheDocument();
    expect(screen.queryByText("48.78")).toBeInTheDocument();
  });
  it("should render message no items... when shopping cart is empty", () => {
    render(
      <RecoilRoot>
        <ShoppingCart />
      </RecoilRoot>
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fireEvent.click(screen.queryByRole("button"));
    expect(screen.queryByText("Shopping cart")).toBeInTheDocument();
    expect(
      screen.queryByText(
        "There are no items in your cart. Find an item in Home page that meets your needs."
      )
    ).toBeInTheDocument();
  });
});
