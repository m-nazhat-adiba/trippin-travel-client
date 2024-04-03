import Image from "next/image";
import React from "react";

interface Props {
  data: {
    imageUrls: string;
    title: string;
    description: string;
    price: number;
  };
}

const ProductCard = ({ data }: Props) => {
  return (
    <div className="group relative h-80 flex flex-col shadow-xl w-fit shadow-gray-300 rounded-xl overflow-hidden hover:-translate-y-4 transition-all">
      <div className="w-auto h-full flex">
        <Image
          src={data.imageUrls[0] || "/japan.jpg"}
          alt="product"
          height={500}
          width={1000}
          className="object-cover h-full w-auto rounded-tl-xl rounded-tr-xl"
          unoptimized={true}
        />
      </div>

      <div className="absolute bottom-0 w-full flex flex-col p-4 bg-white h-80 translate-y-[260px] group-hover:translate-y-0 transition-all">
        <div className="flex justify-between">
          <h1 className="font-semibold">{data.title}</h1>
          <p>{data.price}</p>
        </div>
        <div className="flex justify-center items-center h-full w-full p-2">
          <p className="text-center text-sm">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
