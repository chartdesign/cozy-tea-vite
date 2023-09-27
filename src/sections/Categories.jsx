import { cozyTea_01, cozyTea_02, cozyTea_03, cozyTea_09, teaImg_01 } from "../assets/images";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  return (
    <section className="text-center bg-secondary-tan border-b border-light-green">
      <div className="flex flex-col md:flex-row">
        <CategoryCard imageSrc={cozyTea_09} altText="test 1" description="Single" />
        
        <div className="w-full md:w-1/3 drop-shadow-xl">
          <img
            src={teaImg_01}
            alt="Image 1"
            className="w-96 h-48 object-fill mx-auto"
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
