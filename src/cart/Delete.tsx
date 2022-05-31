import { deleteItem } from "actions";
import { ReactComponent as TrashbinSVG } from "assets/trashbin.svg";
import * as styles from "styles";

function Delete(props: CartModel) {
  return (
    <button
      onClick={() => deleteItem(props)}
      style={{ ...styles.button, backgroundColor: "white" }}
    >
      <div style={{ width: "14px", height: "15px" }}>
        <TrashbinSVG />
      </div>
    </button>
  );
}

export default Delete;
