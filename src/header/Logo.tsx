import { useSelector } from "react-redux";

import { changePage } from "actions";
import { pages } from "pages";
import * as styles from "styles";

function Logo() {
  const ww = useSelector((state: AppState) => state.windowSize.width);
  const text = ww <= 450 ? "Rct" : "React";

  return (
    <span
      onClick={() => changePage(pages.home)}
      style={{
        ...styles.typography,
        height: "43px",
        fontWeight: "bold",
        fontSize: "37px",
        lineHeight: "43px",
        color: "#2d2d2f",
        cursor: "pointer",
      }}
    >
      {text}
    </span>
  );
}

export default Logo;
