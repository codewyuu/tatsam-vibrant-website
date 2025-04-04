
export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  eventId?: string;
  eventName?: string;
  date?: string;
}

// In a real app, these would be actual image paths
const gallery: GalleryImage[] = [
  {
    id: "1",
    title: "Hindi Kavi Sammelan 2024",
    image: "",
    eventId: "1",
    eventName: "Hindi Kavi Sammelan",
    date: "March 10, 2024"
  },
  {
    id: "2",
    title: "Hindi Debate Competition",
    image: "",
    eventId: "4",
    eventName: "Hindi Debate Competition",
    date: "March 20, 2024"
  },
  {
    id: "3",
    title: "Hindi Cultural Night Performance",
    image: "",
    eventId: "6",
    eventName: "Hindi Cultural Night",
    date: "January 25, 2024"
  },
  {
    id: "4",
    title: "Hindi Drama Workshop",
    image: "",
    eventId: "5",
    eventName: "Hindi Drama Workshop",
    date: "February 15, 2024"
  },
  {
    id: "5",
    title: "Hindi Literature Competition Winners",
    image: "",
    eventId: "2",
    eventName: "Hindi Literature Competition",
    date: "May 15, 2024"
  },
  {
    id: "6",
    title: "Hindi Film Festival Opening",
    image: "",
    eventId: "3",
    eventName: "Hindi Film Festival",
    date: "June 5, 2024"
  },
  {
    id: "7",
    title: "Poetry Recitation Event",
    image: "",
    eventId: "1",
    eventName: "Hindi Kavi Sammelan",
    date: "March 10, 2024"
  },
  {
    id: "8",
    title: "Cultural Performance",
    image: "",
    eventId: "6",
    eventName: "Hindi Cultural Night",
    date: "January 25, 2024"
  },
  {
    id: "9",
    title: "Workshop Session",
    image: "",
    eventId: "5",
    eventName: "Hindi Drama Workshop",
    date: "February 15, 2024"
  }
];

export default gallery;
