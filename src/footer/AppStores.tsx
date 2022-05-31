import * as styles from "styles";
import { ReactComponent as GooglePlaySVG } from "assets/googleplay.svg";
import { ReactComponent as AppStoreSVG } from "assets/appstore.svg";

const iconDivStyle: React.CSSProperties = {
  width: "104px",
  height: "32px",
};

function AppStores() {
  return (
    <div style={{ ...styles.column, gap: "8px" }}>
      <span
        style={{
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "140%",
          color: "#2d2d2f",
        }}
      >
        Устанавливайте приложение
      </span>
      <div style={{ display: "flex", gap: "16px" }}>
        <div style={iconDivStyle}>
          <GooglePlaySVG />
        </div>
        <div style={iconDivStyle}>
          <AppStoreSVG />
        </div>
      </div>
    </div>
  );
}

export default AppStores;
