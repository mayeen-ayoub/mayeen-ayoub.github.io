import HopiBot from "./images/hopibot.png";
import Nostalgia from "./images/nostalgia.jpg";
import ReadingRoom from "./images/reading-room.png";
export const projectData = [
  {
    image: HopiBot,
    title: "HopiBot",
    tags: [
      "Hackathon",
      "Flask",
      "Twilio API",
      "Website",
      "Python",
    ],
    awards: [
      "2nd place winner",
      "Most Creative Use of Twilio"
    ],
    description: "A chatbot designed to streamline admitting patients to hospitals",
    links: [
      {
        type: "github",
        link: "https://github.com/kevinluong21/HopiBot",
      },
      {
        type: "devpost",
        link: "https://devpost.com/software/hospital-bot",
      }
    ],
    hackathon: "HawkHacks",
    filters: {
      hackathon: true,
      website: true,
      outreach: false,
    }
  },
  {
    image: Nostalgia,
    title: "Nostalgia",
    tags: [
      "Hackathon",
      "Express",
      "Cockroach DB",
      "Fabric.js",
    ],
    awards: [
      "Best Hack With The Crew"
    ],
    description: "An app to scrapbook and share memories with friends and family.",
    links: [
      //TODO: add try me button
      {
        type: "github",
        link: "https://github.com/mayeen-ayoub/nostalgia",
      },
      {
        type: "devpost",
        link: "https://devpost.com/software/nostalgia",
      }
    ],
    hackathon: "MLH Hack With A Crew",
    filters: {
      hackathon: true,
      website: false,
      outreach: false,
    }
  },
  {
    image: ReadingRoom,
    title: "Reading Room",
    tags: [
      "Hackathon",
      "Website",
      "OpenLibrary API",
      "Chart.js",
    ],
    description: "A reading tracker and timer that simplifies the user interface. Users can track their reading progress, find new books to read, and have a 'pomodoro' reading timer",
    //TODO: add try me link
    links: [
      {
        type: "github",
        link: "https://github.com/mayeen-ayoub/the-reading-room",
      },
      {
        type: "devpost",
        link: "https://devpost.com/software/the-reading-room",
      }
    ],
    hackathon: "MLH Hack With A Crew",
    filters: {
      hackathon: true,
      website: true,
      outreach: false,
    }
  },
]
