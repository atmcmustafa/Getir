const Card = ({ title, par, img }) => {
  return (
    <div className="rounded-md hover:scale-105 cursor-pointer duration-200 shadow-xl flex flex-col items-center justify-center text-center gap-2 p-4 py-12">
      <img src={img} />
      <h1 className="text-brand-text-purple mt-3 font-semibold text-lg">
        {title}
      </h1>
      <p className="text-gray-500">{par}</p>
    </div>
  );
};

export default Card;
