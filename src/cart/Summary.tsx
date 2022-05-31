import { useSelector } from "react-redux";
import * as styles from "styles";

function Summary() {
  const cart = useSelector((state: AppState) => state.cart);
  let price = 0;
  for (const item of cart) price += item.price * item.quantity;

  return (
    <div style={{ ...styles.column, gap: "4px" }}>
      <span
        style={{
          ...styles.typography,
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "140%",
          color: "#2d2d2f",
        }}
      >
        Стоимость корзины:
      </span>
      <span
        style={{
          ...styles.typography,
          fontWeight: "bold",
          fontSize: "20px",
          lineHeight: "23px",
          color: "#2d2d2f",
        }}
      >
        {`${price} ₽`}
      </span>
    </div>
  );
}

export default Summary;
