import { useSelector } from "react-redux";

import { ReactComponent as SearchIcon } from "assets/magnifier.svg";
import * as styles from "styles";

function SearchBox() {
  const ww = useSelector((state: AppState) => state.windowSize.width);
  const text = ww > 750 ? "Поиск бренда, товара, категории, и так далее" : "";
  const textSize = ww / 4;

  return (
    <div
      style={{
        height: "50px",
        background: "#fff",
        border: "1px solid #f0f4fb",
        padding: "3px",
        borderRadius: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "fit-content",
      }}
    >
      {text && (
        <span
          style={{
            ...styles.typography,
            width: textSize,
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#727280",
            padding: "0 16px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {text}
        </span>
      )}

      <div
        style={{
          ...styles.centerize,
          width: "94px",
          height: "42px",
          background: "#f0f4fb",
          borderRadius: "41px",
        }}
      >
        <div style={{ width: "21px", height: "21px" }}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
