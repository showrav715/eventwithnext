import EventSearch from "@/components/EventSearch";
import EventList from "@/components/EventList";
import { FeaturedEvent } from "@/data/EventData";
import Meta from "@/components/Meta";

export default function Home() {
  const featureData = FeaturedEvent();

  return (
    <>
      <Meta title={"Home|Featured"} desc={"Home Page"} />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <span className={`text-4xl font-bold`}>Featured Events</span>
        <EventList items={featureData} />
      </main>
    </>
  );
}
