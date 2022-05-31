export const centerize: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const typography: React.CSSProperties = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontFeatureSettings: "'pnum' on, 'lnum' on",
};

export const button: React.CSSProperties = {
  ...centerize,
  ...typography,
  borderRadius: "51px",
  border: "0",
  textAlign: "center",
  cursor: "pointer",
  padding: "10px",
};

export const column: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

export const page: React.CSSProperties = {
  ...column,
  maxWidth: "1024px",
};

export const pageTitle: React.CSSProperties = {
  ...typography,
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "23px",
  color: "#2d2d2f",
};
