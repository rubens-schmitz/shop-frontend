import Header from "./Header";
import Products from "./Products";
import * as styles from "styles";

function Home() {
  return (
    <div style={styles.page}>
      <Header />
      <Products />
      <div
        style={{
          ...styles.centerize,
          marginTop: "24px",
        }}
      >
        <button
          style={{
            ...styles.button,
            width: "292px",
            height: "50px",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#727280",
            backgroundColor: "#f0f4fb",
          }}
        >
          Показать больше товаров
        </button>
      </div>
    </div>
  );
}

export default Home;
