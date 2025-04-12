import { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
    const [tabData,setTabData] = useState([
        {
          id: 1,
          title: "YouTube",
          color: "bg-red-600",
          link: "tab/youtube",
          role: "all", // visible to all roles
        },
        {
          id: 2,
          title: "Digital Products",
          color: "bg-gray-700",
          link: "tab/digital-products",
          role: "admin", // only admin can CRUD here
        },
        {
          id: 3,
          title: "Study Material & Circular",
          color: "bg-green-700",
          link: "tab/study-material",
          role: "all",
        },
        {
          id: 4,
          title: "Degree I Year",
          color: "bg-blue-500",
          link: "tab/degree-i-year",
          role: "all",
        },
        {
          id: 5,
          title: "Diploma I Year",
          color: "bg-green-500",
          link: "tab/diploma-i-year",
          role: "all",
        },
        {
          id: 6,
          title: "Degree (II, III & IV Year)",
          color: "bg-purple-500",
          link: "tab/degree-senior",
          role: "all",
        },
        {
          id: 7,
          title: "Diploma (II & III Year)",
          color: "bg-orange-500",
          link: "tab/diploma-senior",
          role: "all",
        },
        {
          id: 8,
          title: "Board / GUJCET",
          color: "bg-teal-500",
          link: "tab/gujcet",
          role: "all",
        },
        {
          id: 9,
          title: "JEE / NEET",
          color: "bg-red-500",
          link: "tab/jee-neet",
          role: "all",
        },
        {
          id: 10,
          title: "Competitive Exam Video Courses",
          color: "bg-gray-600",
          link: "tab/competitive-video",
          role: "all",
        },
        {
          id: 11,
          title: "Competitive Exam MCQ Courses",
          color: "bg-blue-900",
          link: "tab/competitive-mcq",
          role: "all",
        }
      ])
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {tabData.map((tab, idx) => (
           <Link
           key={tab.id}
           to={tab.link}
           className={`text-white text-center rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300 ${tab.color}`}
         >
           {tab.title}
         </Link>
        ))}
      </div>
    );
  };
  
  export default Tabs;