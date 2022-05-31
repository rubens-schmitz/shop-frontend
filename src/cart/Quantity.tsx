import { decreaseQuantity, increaseQuantity } from "actions";
import { ReactComponent as MinusSVG } from "assets/minus.svg";
import { ReactComponent as PlusSVG } from "assets/plus.svg";
import * as styles from "styles";

function Quantity(props: CartModel) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        width: "135px",
        height: "44px",
        border: "1px solid #aec2ea",
        borderRadius: "35px",
        position: "relative",
      }}
    >
      <button
        onClick={() => decreaseQuantity(props)}
        style={{ ...styles.button, backgroundColor: "white" }}
      >
        <div style={{ ...styles.centerize, width: "10px", height: "10px" }}>
          <MinusSVG />
        </div>
      </button>

      <span
        style={{
          ...styles.centerize,
          ...styles.typography,
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "140%",
          color: "#2d2d2f",
        }}
      >
        {props.quantity}
      </span>

      <button
        onClick={() => increaseQuantity(props)}
        style={{ ...styles.button, backgroundColor: "white" }}
      >
        <div style={{ ...styles.centerize, width: "10px", height: "10px" }}>
          <PlusSVG />
        </div>
      </button>
    </div>
  );
}

export default Quantity;
