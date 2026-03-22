import { CgArrowsExpandUpRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import dashboard from "../../../public/Dashboard.png"
import Stories from "../../../public/Stories.png"
import Cozy from "../../../public/Cozy-Shope.png"
import EduPress from "../../../public/EduPress.png"
import Flora from "../../../public/Flora.png"
import Flags from "../../../public/Flags.png"

export const Projects = [
  {
    id: "dashboard",
    title: "Dashboard",
    used: "HTML,CSS,JS",
    img: dashboard, 
    description: "A comprehensive dashboard for analytics and data visualization.",
    date: "15 / 2 / 2026",
    framework: "None",
    library: "React",
    github: "https://github.com/hadi-salloum-hue/Dashboard",
    Demo: "https://hadi-salloum-hue.github.io/Dashboard/"
  },
  {
    id: "stories",
    title: "Stories",
    used: "HTML,CSS,JS",
    img: Stories,
    description: "Interactive stories and interviews platform.",
    date: "16/1/2026",
    framework: "None",
    library: "React",
    github: "https://github.com/hadi-salloum-hue/Stories-Interviews",
    Demo: "https://hadi-salloum-hue.github.io/Stories-Interviews/"
  },
  {
    id: "cozy-shope",
    title: "Cozy-Shope",
    used: "HTML,CSS,JS",
    img: Cozy,
    description: "A cozy e-commerce template for small businesses.",
    date: " 28 / 12 / 2025",
    framework: "None",
    library: "None",
    github: "https://github.com/hadi-salloum-hue/Cozy-Shope",
    Demo: "https://hadi-salloum-hue.github.io/Cozy-Shope/"
  },
  {
    id: "edupress",
    title: "EduPress",
    used: "HTML,CSS",
    img: EduPress,
    description: "Educational landing page with modern design.",
    date: "30/11/2025 ",
    framework: "None",
    library: "None",
    github: "https://github.com/hadi-salloum-hue/EduPress",
    Demo: "https://hadi-salloum-hue.github.io/EduPress/"
  },
  {
    id: "flora",
    title: "Flora",
    used: "HTML,CSS",
    img: Flora,
    description: "Florist website showcasing plants and services.",
    date: "5/11/2025",
    framework: "None",
    library: "None",
    github: "https://github.com/hadi-salloum-hue/Flora",
    Demo: "https://hadi-salloum-hue.github.io/Flora/"
  },
  {
    id: "flags",
    title: "Flags",
    used: "HTML,CSS",
    img: Flags,
    description: "Flags quiz and information game.",
    date: "16/10/2025",
    framework: "None",
    library: "None",
    github: "https://github.com/hadi-salloum-hue/Flags",
    Demo: "https://hadi-salloum-hue.github.io/Flags/"
  },
];

const Cards = ({PjojectInfoCss="", projects = Projects }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className={`grid gap-8 ${PjojectInfoCss || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-[#FFFF] dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-1000"
        >
          <img
            src={project.img}
            alt={project.title}
            onClick={() => navigate(`/projectinfo`, { state: { projectData: project } })}
            className="w-full h-52 object-cover cursor-pointer hover:opacity-90 transition"
          />

          <div className="p-6 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {project.used}
              </p>
            </div>

            <a
              href={project.Demo}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700 text-2xl"
            >
              <CgArrowsExpandUpRight />
            </a>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Cards;