function Image(props: ProductModel) {
  return (
    <img
      alt="product"
      src={props.image}
      style={{ width: "60px", height: "64px" }}
    />
  );
}

export default Image;
