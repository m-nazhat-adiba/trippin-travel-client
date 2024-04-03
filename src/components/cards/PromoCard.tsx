import Image from "next/image";
import React from "react";

const PromoCard = () => {
  return (
    <div className="flex flex-col items-center relative">
      <figure className="w-80 h-80">
        <Image
          src="/promo.jpg"
          className="h-full w-auto object-cover rounded-2xl"
          height={500}
          width={1000}
          alt="promo"
        />
      </figure>
      <article className="absolute -bottom-10 bg-white py-4 px-8 rounded-xl shadow-xl shadow-gray-300 text-center">
        <h1 className="text-base mb-2">Europe Travel Promo</h1>
        <p className="text-xl font-bold">TRAVELIO123</p>
      </article>
    </div>
  );
};

export default PromoCard;
