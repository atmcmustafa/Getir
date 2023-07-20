const Title = ({ title, onclick }) => {
  return (
    <h1
      onClick={onclick}
      className="mb-4 text-brand-text-purple font-semibold text-lg"
    >
      {title}
    </h1>
  );
};

export default Title;
