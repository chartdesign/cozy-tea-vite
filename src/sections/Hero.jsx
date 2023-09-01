import { cozyTea_04 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex justify-center items-center max-xl:flex-col-reverse gap-10 bg-primary border-b border-light-green"
    >
      <div className="w-full md:w-1/3 p-12 py-24 ">
        <div className="flex-1 drop-shadow-xl ">
          <img
            src={cozyTea_04}
            alt="Image 2"
            
            className="object-contain w-full rounded-xl"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5">
        <p className="text-4xl text-dark-green ">
          Welcome to our <br />
          Cozy Tea Shop
        </p>

        <p className="mt-5">
          At our shop, we believe in the power of herbs to heal and nourish the
          body. That's why we've carefully curated a selection of the finest
          herbal teas from around the world. From refreshing mint to soothing
          chamomile, we have a tea for every mood and occasion.
        </p>
        <button className="bg-dark-green text-white px-8 py-2 rounded-lg my-5 ">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
