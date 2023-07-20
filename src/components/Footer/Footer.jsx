import Title from "./Title";
import LinkTemplate from "./LinkTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcon from "./SocialMediaIcon";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-collapse";
import { useState } from "react";
import titles from "./MenuData";
import { useWindowWidth } from "@react-hook/window-size";
const Footer = () => {
  const [toggles, setToggles] = useState(titles.map(() => true));
  const onlyWidth = useWindowWidth();

  const toggleMenu = (index) => {
    if (onlyWidth <= 768) {
      setToggles(titles.map(() => false));
      setToggles((prevState) =>
        prevState.map((toggle, i) => (i === index ? !toggle : false))
      );
      console.log(toggles);
    }
  };
  return (
    <>
      <footer className="flex flex-wrap flex-1 container gap-12 pt-12 pb-4 border-b border-gray-100 mb-6">
        <div className="basis-64 flex-1 ">
          <Title title={"Getiri indirin!"} />
          <div className="flex flex-col gap-4">
            <img
              className="h-12 w-40 object-contain"
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
            />
            <img
              className="h-12 w-40 object-contain"
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
            />
            <img
              className="h-12 w-40 object-contain"
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
            />
          </div>
        </div>
        {titles.map((title, index) => (
          <div className="flex-1 basis-64" key={index}>
            <Title onclick={() => toggleMenu(index)} title={title.title} />
            {title.items.map((link, linkIndex) => (
              <Collapse key={linkIndex} isOpened={toggles[index]}>
                <ul className="flex flex-col gap-4">
                  <LinkTemplate linkTitle={link.link} />
                </ul>
              </Collapse>
            ))}
          </div>
        ))}

        <div className="basis-64 flex-1  md:justify-end md:flex hidden">
          <div className="p-4 shadow-2xl flex justify-end rounded-lg w-fit h-fit">
            <img
              width={72}
              height={84}
              src="https://cdn.getir.com/getirweb-images/common/etbis.png"
            />
          </div>
        </div>
      </footer>
      <footer className="container flex flex-col justify-between text-[13px] mb-6">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span> © 2023 Getir</span>
          <span> • Bilgi Toplumu Hizmetleri</span>
        </div>
        <div className="flex gap-3 justify-center md:justify-normal mt-4 md:mt-0">
          <SocialMediaIcon icon={faFacebook} />
          <SocialMediaIcon icon={faTwitter} />
          <SocialMediaIcon icon={faInstagram} />
          <div className="flex items-center ">
            <span className="flex items-center gap-x-2 hover:bg-brand-text-purple/30 hover:text-brand-text-purple cursor-pointer text-gray-500 py-1 rounded px-2 duration-200">
              <FontAwesomeIcon icon={faGlobe} /> Türkçe (TR)
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
