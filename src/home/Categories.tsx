import { useSelector } from "react-redux";
import CategoryButton from "./CategoryButton";

const styles: React.CSSProperties[] = [
    { backgroundColor: "#2967ff" },
    { backgroundColor: "#58cf18" },
    { backgroundColor: "#ffa601" },
    { backgroundColor: "#ff7cb4" },
    { backgroundColor: "#ffa601" },
    { color: "#2d2d2f", border: "1px solid #ff2d87" },
];

let styleCounter = 0;

function getStyle() {
    const result = styles[styleCounter];
    styleCounter = styleCounter + 1 === styles.length ? 0 : styleCounter + 1;
    return result;
}

function Categories(props: StyleProps) {
    const categories = useSelector((state: AppState) => state.categories);
    let wrap = props.style?.flexWrap;
    if (wrap === undefined) wrap = "wrap";

    return (
        <div
            style={{
                ...props.style,
                display: "flex",
                flexWrap: wrap,
            }}
        >
            {categories.available.map((e, i) => (
                <CategoryButton key={i} name={e} style={getStyle()} />
            ))}
        </div>
    );
}

export default Categories;
