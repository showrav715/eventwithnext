import EventList from "@/components/EventList";
import React from "react";
import { useRouter } from "next/router";
import { filter } from "@/data/EventData";
import Meta from "@/components/Meta";
function SearchEvent() {
  const router = useRouter();
  const query = router.query.slug;

  if (!query) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <p className="text-center mx-auto my-auto">Loading...</p>
      </div>
    );
  }

  const check = filter(query[0], query[1]);
  if (check.length == 0) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <p className="text-center mx-auto my-auto">Event Not Found</p>
      </div>
    );
  }

  return (
    <>
      <Meta title={"Search Event"} desc={"Search Event Description"} />
      <EventList items={check} />
    </>
  );
}

export default SearchEvent;
