import * as styles from "styles";
import SocialMedia from "./SocialMedia";
import AppStores from "./AppStores";

const textStyle: React.CSSProperties = {
  ...styles.typography,
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "122%",
  color: "#8d8d8e",
};

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#f8f8f8",
        padding: "20px",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          width: "100%",
          padding: "20px"
        }}
      >
        <span
          style={{
            ...styles.typography,
            fontWeight: "bold",
            fontSize: "40px",
            lineHeight: "50px",
            color: "#2d2d2f",
          }}
        >
          React
        </span>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginLeft: "auto",
          }}
        >
          <SocialMedia />
          <AppStores />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          width: "100%",
          padding: "20px"
        }}
      >
        <span style={textStyle}>© Sionic</span>
        <span style={textStyle}>Правовая информация</span>
        <span style={textStyle}>Политика конфиденциальности</span>
      </div>
    </div>
  );
}

export default Footer;
