/// <reference types="react-scripts" />

interface Action {
    cart?: CartModel[];
    categories?: CategoriesModel;
    history?: HistoryModel[];
    page?: string;
    products?: ProductModel[];
    shipping?: ShippingModel;
    type: string;
    windowSize?: WindowSize;
}

interface AppState {
    cart: CartModel[];
    categories: CategoriesModel;
    history: HistoryModel[];
    page: string;
    products: ProductModel[];
    shipping: ShippingModel;
    windowSize: WindowSize;
}

interface CartModel extends ProductModel {
    id?: number;
    quantity: number;
}

interface CategoryButtonProps {
    name: string;
    style: React.CSSProperties;
}

interface CategoriesModel {
    available: string[];
    current: string[];
}

interface CheckoutProps {
    addressEl: React.RefObject<HTMLInputElement>;
    dateEl: React.RefObject<HTMLInputElement>;
    isValid: () => boolean;
    nameEl: React.RefObject<HTMLInputElement>;
    phoneEl: React.RefObject<HTMLInputElement>;
    timeEl: React.RefObject<HTMLInputElement>;
}

interface HistoryModel {
    cart: CartModel[];
    shipping: ShippingModel;
}

interface InputProps {
    action: (value: string) => void;
    el: React.RefObject<HTMLInputElement>;
    placeholder?: string;
    value: string;
}

interface ProductModel {
    image: string;
    title: string;
    price: number;
}

interface ProductQuery {
    categoryId: number;
    description: string;
    id: number;
    name: string;
}

interface RowProps extends Props {
    quantity?: number;
}

interface ShippingModel {
    address: string;
    cost: number;
    date: string;
    name: string;
    phone: string;
    time: string;
    order: Date;
}

interface StyleProps {
    style?: React.CSSProperties;
}

interface WindowSize {
    height: number;
    width: number;
}
