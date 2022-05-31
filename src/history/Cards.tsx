import { useSelector } from "react-redux";

import Card from "./Card";

function Cards() {
    const history = useSelector((state: AppState) => state.history);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
            }}
        >
            {history.map((e, i) => (
                <Card {...{ ...e }} key={i} />
            ))}
        </div>
    );
}

export default Cards;
