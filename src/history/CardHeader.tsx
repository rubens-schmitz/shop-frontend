import * as styles from "styles";
import { ReactComponent as ChevronSVG } from "assets/chevron.svg";

function CardHeader(props: HistoryModel) {
    return (
        <div
            style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                width: "100%",
            }}
        >
            <span
                style={{
                    ...styles.typography,
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "140%",
                    color: "#727280",
                }}
            >
                {props.shipping.order.toLocaleDateString("ru")}
            </span>
            <span
                style={{
                    ...styles.typography,
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "127.7%",
                    color: "#2967ff",
                }}
            >
                Подробнее
            </span>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "end",
                }}
            >
                <div style={{ width: "14px", height: "8px" }}>
                    <ChevronSVG />
                </div>
            </div>
        </div>
    );
}

export default CardHeader;
