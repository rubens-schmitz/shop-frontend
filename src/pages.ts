import Cart from "cart/Cart";
import Checkout from "checkout/Checkout";
import Home from "home/Home";
import History from "history/History";

export const pages = {
  cart: "cart",
  checkout: "checkout",
  history: "history",
  home: "home",
};

export function getPage(page: string): JSX.Element {
  switch (page) {
    case pages.cart:
      return Cart();
    case pages.checkout:
      return Checkout();
    case pages.home:
      return Home();
    default:
      return History();
  }
}
