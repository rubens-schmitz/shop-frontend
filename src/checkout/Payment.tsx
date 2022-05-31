import { useSelector } from "react-redux";

import { makeOrder } from "actions";
import * as styles from "styles";

const lightTextStyle: React.CSSProperties = {
    ...styles.typography,
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "140%",
    color: "#727280",
};

const darkTextStyle: React.CSSProperties = {
    ...styles.typography,
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "140%",
    color: "#2d2d2f",
};

function Payment(props: CheckoutProps) {
    const cart = useSelector((state: AppState) => state.cart);
    let price = 0;
    for (const item of cart) price += item.price * item.quantity;
    const deliveryCost = 200;
    const total = price + deliveryCost;

    function onClick() {
        if (props.isValid()) makeOrder();
    }

    return (
        <div style={{ ...styles.column, gap: "20px" }}>
            <div
                style={{
                    ...styles.column,
                    backgroundColor: "#f0f4fb",
                    borderRadius: "20px",
                    padding: "20px",
                    width: "292px",
                }}
            >
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <span style={lightTextStyle}>Стоимость товаров:</span>
                    <span style={lightTextStyle}>{`${price} ₽`}</span>
                </div>

                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <span style={lightTextStyle}>Стоимость доставки:</span>
                    <span style={lightTextStyle}>{`${deliveryCost} ₽`}</span>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                    }}
                >
                    <span style={lightTextStyle}>Итого:</span>
                    <span style={darkTextStyle}>{`${total} ₽`}</span>
                </div>
            </div>

            <button
                onClick={onClick}
                style={{
                    ...styles.button,
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "white",
                    backgroundColor: "#2967ff",
                    width: "292px",
                    height: "50px",
                }}
            >
                Сделать заказ
            </button>
        </div>
    );
}

export default Payment;
