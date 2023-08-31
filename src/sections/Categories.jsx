import { cozyTea_01, cozyTea_02, cozyTea_03 } from "../assets/images";

const Categories = () => {
  return (
    <section className="text-center bg-secondary-tan">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 drop-shadow-xl">
          <img
            src={cozyTea_01}
            alt="Image 1"
            className="w-full md:h-full p-5  max-h-[400px] object-contain "
          />
          <p>Single Teas</p>
        </div>
        <div className="w-full md:w-1/3 drop-shadow-xl">
          <img
            src={cozyTea_02}
            alt="Image 2"
            className="w-full md:h-full p-5 max-h-[400px] object-contain"
          />
          <p>Bundles</p>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src={cozyTea_03}
            alt="Image 3"
            className="w-full md:h-full p-5 drop-shadow-xl max-h-[400px] object-contain"
          />
          <p>Subscription</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
