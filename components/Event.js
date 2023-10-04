import React from "react";
import Image from "next/image";
import Link from "next/link";
function Event({ title, date, location, image, id }) {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image src={image} width={1200} height={500} alt="Image" />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        {title}
      </h2>
      <div className="flex justify-between">
        <p className="text-base leading-relaxed mt-2 font-bold">
          Location : {location}
        </p>
        <p className="font-bold">Date : {date}</p>
      </div>
      <Link legacyBehavior href={`event/${id}`}>
        <a className="text-indigo-500 inline-flex items-center mt-3">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </Link>
    </div>
  );
}

export default Event;
