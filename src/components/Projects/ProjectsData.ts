import HopiBot from "./images/hopibot.png";
import Nostalgia from "./images/nostalgia.jpg";
import ReadingRoom from "./images/reading-room.png";
import Website from "./images/website.png";
import Gym from "./images/gym.png";
import Battleship from "./images/battleship.png";
export const projectData = [
  {
    image: HopiBot,
    title: "HopiBot",
    tags: [
      "Hackathon",
      "Python",
      "Flask",
      "JavaScript",
      "Twilio API",
      "Website",
    ],
    awards: [
      "2nd place winner",
      "Most Creative Use of Twilio"
    ],
    description: "HopiBot is a Flask-based chatbot that simplifies hospital admissions by pinpointing the nearest hospital using Google Maps.",
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
      consoleApp: false,
    }
  },
  {
    image: Nostalgia,
    title: "Nostalgia",
    tags: [
      "Hackathon",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Cockroach DB",
      "Fabric.js",
    ],
    awards: [
      "Best Hack With The Crew"
    ],
    description: "An app for scrapbooking and sharing memories with friends and family. Users can add photos and stickers while saving their progress. Nostalgia was built with Node Express and JavaScript.",
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
      consoleApp: false,
    }
  },
  {
    image: ReadingRoom,
    title: "Reading Room",
    tags: [
      "Hackathon",
      "Website",
      "JavaScript",
      "OpenLibrary API",
      "Chart.js",
    ],
    description: "Reading Room is a website that acts like a reading tracker and timer. In one simple user interface, users can track their reading progress, find new books to read, and have a 'pomodoro' reading timer.",
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
      consoleApp: false,
    }
  },
  {
    image: Website,
    title: "Personal Website",
    tags: [
      "Website",
      "React",
      "TypeScript",
      "Framer Motion",
      "Figma"
    ],
    description: "A React-based personal website to showcase my projects, skills, and personal information. This interactive platform highlights my work and experiences, providing a seamless and engaging way for visitors to learn more about me.",
    links: [
      {
        type: "github",
        link: "https://github.com/mayeen-ayoub/mayeen-ayoub.github.io",
      },
    ],
    hackathon: null,
    filters: {
      hackathon: false,
      website: true,
      consoleApp: false,
    }
  },
  {
    image: Gym,
    title: "Gym Management System",
    tags: [
      "Console App",
      "PostgreSQL",
      "JavaScript",
      "chalk.js",
    ],
    description: "A Health and Fitness Club Management System with functionalities for Members, Trainers, and Administrative staff. This app streamlines club operations, enhancing user experience and administrative efficiency.",
    links: [
      {
        type: "github",
        link: "https://github.com/mayeen-ayoub/gym-management-system",
      },
    ],
    hackathon: null,
    filters: {
      hackathon: false,
      website: false,
      consoleApp: true,
    },
  },
  {
    image: Battleship,
    title: "Battleship",
    tags: [
      "Console App",
      "Java",
    ],
    description: "A Battleship game using Java, offering an engaging and strategic gameplay experience. While this project is one of my older ones, it shows good use of object oriented programming and Java",
    links: [
      {
        type: "github",
        link: "https://github.com/mayeen-ayoub/battleship",
      },
    ],
    hackathon: null,
    filters: {
      hackathon: false,
      website: false,
      consoleApp: true,
    },
  }
]
