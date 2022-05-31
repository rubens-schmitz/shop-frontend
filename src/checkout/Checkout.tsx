import Form from "./Form";
import * as styles from "styles";

function Checkout() {
  return (
    <div style={styles.page}>
      <p style={styles.pageTitle}>Доставка</p>
      <Form />
    </div>
  );
}

export default Checkout;
