import Title from "../Title";
const DownloadCard = () => {
  return (
    <div className="w-full bg-grayBackground py-8 text-white">
      <Title title={"Kampanyalar"} />
      <div className="container md:bg-downloadPattern w-full bg-brand-purple rounded-lg flex justify-between">
        <div className="flex flex-col justify-center px-8 py-4 md:py-0">
          <h1 className="text-2xl font-bold"> Getir'i indirin!</h1>
          <p className="my-5 font-semibold">
            İstediğiniz ürünleri dakikalar içinde kapınıza{" "}
            <br className={`hidden md:block`} /> getirelim.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <img
              height={48}
              width={160}
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
            />
            <img
              height={48}
              width={160}
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
            />
            <img
              height={48}
              width={160}
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
            />
          </div>
        </div>
        <div className="pt-8 md:block hidden">
          <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" />
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
