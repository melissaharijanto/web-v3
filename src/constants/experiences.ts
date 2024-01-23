import sq from "../assets/images/logo/sq.jpeg"
import ocbc from "../assets/images/logo/ocbc.jpeg"
import pinus from "../assets/images/logo/pinus.svg"
import nus from "../assets/images/logo/nus.jpeg"

export const experiences : Experience[] = [{
    "company": "Singapore Airlines",
    "role": "Full Stack Developer",
    "image": sq,
    "description": [],
    "period": "January 2024 - present",
    "type": "Internship",
    "imageSize": "w-24 rounded-[500px]",
},{
    "company": "OCBC",
    "role": "Test Automation Engineer",
    "image": ocbc,
    "description": [
        "Crafted comprehensive test cases to evaluate the functionality of an upcoming system.",
        "Executed **User Acceptance Testing (UAT)** procedures to ensure the upcoming system meets the set requirements.",
        "Implemented automated integration and unit testing using **Tricentis Tosca**, ensuring efficient testing coverage.",
        "Developed custom functions in VBA Excel to facilitate the **analysis of downtime data for OCBC internal applications**.",
        "Analyzed downtime data for OCBC internal applications and provided suggestions for system improvements."
    ],
    "period": "May 2023 - August 2023",
    "type": "Internship",
    "imageSize": "w-20 rounded-[500px]",
},{
    "company": "National University of Singapore",
    "role": "Student Teaching Assistance",
    "image": nus,
    "description": [
        "Developed a chatbot using the **OpenAI GPT API** for providing assignment hints.",
        "Applied **prompt engineering** in **Python** to ensure context-aware and efficient responses."
    ],
    "period": "June 2023 - December 2023",
    "type": "Part-time",
    "imageSize": "w-24 rounded-[500px] bg-white p-2",
 }, /* {
//     "company": "National University of Singapore",
//     "role": "Teaching Assistant",
//     "image": nus,
//     "description": ["Subjects Taught: **CS2030S (Programming Methodology II, Object-Oriented Programming)** and **CS2103T (Software Engineering)**", "Taught in a class of 10+ students.", "Evaluated students' Object-Oriented Programming (OOP) assignments, providing thoughtful feedback and constructive comments (CS2030S)."],
//     "period": "January 2023 - December 2023",
//     "type": "Part-time",
//     "imageSize": "w-24",
}, */ {
    "company": "NUS Indonesian Students' Association (PINUS)",
    "role": "Frontend Developer & UI/UX",
    "image": pinus,
    "description": [
        "**Developed the frontend** for a **mobile-responsive** web study forum using **React with TypeScript**.",
        "Built a **Figma prototype** of the site to visualize the design and user interface.",
        "Connected the frontend to the backend by implementing data fetching, **enabling seamless communication between the user interface and the server**.",
        "Worked closely with a group of backend developers to **ensure smooth integration and functionality of the complete application**."
      ],
    "period": "August 2022 - June 2023",
    "imageSize": "w-20 m-2",
}]

export interface Experience {
    "company": string;
    "role": string;
    "image": string;
    "description": string[];
    "period": string;
    "type"?: string;
    "imageSize"?: string;
}