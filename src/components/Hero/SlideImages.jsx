const SlideImages = ({ img }) => {
  return (
    <div className="w-full h-[500px] object-contain overflow-hidden relative">
      <img className="w-full h-[500px]" src={img} />
      <div className="h-full w-full top-0 left-0 absolute bg-gradient-to-l to-brand-purple/80 from-brand-text-purple/20"></div>
    </div>
  );
};

export default SlideImages;
