import { useSelector } from "react-redux";

import { changeCurrentCategory } from "actions";
import * as styles from "styles";

function CategoryButton(props: CategoryButtonProps) {
    let { backgroundColor, color, border } = props.style;
    if (!backgroundColor) backgroundColor = "white";
    if (!color) color = "white";
    if (!border) border = "0";

    const currentCategory = useSelector(
        (state: AppState) => state.categories.current[0]
    );
    const isCurrentCategory = currentCategory === props.name;

    function onClick() {
        const category = isCurrentCategory ? "" : props.name;
        changeCurrentCategory(category);
    }

    return (
        <button
            onClick={onClick}
            style={{
                ...styles.button,
                height: "24px",
                background: backgroundColor,
                color: color,
                border: border,
                fontWeight: "600",
                lineHeight: "140%",
                margin: "5px",
                gap: "4px",
            }}
        >
            {props.name}
            {isCurrentCategory && (
                <div
                    style={{
                        ...styles.centerize,
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        border: `1px solid ${color}`,
                        position: "relative",
                    }}
                >
                    <span style={{ position: "absolute", marginBottom: "2px" }}>
                        x
                    </span>
                </div>
            )}
        </button>
    );
}

export default CategoryButton;
