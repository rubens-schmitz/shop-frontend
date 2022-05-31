import { addToCart } from "actions";
import * as styles from "styles";

function Product(model: ProductModel) {
    return (
        <div
            style={{
                ...styles.column,
                width: "232px",
                clipPath: "inset(1px 1px 1px 1px)",
                padding: "1px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "154px",
                    backgroundImage: `url(${model.image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            />
            <span
                style={{
                    ...styles.typography,
                    width: "214px",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "140%",
                    color: "#2d2d2f",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                {model.title}
            </span>
            <span
                style={{
                    ...styles.typography,
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "130%",
                    color: "#2967ff",
                    marginTop: "8px",
                }}
            >
                от {model.price.toLocaleString("ru-RU")} ₽
            </span>
            <button
                onClick={() => addToCart(model)}
                style={{
                    ...styles.button,
                    border: "1.3px solid #2967ff",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "140%",
                    color: "#2967ff",
                    backgroundColor: "white",
                    marginTop: "8px",
                }}
            >
                Добавить в корзину
            </button>
        </div>
    );
}

export default Product;
