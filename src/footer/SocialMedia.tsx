import * as styles from "styles";
import { ReactComponent as FacebookSVG } from "assets/facebook.svg";
import { ReactComponent as VKontakteSVG } from "assets/vkontakte.svg";
import { ReactComponent as InstagramSVG } from "assets/instagram.svg";

const iconDivStyle: React.CSSProperties = {
  width: "28px",
  height: "28px",
};

function SocialMedia() {
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
        Присоединяйтесь к нам
      </span>
      <div style={{ display: "flex", gap: "16px" }}>
        <div style={iconDivStyle}>
          <FacebookSVG />
        </div>
        <div style={iconDivStyle}>
          <VKontakteSVG />
        </div>
        <div style={iconDivStyle}>
          <InstagramSVG />
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
