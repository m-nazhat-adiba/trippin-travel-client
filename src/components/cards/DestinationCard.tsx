import Image from "next/image";
import React from "react";

interface Props {
  data: {
    imageUrl: string;
    name: string;
  };
}

const DestinationCard = ({ data }: Props) => {
  return (
    <div
      className={`rounded-full group h-52 w-52 relative shadow-xl shadow-gray-300 hover:scale-110 transition-all`}
    >
      <div className="h-full w-full">
        <Image
          src={data.imageUrl}
          className={`rounded-full h-full object-cover transition-all object-left`}
          height={1000}
          width={1000}
          alt="destination"
          unoptimized={true}
        />
      </div>
      <div className="absolute top-0 justify-center h-full w-full p-4 items-center flex flex-col rounded-full group-hover:bg-gray-800 group-hover:bg-opacity-15 transition-colors">
        <h2 className="text-transparent group-hover:text-white font-semibold text-xl transition-all">
          {data.name}
        </h2>
      </div>
    </div>
  );
};

export default DestinationCard;
