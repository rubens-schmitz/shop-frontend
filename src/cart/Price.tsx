import * as styles from "styles";

function Price(props: ProductModel) {
  return (
    <div style={styles.column}>
      <span
        style={{
          ...styles.typography,
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "140%",
          color: "#2d2d2f",
        }}
      >
        {/* {`от ${props.price} ₽`} */}
        {`${props.price} ₽`}
      </span>
      {/* <span
        style={{
          ...styles.typography,
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "122%",
          color: "#8d8d8e",
          textDecoration: "line-through",
        }}
      >
        450 500 ₽
      </span> */}
    </div>
  );
}

export default Price;
