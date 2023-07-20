import DataCategories from "./DataCategories";
import Header from "../Title";
const Categories = () => {
  return (
    <div className="bg-white shadow-xl w-full py-8">
      <Header title={"Kategoriler"} />
      <div className="container grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
        {DataCategories.map((item) => (
          <div
            className=" flex flex-col rounded items-center justify-center p-4 hover:bg-brand-text-purple/20 group duration-200 cursor-pointer"
            key={item.id}
          >
            <img className="w-12 border rounded-lg" src={item.image} />
            <h1 className="font-semibold w-full text-center flex justify-center text-gray-500 text-xs md:text-[15px] mt-3 group-hover:text-brand-text-purple">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
