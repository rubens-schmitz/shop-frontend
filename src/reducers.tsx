import { initialState } from "store";
import { types } from "actions";

export function rootReducer(state: AppState = initialState, action: Action) {
  switch (action.type) {
    case types.changeCart:
      if (action.cart === undefined) return state;
      return { ...state, cart: action.cart };

    case types.changeCategories:
      if (action.categories === undefined) return state;
      return { ...state, categories: action.categories };

    case types.changeHistory:
      if (action.history === undefined) return state;
      return { ...state, history: action.history };

    case types.changeProducts:
      if (action.products === undefined) return state;
      return { ...state, products: action.products };

    case types.changePage:
      if (action.page === undefined) return state;
      return { ...state, page: action.page };

    case types.changeShipping:
      if (action.shipping === undefined) return state;
      return { ...state, shipping: action.shipping };

    case types.changeWindowSize:
      if (action.windowSize === undefined) return state;
      return { ...state, windowSize: action.windowSize };

    default:
      return state;
  }
}
