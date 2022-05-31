import { useSelector } from "react-redux";

import Summary from "./Summary";
import * as styles from "styles";
import { changePage } from "actions";
import { pages } from "pages";
import { ReactComponent as ProductsSVG } from "assets/products.svg";

function Header() {
  const w = useSelector((state: AppState) => state.windowSize.width);
  const desktop = w > 750;

  return (
    <div
      style={{
        padding: "16px",
        justifyContent: "space-around",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #aec2ea",
        borderRadius: "20px",
        flexWrap: "wrap",
        overflow: "hidden",
        position: "relative",
        gap: "8px",
      }}
    >
      <Summary />
      <button
        onClick={() => changePage(pages.checkout)}
        style={{
          ...styles.button,
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "19px",
          padding: "0",
          width: "214px",
          height: "50px",
          backgroundColor: "#2967ff",
          borderRadius: "51px",
          color: "white",
        }}
      >
        Оформить
      </button>
      {desktop && <div style={{ width: "50px", height: "1px" }} />}
      {desktop && (
        <div
          style={{
            position: "absolute",
            width: "170px",
            height: "124px",
            right: "0",
          }}
        >
          <ProductsSVG />
        </div>
      )}
    </div>
  );
}

export default Header;
