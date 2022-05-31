import * as styles from "styles";

const style: React.CSSProperties = {
  ...styles.typography,
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "140%",
  color: "#727280",
  border: "0",
  width: "100%",
  outline: "0",
};

function Input(props: InputProps) {
  return (
    <input
      onChange={(e) => props.action(e.target.value)}
      placeholder={props.placeholder}
      ref={props.el}
      style={style}
      value={props.value}
    />
  );
}

export default Input;
