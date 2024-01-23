import TravelLog from "../assets/images/project/travel-log.png";
import PinusStudy from "../assets/images/project/pinus-study.png"
import Gameroom from "../assets/images/project/gameroom.png";
import DefaultIcon from "../assets/images/project/default-icon.png";
import Classroom360 from "../assets/images/project/classroom360.png";
import TrackO from "../assets/images/project/track-o.png";
import Feminnovate from "../assets/images/project/feminnovate.png";

export const projects : Project[] = [
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": TravelLog,
        "name": "TravelLog",
        "description": "Travel planner mobile app made with React Native, Firebase and Google Maps API. Tested with React Native Testing Library. Contributed as a full-stack developer.",
        "links": [["Repository", "https://github.com/melissaharijanto/Travel-Log"], ["Documentation", "https://melissaharijanto.github.io/Travel-Log/"]],
    },
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": PinusStudy,
        "name": "PINUS Study",
        "description": "Study forum for Indonesian students in NUS, built with React Typescript and Go. Contributed to Figma prototype and UI/UX, frontend development and backend integration.",
        "links": [["Repository", "https://github.com/PINUSTECH-2022/pinus-study-frontend"], ["Deployment", "https://pinus-study.netlify.app/"]],
    },
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": Gameroom,
        "name": "GameRoom",
        "description": "Forum for gamers, built with React Typescript and Ruby on Rails. Personal project, contributed as a full-stack developer.",
        "links": [["Frontend Repository", "https://github.com/melissaharijanto/gameroom-frontend"], ["Backend Repository", "https://github.com/melissaharijanto/gameroom-backend"], ["Deployment", "https://gameroom-forum.netlify.app/"]],
    },
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": Classroom360,
        "name": "Classroom360",
        "description": "A virtual classroom built with React 360. Contributed to the UI development. Top 15 Finalist for Lifehack 2023.",
        "links": [["Repository", "https://github.com/melissaharijanto/pink-unicorn"], ["Deployment", "https://classroom-360.netlify.app/"]],
    },
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": TrackO,
        "name": "TrackO",
        "description": "Order and inventory tracking application built with JavaFX. Contributed to the implementation of some features and the UI.",
        "links": [["Repository", "https://github.com/AY2223S1-CS2103T-W15-3/tp"], ["Documentation", "https://ay2223s1-cs2103t-w15-3.github.io/tp/"], ["Download", "https://github.com/AY2223S1-CS2103T-W15-3/tp/releases/tag/v1.4"]],
    },
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": Feminnovate,
        "name": "Feminnovate",
        "description": "A job portal to support women who are attempting to pursue a career in STEM. Contributed to the frontend. Top 6 Finalist for TCS Sustainathon 2023.",
        "links": [["Frontend Repository", "https://github.com/melissaharijanto/feminnovate-frontend"], ["Deployment", "https://feminnovate-frontend.vercel.app/"]]
    }
]


export interface Project {
    "icon": string;
    "username": string;
    "image": string;
    "name": string;
    "description": string;
    "links": string[][];
}
