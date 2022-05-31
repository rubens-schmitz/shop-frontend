import { pages } from "pages";
import { initialState, store } from "store";
import * as db from "db";

export const types = {
    changeCart: "CHANGE_CART",
    changeCategories: "CHANGE_CATEGORIES",
    changeHistory: "CHANGE_HISTORY",
    changeProducts: "CHANGE_PRODUCTS",
    changePage: "CHANGE_PAGE",
    changeShipping: "CHANGE_SHIPPING",
    changeWindowSize: "CHANGE_WINDOW_SIZE",
};

export function addToCart(model: ProductModel) {
    const item = { ...model, quantity: 1 };
    const cart = [...store.getState().cart, item];
    store.dispatch({ type: types.changeCart, cart });
}

export function changeCart(cart: CartModel[]) {
    store.dispatch({ type: types.changeCart, cart });
}

export function changeCategories(categories: CategoriesModel) {
    store.dispatch({ type: types.changeCategories, categories });
}

export function changeCurrentCategory(category: string) {
    let categories = store.getState().categories;
    const current = category === "" ? [] : [category];
    categories = { ...categories, current };
    changeCategories(categories);
    db.getProducts().then((res) => changeProducts(res));
}

export function changeHistory(history: HistoryModel[]) {
    store.dispatch({ type: types.changeHistory, history });
}

export function changeProducts(products: ProductModel[]) {
    store.dispatch({ type: types.changeProducts, products });
}

export function changePage(page: string) {
    store.dispatch({ type: types.changePage, page });
}

export function changeShipping(shipping: ShippingModel) {
    store.dispatch({ type: types.changeShipping, shipping });
}

export function changeShippingDate(date: string) {
    let shipping = store.getState().shipping;
    shipping = { ...shipping, date };
    changeShipping(shipping);
}

export function changeShippingTime(time: string) {
    let shipping = store.getState().shipping;
    shipping = { ...shipping, time };
    changeShipping(shipping);
}

export function changeShippingAddress(address: string) {
    let shipping = store.getState().shipping;
    shipping = { ...shipping, address };
    changeShipping(shipping);
}

export function changeShippingName(name: string) {
    let shipping = store.getState().shipping;
    shipping = { ...shipping, name };
    changeShipping(shipping);
}

export function changeShippingPhone(phone: string) {
    let shipping = store.getState().shipping;
    shipping = { ...shipping, phone };
    changeShipping(shipping);
}

export function changeWindowSize(windowSize: WindowSize) {
    store.dispatch({ type: types.changeWindowSize, windowSize });
}

export function increaseQuantity(item: CartModel) {
    const n = item.quantity;
    item = { ...item, quantity: n + 1 };
    let cart = store.getState().cart;
    const head = cart.slice(0, item.id);
    if (item.id === undefined) return;
    const tail = cart.slice(item.id + 1);
    cart = [...head, item, ...tail];
    store.dispatch({ type: types.changeCart, cart });
}

export function decreaseQuantity(item: CartModel) {
    const n = item.quantity;
    if (n === 1) return;
    item = { ...item, quantity: n - 1 };
    let cart = store.getState().cart;
    const head = cart.slice(0, item.id);
    if (item.id === undefined) return;
    const tail = cart.slice(item.id + 1);
    cart = [...head, item, ...tail];
    store.dispatch({ type: types.changeCart, cart });
}

export function deleteItem(item: CartModel) {
    let cart = store.getState().cart;
    const head = cart.slice(0, item.id);
    if (item.id === undefined) return;
    const tail = cart.slice(item.id + 1);
    cart = [...head, ...tail];
    store.dispatch({ type: types.changeCart, cart });
}

export function makeOrder() {
    const state = store.getState();
    const dateNow = new Date();
    const shipping = { ...state.shipping, order: dateNow };
    const item = { shipping, cart: state.cart };
    const history = [...state.history, item];
    changeHistory(history);
    changeShipping(initialState.shipping);
    changeCart([]);
    changePage(pages.history);
}
