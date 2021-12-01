import { atom, selector } from "recoil";
import { Cart } from "../models/Cart";

export const bookState = atom<Cart[]>({
  key: "carts",
  default: [],
});

export const bookSelector = selector({
  key: "valueCartsState",
  get: ({ get }) => {
    return get(bookState);
  },
});
