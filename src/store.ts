import { createStore } from "redux";

import { rootReducer } from "reducers";
import { pages } from "pages";

const emptyShipping = {
    address: "",
    cost: 200,
    date: "",
    name: "",
    phone: "",
    time: "",
    order: new Date(),
};

export const initialState: AppState = {
    cart: [],
    categories: { current: [], available: [] },
    history: [],
    page: pages.home,
    products: [],
    shipping: emptyShipping,
    windowSize: { width: 0, height: 0 },
};

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
