import Image from "next/image";
import React from "react";

interface Props {
  data: {
    promo_code: string;
    title: string;
    imageUrl: string;
  };
}

const PromoCard = ({ data }: Props) => {
  return (
    <div className="flex w-full h-64 flex-col items-center relative">
      <figure className="w-auto h-full bg-blue-900 rounded-xl">
        <Image
          src={data.imageUrl}
          className="h-full w-auto object-cover rounded-2xl"
          height={500}
          width={1000}
          alt="promo"
          unoptimized={true}
        />
      </figure>
      <article className="absolute -bottom-10 bg-white py-4 px-8 rounded-xl shadow-xl shadow-gray-300 text-center">
        <h1 className="text-xs mb-2">{data.promo_code}</h1>
        <p className="text-sm font-bold">{data.title}</p>
      </article>
    </div>
  );
};

export default PromoCard;
