import Categories from "./Categories";
import * as styles from "styles";

function Header() {
    return (
        <div style={styles.column}>
            <div style={styles.centerize}>
                <span style={styles.pageTitle}>Категории товаров</span>
                <span
                    style={{
                        ...styles.typography,
                        ...styles.centerize,
                        flexGrow: "2",
                        fontWeight: "600",
                        fontSize: "12px",
                        lineHeight: "127.7%",
                        color: "#2967ff",
                    }}
                >
                    Настройки
                </span>
            </div>
            <Categories style={{ marginTop: "20px" }} />
        </div>
    );
}

export default Header;
