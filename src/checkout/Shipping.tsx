import { useSelector } from "react-redux";

import Input from "./Input";
import { ReactComponent as SendSVG } from "assets/send.svg";
import * as actions from "actions";
import * as styles from "styles";

const darkTextStyle: React.CSSProperties = {
    ...styles.typography,
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "140%",
    color: "#2d2d2f",
};

const fieldStyle: React.CSSProperties = {
    ...styles.column,
    gap: "8px",
};

const inputStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    border: "1px solid #f0f4fb",
    borderRadius: "45px",
    padding: "14px",
    width: "292px",
    height: "40px",
};

function Shipping(props: CheckoutProps) {
    const shipping = useSelector((state: AppState) => state.shipping);

    return (
        <div style={{ ...styles.column, gap: "30px", marginTop: "20px" }}>
            <div style={fieldStyle}>
                <span style={darkTextStyle}>Когда доставить?</span>
                <div style={{ display: "flex", gap: "16px" }}>
                    <Input
                        {...{
                            action: actions.changeShippingDate,
                            placeholder: "Выберите дату",
                            el: props.dateEl,
                            value: shipping.date,
                        }}
                    />
                    <Input
                        {...{
                            action: actions.changeShippingTime,
                            placeholder: "Выберите время",
                            el: props.timeEl,
                            value: shipping.time,
                        }}
                    />
                </div>
            </div>
            <div style={fieldStyle}>
                <span style={darkTextStyle}>Куда доставить?</span>
                <div style={inputStyle}>
                    <div style={{ width: "14px", height: "14px" }}>
                        <SendSVG />
                    </div>
                    <Input
                        {...{
                            action: actions.changeShippingAddress,
                            placeholder: "Выберите адрес доставки",
                            el: props.addressEl,
                            value: shipping.address,
                        }}
                    />
                </div>
            </div>
            <div style={fieldStyle}>
                <span style={darkTextStyle}>Имя</span>
                <div style={inputStyle}>
                    <Input
                        {...{
                            action: actions.changeShippingName,
                            el: props.nameEl,
                            value: shipping.name,
                        }}
                    />
                </div>
            </div>
            <div style={fieldStyle}>
                <span style={darkTextStyle}>Телефон</span>
                <div style={inputStyle}>
                    <Input
                        {...{
                            action: actions.changeShippingPhone,
                            el: props.phoneEl,
                            value: shipping.phone,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Shipping;
