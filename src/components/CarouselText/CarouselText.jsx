import { Link } from "react-router-dom";

const CarouselText = () => {
  return (
    <div className="flex flex-col absolute top-1/4 left-1/4 gap-2">
      <span className="xl:text-3xl md:text-2xl text-white xl:leading-10 md:leading-8">Nisi siguran</span>
      <span className="xl:text-3xl md:text-2xl text-white font-bold md:leading-8">Gde izlazis veceras</span>
      <span className="xl:text-3xl md:text-2xl text-white font-extrabold md:leading-8">Na pravom si Mestu</span>
      <span className="xl:text-2xl text-white xl:leading-10 md:leading-8 mb-5 xs:mb-2">#ovojetvojanoc</span>
      <Link to='/clubs' className="flex text-white bg-primary w-fit py-3 px-14 rounded-lg">Istrazi</Link>
    </div>
  );
};

export default CarouselText;
