import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import * as styles from "styles";

function Card(props: HistoryModel) {
    return (
        <div
            style={{
                ...styles.column,
                border: "1px solid #aec2ea",
                borderRadius: "32px",
                padding: "20px",
                maxWidth: "448px",
                gap: "10px",
            }}
        >
            <CardHeader {...props} />
            <CardBody {...props} />
        </div>
    );
}

export default Card;
