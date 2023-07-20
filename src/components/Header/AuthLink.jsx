import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AuthLink = ({ icon, title }) => {
  return (
    <div className="text-brand-gray text-sm flex gap-x-2 cursor-pointer">
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <span>{title}</span>
    </div>
  );
};

export default AuthLink;
