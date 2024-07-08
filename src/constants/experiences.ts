import sq from "../assets/images/logo/sq.jpeg"
import ocbc from "../assets/images/logo/ocbc.jpeg"
import pinus from "../assets/images/logo/pinus.svg"
import nus from "../assets/images/logo/nus.jpeg"

export const experiences : Experience[] = [{
    "company": "Singapore Airlines",
    "role": "Full Stack Developer",
    "image": sq,
    "description": "\u2022 Built a **Streamlit** prototype incorporating **Generative AI** and **prompt engineering** to streamline ideation processes. <br> \u2022 Developed prototype which integrates **WebSockets**, **FastAPI**, and **React** for a real-time chat app with audio input/output using SpeechRecognition and SpeechSynthesis **Web APIs**. <br> \u2022 Contributed to the **frontend development** and the **backend integration** to build a quiz app with **React Typescript** and **FastAPI**.",
    "period": "January 2024 - June 2024",
    "type": "Internship",
    "imageSize": "w-20 rounded-[500px]",
    "techStack": ["Streamlit", "Generative AI", "ReactJS", "FastAPI", "Web APIs"]
},{
    "company": "OCBC",
    "role": "Test Automation Engineer",
    "image": ocbc,
    "description": "Crafted test cases, executed **User Acceptance Testing (UAT)**, and implemented automated integration and unit testing. Analyzed applications' downtime data and provided suggestions for system improvements.",
    "period": "May 2023 - August 2023",
    "type": "Internship",
    "imageSize": "w-20 rounded-[500px]",
    "techStack": ["VBA Excel", "Tricentis Tosca"]
},{
    "company": "NUS",
    "role": "Student Teaching Assistance",
    "image": nus,
    "description": "Developed a chatbot with **ChatGPT API** for the 'Teaching with AI' scheme. Conducted **prompt engineering** to ensure contextual and efficient responses.",
    "period": "June 2023 - December 2023",
    "type": "Part-time",
    "imageSize": "w-20 rounded-[500px] bg-white p-2",
    "techStack": ["ChatGPT API", "Python"]
 }, /* {
//     "company": "National University of Singapore",
//     "role": "Teaching Assistant",
//     "image": nus,
//     "description": ["Subjects Taught: **CS2030S (Programming Methodology II, Object-Oriented Programming)** and **CS2103T (Software Engineering)**", "Taught in a class of 10+ students.", "Evaluated students' Object-Oriented Programming (OOP) assignments, providing thoughtful feedback and constructive comments (CS2030S)."],
//     "period": "January 2023 - December 2023",
//     "type": "Part-time",
//     "imageSize": "w-24",
}, */ {
    "company": "NUS Indonesian Students' Association",
    "role": "Frontend Developer & UI/UX",
    "image": pinus,
    "description": "Built a Figma **wireframe** and participated in **frontend development** of a **mobile-responsive** study web forum. **Connected frontend to the backend** and worked together with backend developers to ensure that the requirements are met.",
    "period": "August 2022 - June 2023",
    "techStack": ["React", "TypeScript", "Figma"]
}]

/*
[
        "Developed a chatbot using the **OpenAI GPT API** for providing assignment hints.",
        "Applied **prompt engineering** in **Python** to ensure context-aware and efficient responses."
    ],
[
    "**Developed the frontend** for a **mobile-responsive** web study forum using **React with TypeScript**.",
    "Built a **Figma prototype** of the site to visualize the design and user interface.",
    "Connected the frontend to the backend by implementing data fetching, **enabling seamless communication between the user interface and the server**.",
    "Worked closely with a group of backend developers to **ensure smooth integration and functionality of the complete application**."
]
[
        "Crafted comprehensive test cases to evaluate the functionality of an upcoming system.",
        "Executed **User Acceptance Testing (UAT)** procedures to ensure the upcoming system meets the set requirements.",
        "Implemented automated integration and unit testing using **Tricentis Tosca**, ensuring efficient testing coverage.",
        "Developed custom functions in VBA Excel to facilitate the **analysis of downtime data for OCBC internal applications**.",
        "Analyzed downtime data for OCBC internal applications and provided suggestions for system improvements."
    ]
  */
export interface Experience {
    "company": string;
    "role": string;
    "image": string;
    "description": string;
    "period": string;
    "type"?: string;
    "imageSize"?: string;
    "techStack"?: string[];
}