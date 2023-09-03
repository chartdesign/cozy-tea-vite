import React from "react";

const CategoryCard = ({ imageSrc, altText, description }) => {
  return (
    <article className="rounded-xl bg-dark-tan p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img src={imageSrc} alt={altText} />
          
        </div>

        <div className="mt-1 p-2 text-center">
          <h1 className="text-dark-green font-bold">{description}</h1>
          

          <div className="mt-3 flex items-end justify-center">
            
          </div>
        </div>
      </a>
    </article>
  );
};

export default CategoryCard;
