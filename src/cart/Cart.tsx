import * as styles from "styles";
import Header from "./Header";
import Body from "./Body";

const divStyle: React.CSSProperties = {
  display: "flex",
  border: "1px solid #aec2ea",
  borderRadius: "20px",
};

function Cart() {
  return (
    <div style={styles.page}>
      <div style={{ ...styles.column, gap: "20px" }}>
        <div style={{ display: "flex", gap: "30px" }}>
          <span style={styles.pageTitle}>Корзина</span>
          <span
            style={{
              ...styles.typography,
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#ff2d87",
            }}
          >
            Очистить корзину
          </span>
        </div>
        <div style={{ ...divStyle, flexDirection: "column" }}>
          <Header />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default Cart;
