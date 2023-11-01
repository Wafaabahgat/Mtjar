const title = ({ ttl,className, ...props }) => {
  return (
    <>
      <h2 className={className}>{ttl}</h2>
    </>
  );
};

export default title;
