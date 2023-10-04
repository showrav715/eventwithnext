const eventData = [
  {
    event_id: 1,
    event_name: "Event 1",
    event_date: "2023-10-10",
    event_location: "Location 1",
    event_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 1",
    event_image_url:
      "https://booking.geniusocean.xyz/assets/images/location/country/1628935352california-golden-gate-bridge-night.jpg",
    is_feature: true,
  },
  {
    event_id: 2,
    event_name: "Event 2",
    event_date: "2023-11-15",
    event_location: "Location 2",
    event_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 2",
    event_image_url:
      "https://booking.geniusocean.xyz/assets/images/tour/feature-image/1634036927Rockefeller-Center.jpg",
    is_feature: false,
  },
  {
    event_id: 3,
    event_name: "Event 3",
    event_date: "2023-12-20",
    event_location: "Location 3",
    event_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 3",
    event_image_url:
      "https://booking.geniusocean.xyz/assets/images/tour/feature-image/1634036891cable-car.jpg",
    is_feature: true,
  },
  {
    event_id: 4,
    event_name: "Event 4",
    event_date: "2024-01-25",
    event_location: "Location 4",
    event_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 4",
    event_image_url:
      "https://booking.geniusocean.xyz/assets/images/hotel-image/1634036996image-three.jpg",
    is_feature: false,
  },
  {
    event_id: 5,
    event_name: "Event 5",
    event_date: "2024-02-28",
    event_location: "Location 5",
    event_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 5",
    event_image_url:
      "https://booking.geniusocean.xyz/assets/images/hotel-image/1634037028image-one.jpg",
    is_feature: true,
  },
  {
    event_id: 6,
    event_name: "Event 6",
    event_date: "2024-03-15",
    event_location: "Location 6",
    event_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 6",
    event_image_url:
      "https://booking.geniusocean.xyz/assets/images/hotel-image/1634037067rest.jpg",
    is_feature: false,
  },
  {
    event_id: 7,
    event_name: "Event 7",
    event_date: "2024-04-20",
    event_location: "Location 7",
    event_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 7",
    event_image_url:
      "https://booking.geniusocean.xyz/assets/images/hotel-image/1634037028image-one.jpg",
    is_feature: true,
  },
  {
    event_id: 8,
    event_name: "Event 8",
    event_date: "2024-05-25",
    event_location: "Location 8",
    event_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 8",
    event_image_url:
      "https://booking.geniusocean.xyz/assets/images/tour/feature-image/1634036877hm.jpg",
    is_feature: false,
  },
  {
    event_id: 9,
    event_name: "Event 9",
    event_date: "2024-06-30",
    event_location: "Location 9",
    event_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 9",
    event_image_url:
      "https://booking.geniusocean.xyz/assets/images/location/country/1628935418exterior.jpg",
    is_feature: true,
  },
  {
    event_id: 10,
    event_name: "Event 10",
    event_date: "2024-07-05",
    event_location: "Location 10",
    event_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 10",
    event_image_url:
      "https://booking.geniusocean.xyz/assets/images/location/country/1628935283night-view-of-the-seine.jpg",
    is_feature: false,
  },
];

const singleEventData = (eventId) => {
  return eventData.find((event) => event.event_id == eventId);
};

const FeaturedEvent = () => {
  return eventData.filter((event) => event.is_feature == true);
};

export { eventData, singleEventData, FeaturedEvent };
