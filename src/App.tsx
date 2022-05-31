import { useSelector } from "react-redux";

import "@fontsource/raleway/400.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";

import Header from "header/Header";
import Aside from "Aside";
import Footer from "footer/Footer";
import { useWindowSize } from "hooks";
import { getPage } from "pages";
import * as db from "db";
import * as styles from "styles";

db.init();

function App() {
    const page = useSelector((state: AppState) => state.page);
    useWindowSize();

    return (
        <div
            style={{
                ...styles.column,
                overflowX: "hidden",
                height: "100vh",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexGrow: "1",
                }}
            >
                <div style={{ ...styles.column, padding: "0 20px 40px 20px" }}>
                    <Header />
                    {getPage(page)}
                </div>
                <Aside />
            </div>
            <Footer />
        </div>
    );
}

export default App;
