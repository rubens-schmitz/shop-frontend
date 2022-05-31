import Description from "./Description";
import Delete from "./Delete";
import Image from "./Image";
import Price from "./Price";
import Quantity from "./Quantity";

function Row(props: CartModel) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: "20px 20px 0 20px",
        gap: "12px",
        width: "100%",
      }}
    >
      <Image {...props} />
      <Description {...props} />
      <Quantity {...props} />
      <Price {...props} />
      <Delete {...props} />
    </div>
  );
}

export default Row;
