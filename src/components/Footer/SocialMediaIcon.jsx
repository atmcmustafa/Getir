import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaIcon = ({ icon }) => {
  return (
    <span className="duration-200 p-1 rounded-lg hover:bg-brand-text-purple/30 hover:text-brand-text-purple cursor-pointer text-gray-500">
      <FontAwesomeIcon className="text-xl" icon={icon} />
    </span>
  );
};

export default SocialMediaIcon;
