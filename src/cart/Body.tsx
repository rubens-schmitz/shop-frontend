import { useSelector } from "react-redux";
import * as styles from "styles";
import Row from "./Row";

function Separator() {
  return (
    <div
      style={{
        width: "90%",
        height: "1px",
        backgroundColor: "#aec2ea",
        margin: "20px 0",
      }}
    />
  );
}

function Body() {
  const cart = useSelector((state: AppState) => state.cart);

  return (
    <div
      style={{
        ...styles.column,
        marginBottom: "20px",
      }}
    >
      {cart.map((e, i) => (
        <div
          key={i}
          style={{ ...styles.column, width: "100%", alignItems: "center" }}
        >
          <Row {...{ ...e, id: i }} />
          {i < cart.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  );
}

export default Body;
