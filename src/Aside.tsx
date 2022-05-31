import * as styles from "./styles";
import CandiesPNG from "./assets/candies.png";
import LakePNG from "./assets/lake.png";
import { ReactComponent as BagsSVG } from "./assets/bags.svg";
import { useSelector } from "react-redux";

const divStyle: React.CSSProperties = {
  width: "311px",
  height: "143px",
  borderRadius: 20,
  position: "relative",
};

const textStyle: React.CSSProperties = {
  ...styles.typography,
  ...styles.centerize,
  height: "46px",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "23px",
  color: "white",
};

function Aside() {
  const w = useSelector((state: AppState) => state.windowSize.width);
  const borderWidth = w > 1366 ? "1" : "0";
  const width = w > 1300 ? "350px" : "0";

  return width === "0" ? (
    <div />
  ) : (
    <div
      style={{
        ...styles.column,
        borderLeft: `${borderWidth}px solid #f0f4fb`,
        width: width,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 0",
        gap: "20px",
      }}
    >
      <div style={{ ...divStyle, border: "1px solid #ff2d87" }}>
        <div
          style={{
            width: "90px",
            height: "90px",
            position: "absolute",
            margin: "33px 0 0 -10px",
          }}
        >
          <BagsSVG />
        </div>

        <div
          style={{
            ...styles.typography,
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "130%",
            color: "#2967ff",
            width: "160px",
            height: "52px",
            margin: "20px 0 0 90px",
          }}
        >
          Получай товары БЕСПЛАТНО!
        </div>
        <div
          style={{
            ...styles.centerize,
            width: "194px",
            height: "40px",
            backgroundColor: "#2967ff",
            borderRadius: "51px",
            margin: "10px 0 0 90px",
          }}
        >
          <div
            style={{
              ...styles.typography,
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "19px",
              width: "144px",
              height: "19px",
              color: "white",
            }}
          >
            Узнать подробнее
          </div>
        </div>
      </div>

      <div
        style={{
          ...divStyle,
          ...styles.centerize,
          backgroundImage: `url(${CandiesPNG})`,
        }}
      >
        <div style={textStyle}>Новая коллекция</div>
      </div>

      <div
        style={{
          ...divStyle,
          ...styles.centerize,
          backgroundImage: `url(${LakePNG})`,
        }}
      >
        <div style={textStyle}>Новая коллекция</div>
      </div>

      <div
        style={{
          ...divStyle,
          ...styles.centerize,
          backgroundImage: `url(${CandiesPNG})`,
        }}
      >
        <div style={textStyle}>Новая коллекция</div>
      </div>
    </div>
  );
}

export default Aside;
