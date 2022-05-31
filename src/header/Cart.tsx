import { useSelector } from "react-redux";

import { changePage } from "actions";
import { ReactComponent as CartSVG } from "assets/cart.svg";
import { pages } from "pages";
import * as styles from "styles";

function Products() {
  const l = useSelector((state: AppState) => state.cart.length);
  const cartLength = l > 10 ? "10+" : String(l);

  return (
    <div
      style={{
        ...styles.centerize,
        ...styles.typography,
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "140%",
        color: "#2967ff",
        position: "absolute",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "white",
        marginLeft: "40px",
        marginBottom: "30px",
      }}
    >
      {cartLength}
    </div>
  );
}

function Cart() {
  return (
    <div
      onClick={() => changePage(pages.cart)}
      style={{
        ...styles.centerize,
        width: "48px",
        height: "48px",
        border: "1px solid #727280",
        borderRadius: "50%",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div style={{ width: "20px", height: "17px" }}>
        <CartSVG />
      </div>
      <Products />
    </div>
  );
}

export default Cart;
