import { useRef } from "react";

import Payment from "./Payment";
import Shipping from "./Shipping";
import { store } from "store";

function Form() {
  const addressEl = useRef<HTMLInputElement>(null);
  const dateEl = useRef<HTMLInputElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const phoneEl = useRef<HTMLInputElement>(null);
  const timeEl = useRef<HTMLInputElement>(null);

  const props = {
    addressEl,
    dateEl,
    isValid,
    nameEl,
    phoneEl,
    timeEl,
  };

  function isValid() {
    const shipping = store.getState().shipping;
    if (shipping.date === "") {
      if (dateEl.current !== null) dateEl.current.focus();
      return false;
    }
    if (shipping.time === "") {
      if (timeEl.current !== null) timeEl.current.focus();
      return false;
    }
    if (shipping.address === "") {
      if (addressEl.current !== null) addressEl.current.focus();
      return false;
    }
    if (shipping.name === "") {
      if (nameEl.current !== null) nameEl.current.focus();
      return false;
    }
    if (shipping.phone === "") {
      if (phoneEl.current !== null) phoneEl.current.focus();
      return false;
    }
    return true;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
      }}
    >
      <Shipping {...props} />
      <Payment {...props} />
    </div>
  );
}

export default Form;
