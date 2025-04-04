
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  category: string;
  isFeatured?: boolean;
  isUpcoming?: boolean;
}

const events: Event[] = [
  {
    id: "1",
    title: "Hindi Kavi Sammelan",
    description: "An evening dedicated to Hindi poetry featuring renowned poets from across the country. Join us for a night of beautiful verses and literary discussions.",
    date: "April 10, 2025",
    category: "Poetry",
    isFeatured: true,
    isUpcoming: true
  },
  {
    id: "2",
    title: "Hindi Literature Competition",
    description: "Showcase your Hindi writing skills in our annual literature competition. Categories include poetry, short stories, and essays.",
    date: "May 15, 2025",
    category: "Competition",
    isUpcoming: true
  },
  {
    id: "3",
    title: "Hindi Film Festival",
    description: "A three-day celebration of Hindi cinema, featuring classic and contemporary films, discussions with filmmakers, and workshops.",
    date: "June 5-7, 2025",
    category: "Film",
    isUpcoming: true
  },
  {
    id: "4",
    title: "Hindi Debate Competition",
    description: "Test your oratory skills in our annual Hindi debate competition. Topics will focus on contemporary social issues.",
    date: "March 20, 2025",
    category: "Debate",
    isUpcoming: false
  },
  {
    id: "5",
    title: "Hindi Drama Workshop",
    description: "Learn the fundamentals of Hindi theater in this intensive two-day workshop led by experienced theater professionals.",
    date: "February 15, 2025",
    category: "Workshop",
    isUpcoming: false
  },
  {
    id: "6",
    title: "Hindi Cultural Night",
    description: "An evening celebrating Hindi culture through music, dance, and theatrical performances by NSUT students.",
    date: "January 25, 2025",
    category: "Cultural",
    isUpcoming: false
  }
];

export default events;
