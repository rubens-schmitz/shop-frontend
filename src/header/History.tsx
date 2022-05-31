import { changePage } from "actions";
import { pages } from "pages";
import profilePng from "assets/profile.png";

function History() {
  return (
    <img
      onClick={() => changePage(pages.history)}
      style={{ borderRadius: "50%", cursor: "pointer" }}
      alt="profile"
      src={profilePng}
    />
  );
}

export default History;
