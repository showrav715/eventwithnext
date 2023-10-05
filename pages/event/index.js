import { useRouter } from "next/router";
import EventSearch from "@/components/EventSearch";
import EventList from "@/components/EventList";
import { eventData } from "@/data/EventData";
import Head from "next/head";
import Meta from "@/components/Meta";

export default function Home() {
  const router = useRouter();
  const handleFilter = (year, month) => {
    const eventSearch = `/event/${year}/${month}`;
    router.push(eventSearch);
  };
  return (
    <>
    <Meta title="Event List" desc={'Event Description'} />
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      
      <EventSearch handleFilter={handleFilter} />
      <EventList items={eventData} />
    </main>
    </>
  );
}
