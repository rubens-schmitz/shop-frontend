import SearchBox from "./SearchBox";
import Cart from "./Cart";
import Location from "./Location";
import Logo from "./Logo";
import History from "./History";

function Header() {
  return (
    <header
      style={{
        padding: "20px 0",
        background: "#fff",
        display: "grid",
        gridAutoFlow: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Logo />
      <Location />
      <SearchBox />
      <Cart />
      <History />
    </header>
  );
}

export default Header;
