const LinkTemplate = ({ active, img }) => {
  return (
    <div className=" h-11 items-end pt-2">
      <div
        className={`${active} flex h-9 px-4  rounded-t-md hover:bg-brand-text-purple cursor-pointer`}
      >
        <img className=" h-4 m-auto object-contain" src={img} />
      </div>
    </div>
  );
};

export default LinkTemplate;
