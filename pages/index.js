import EventSearch from "@/components/EventSearch";
import EventList from "@/components/EventList";
import { FeaturedEvent } from "@/data/EventData";

export default function Home() {
  const featureData = FeaturedEvent();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <EventSearch />
      <EventList items={featureData} />
    </main>
  );
}
