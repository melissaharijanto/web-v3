import TravelLog from "../assets/images/travel-log.png";
import PinusStudy from "../assets/images/pinus-study.png"
import Gameroom from "../assets/images/gameroom.png";
import DefaultIcon from "../assets/images/default-icon.png";
import Classroom360 from "../assets/images/classroom360.png";
import TrackO from "../assets/images/track-o.png";
import Feminnovate from "../assets/images/feminnovate.png";

export const projects : Project[] = [
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": TravelLog,
        "name": "TravelLog",
        "description": "Travel planner mobile app made with React Native, Firebase and Google Maps API. Tested with React Native Testing Library. Contributed as a full-stack developer.",
        "link": "",
    },
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": PinusStudy,
        "name": "PINUS Study",
        "description": "Study forum for Indonesian students in NUS, built with React Typescript and Go. Contributed to Figma prototype and UI/UX, frontend development and backend integration.",
        "link": "",
    },
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": Gameroom,
        "name": "GameRoom",
        "description": "Forum for gamers, built with React Typescript and Ruby on Rails. Personal project, contributed as a full-stack developer.",
        "link": "",
    },
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": Classroom360,
        "name": "Classroom360",
        "description": "A virtual classroom built with React 360. Contributed to the UI. Top 15 Finalist for Lifehack 2023.",
        "link": "",
    },
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": TrackO,
        "name": "TrackO",
        "description": "Order and inventory tracking application built with JavaFX. Contributed to the implementation of some features and the UI.",
        "link": "",
    },
    {
        "icon": DefaultIcon,
        "username": "melissaharijanto",
        "image": Feminnovate,
        "name": "Feminnovate",
        "description": "A job portal to support women who are attempting to pursue a career in STEM. Top 6 Finalist for TCS Sustainathon 2023.",
        "link": "",
    }
]


export interface Project {
    "icon": string;
    "username": string;
    "image": string;
    "name": string;
    "description": string;
    "link": string;
}
