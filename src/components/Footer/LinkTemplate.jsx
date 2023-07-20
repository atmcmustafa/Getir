const LinkTemplate = ({ linkTitle }) => {
  return (
    <li className="mb-3">
      <a className="text-sm tracking-wide" href="#">
        {linkTitle}
      </a>
    </li>
  );
};

export default LinkTemplate;
