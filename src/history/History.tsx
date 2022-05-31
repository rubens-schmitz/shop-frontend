import Cards from "./Cards";
import * as styles from "styles";

function History() {
    return (
        <div style={styles.page}>
            <p style={styles.pageTitle}>История заказов</p>
            <Cards />
        </div>
    );
}

export default History;
