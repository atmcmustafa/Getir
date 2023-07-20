import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkTemplate from "./LinkTemplate";
import Title from "./Title";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Collapse } from "react-collapse";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(null);

  const showLink = (i) => {
    if (isOpen === i) {
      console.log("hello");
      console.log(isOpen);
    }
    setIsOpen(i);
  };

  return (
    <>
      <div className="basis-64 flex-1 ">
        <div className="flex justify-between items-center">
          <Title title={"Getir'i keşfedin"} />
          <span
            key={1}
            onClick={(e) => showLink(e.target.key)}
            className="cursor-pointer h-6 w-6 bg-brand-text-purple/50 text-brand-text-purple flex items-center justify-center rounded"
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>
        <ul className={`${isOpen === undefined ? "block" : "hidden"}`}>
          <div className="flex flex-col gap-2">
            <LinkTemplate linkTitle={"Hakkımızda"} />
            <LinkTemplate linkTitle={"Kariyer"} />
            <LinkTemplate linkTitle={"Teknoloji Kariyerleri"} />
            <LinkTemplate linkTitle={"İletişim"} />
            <LinkTemplate linkTitle={"Sosyal Sorumluluk Projeleri"} />
          </div>
        </ul>
      </div>
      <div className="basis-64 flex-1 ">
        <div className="flex justify-between items-center">
          <Title title={"Getir'i keşfedin"} />
          <span
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer h-6 w-6 bg-brand-text-purple/50 text-brand-text-purple flex items-center justify-center rounded"
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>
        <ul className="">
          <Collapse isOpened={!isOpen}>
            <div className="flex flex-col gap-2">
              <LinkTemplate linkTitle={"Hakkımızda"} />
              <LinkTemplate linkTitle={"Kariyer"} />
              <LinkTemplate linkTitle={"Teknoloji Kariyerleri"} />
              <LinkTemplate linkTitle={"İletişim"} />
              <LinkTemplate linkTitle={"Sosyal Sorumluluk Projeleri"} />
            </div>
          </Collapse>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
