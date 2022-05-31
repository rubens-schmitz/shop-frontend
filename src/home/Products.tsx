import { useSelector } from "react-redux";
import Product from "./Product";

function Products() {
    const products = useSelector((state: AppState) => state.products);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "20px 0",
                gap: "20px",
                justifyContent: "space-around",
            }}
        >
            {products.map((e, i) => (
                <Product {...{ ...e }} key={i} />
            ))}
        </div>
    );
}

export default Products;
