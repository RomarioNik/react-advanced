const ErrorExample = () => {
  let count = 0;

  const handleButton = () => {
    count += 1;
  };

  return (
    <>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleButton}>
        Increase
      </button>
    </>
  );
};

export default ErrorExample;
