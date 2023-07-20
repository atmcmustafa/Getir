import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="bg-grayBackground py-12">
      <div className="container grid grid-cols-1 xl:grid-cols-3 gap-x-4 ">
        <Card
          title={"Her siparişinize bir kampanya"}
          par={
            "Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz."
          }
          img={
            "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
          }
        />
        <Card
          title={"Dakikalar içinde kapınızda"}
          par={"Getir’le siparişiniz dakikalar içinde kapınıza gelir."}
          img={
            "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
          }
        />
        <Card
          title={"Binlerce çeşit mutluluk"}
          par={"Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz."}
          img={
            "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
          }
        />
      </div>
    </div>
  );
};

export default Cards;
