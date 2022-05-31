import * as styles from "styles";
import { ReactComponent as CopySVG } from "assets/copy.svg";

const rowStyle: React.CSSProperties = {
    display: "flex",
    gap: "20px",
    width: "100%",
};

const fieldDivStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
};

const fieldTitleStyle: React.CSSProperties = {
    ...styles.typography,
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "122%",
    color: "#727280",
};

const fieldTextStyle: React.CSSProperties = {
    ...styles.typography,
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "122%",
    color: "#2d2d2f",
};

const blueTextStyle: React.CSSProperties = {
    ...styles.typography,
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "122%",
    color: "#2967ff",
};

function CardBody(props: HistoryModel) {
    let quantity = 0;
    let total = props.shipping.cost;
    for (let item of props.cart) {
        quantity += item.quantity;
        total += item.price * item.quantity;
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={rowStyle}>
                <div style={fieldDivStyle}>
                    <span style={fieldTitleStyle}>Статус заказа</span>
                    <span style={fieldTextStyle}>Оплачен/Завершён</span>
                </div>
                <div style={fieldDivStyle}>
                    <span style={fieldTitleStyle}>Номер заказа</span>
                    <div style={{ display: "flex", gap: "7px" }}>
                        <span style={blueTextStyle}>#123-456</span>
                        <div style={{ width: "12.75px", height: "12.75px" }}>
                            <CopySVG />
                        </div>
                    </div>
                </div>
            </div>
            <div style={rowStyle}>
                <div style={fieldDivStyle}>
                    <span style={fieldTitleStyle}>Кол-во товаров</span>
                    <span style={fieldTextStyle}>{`${quantity} шт.`}</span>
                </div>
                <div style={fieldDivStyle}>
                    <span style={fieldTitleStyle}>Стоимость заказа</span>
                    <span style={fieldTextStyle}>{`${total} ₽`}</span>
                </div>
                <div style={fieldDivStyle}>
                    <span style={fieldTitleStyle}>Адрес доставки</span>
                    <span style={fieldTextStyle}>{props.shipping.address}</span>
                </div>
            </div>
        </div>
    );
}

export default CardBody;
