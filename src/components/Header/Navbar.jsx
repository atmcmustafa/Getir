import Logo from "../../assets/Logo.svg";
import GetirYemek from "../../assets/GetirYemek.svg";
import GetirBuyuk from "../../assets/GetirBuyuk.svg";
import GetirSu from "../../assets/GetirSu.svg";
import GetirCarsi from "../../assets/GetirCarsi.svg";
import LinkTemplate from "./LinkTemplate";
import { faGlobe, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import AuthLink from "./AuthLink";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div className="h-33 md:h-11 bg-brand-purple">
      <div className="container flex flex-col md:flex-row  justify-between items-center h-full">
        <div className="flex items-center ">
          <LinkTemplate active={"active"} img={Logo} />
          <LinkTemplate img={GetirYemek} />
          <LinkTemplate img={GetirBuyuk} />
          <LinkTemplate img={GetirSu} />
          <LinkTemplate img={GetirCarsi} />
        </div>
        <div className=" items-center gap-x-8 md:flex hidden">
          <AuthLink icon={faGlobe} title={"Türkçe (TR)"} />
          <AuthLink icon={faUser} title={"Giriş Yap"} />
          <AuthLink icon={faUserPlus} title={"Kayıt Ol"} />
        </div>
        <div className="w-full bg-brand-purple py-4 flex md:hidden items-center justify-center">
          <LinkTemplate img={Logo} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
