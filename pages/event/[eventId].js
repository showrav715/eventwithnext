import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { singleEventData } from "@/data/EventData";
import Link from "next/link";
import Meta from "@/components/Meta";
function SingleEvent() {
  const router = useRouter();
  const event = singleEventData(router.query.eventId);
  if (!event) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <p className="text-center mx-auto my-auto">Loading...</p>
      </div>
    );
  }

  return (
    <>
    <Meta title={'Single Event'} desc={'Single Event Description'} />
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {event.event_name}
          </h1>
          <p className="mb-8 leading-relaxed">{event.event_description}</p>
          <div className="">
            <p className="font-bold">Location : {event.event_location}</p>
            <p className="font-bold">Date : {event.event_date}</p>
          </div>
          <Link
            href={"/event"}
            class="inline-flex text-white bg-indigo-500 border-0 mt-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Back
          </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src={event.event_image_url}
            width={600}
            height={600}
            alt="Image"
          />
        </div>
      </div>
    </section>
    </>
  );
}

export default SingleEvent;
