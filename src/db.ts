import { store } from "store";
import { changeCategories, changeProducts } from "actions";

const baseUrl = "https://fakestoreapi.com/";

export async function init() {
    getCategories().then((res) => changeCategories(res));
    getProducts().then((res) => changeProducts(res));
}

export async function getCategories() {
    const response = await fetch(baseUrl + "products/categories");
    const items = await response.json();
    let state = store.getState().categories;
    return { ...state, available: items };
}

export async function getProducts() {
    const currentCategories = store.getState().categories.current;
    let categoryParameter = "";
    if (currentCategories.length > 0)
        categoryParameter += `category/${currentCategories[0]}`;
    const queryText = baseUrl + "products/" + categoryParameter + "?limit=16";
    const response = await fetch(queryText);
    return await response.json();
}
