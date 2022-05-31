import * as styles from "styles";

function Description(props: ProductModel) {
    return (
        <span
            style={{
                ...styles.column,
                ...styles.typography,
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "140%",
                color: "#2d2d2f",
                width: "292px",
            }}
        >
            {props.title}
        </span>
    );
}

export default Description;
