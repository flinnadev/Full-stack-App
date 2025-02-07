function FunctionComponent(props) {
  const {
    task: { title },
  } = props;

  return (
    <div>
      <h2>FunctionComponent</h2>
      <p>{title}</p>
    </div>
  );
}

export default FunctionComponent;
