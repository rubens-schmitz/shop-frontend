import { useSelector } from "react-redux";

import { ReactComponent as MarkerIcon } from "assets/marker.svg";
import * as styles from "styles";

function Location() {
  const ww = useSelector((state: AppState) => state.windowSize.width);
  const text = ww > 450 ? "Александровск-Самолёт" : "";

  return (
    <div
      style={{
        display: "grid",
        gridAutoFlow: "column",
        gap: "4px",
      }}
    >
      <div style={{ width: "15px", height: "20px" }}>
        <MarkerIcon />
      </div>

      {text && (
        <span
          style={{
            ...styles.typography,
            width: "100%",
            maxWidth: "148px",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "140%",
            color: "#727280",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
}

export default Location;
