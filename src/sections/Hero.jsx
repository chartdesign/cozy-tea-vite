const Hero = () => {
  return (
    <section
      id="home"
      className="w-full md:flex flex-column justify-center items-center min-h-fit gap-10 bg-primary border-b border-light-green"
    >
      <div className="justify-center  gap-10">
        <div className="">
          <img
            src="https://images.pexels.com/photos/11170910/pexels-photo-11170910.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="teabag" className="max-h-[500px] rounded-lg p-5 
            "
          />
        </div>
      </div>
      <div className="ml-3 md:w-2/5">
        <p className="text-4xl text-dark-green ">Welcome to our <br />Cozy Tea Shop</p>
        
        <p className="mt-5">
          At our shop, we believe in the power of herbs to heal and nourish the body. That's why we've carefully curated a selection of the finest herbal teas from around the world. From refreshing mint to soothing chamomile, we have a tea for every mood and occasion.
        </p>
        <button className="bg-dark-green text-white px-8 py-2 rounded-lg my-5 ">
          Shop Now
        </button>
        
      </div>
    </section>
  );
};

export default Hero;
