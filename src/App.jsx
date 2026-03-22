import { useEffect, useState } from "react";
import {  Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProjectInfo from "./Pages/ProjectInfo"; 

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
      <div className="transition-all duration-300 bg-white dark:bg-[#0F172A] min-h-screen">
        <NavBar
          name="Hadi"
          items={["Home", "About me", "Education", "Projects", "Contact"]}
          theme={theme}
          setTheme={setTheme}
        />

        <Routes>
          {/* المسار الرئيسي: يحتوي على كل أقسام الموقع */}
          <Route path="/" element={
            <div>
              <section id="home">
                <Header
                  span="HEY!"
                  MyName="Hadi"
                  tech=",Frontend Developer"
                  description="Agency-quality Webflow websites with the personal touch of a freelancer."
                  download="Download Cv"
                  theme={theme}
                  setTheme={setTheme}
                />
              </section>

              <section id="aboutme">
                <AboutMe
                  AboutMe="About Me"
                  desc="I'm a passionate Web Developer specializing in building modern, responsive web applications using technologies like React, JavaScript, HTML5, CSS3, BootStrap and TailwindCss. I enjoy turning ideas into clean, user-friendly digital experiences and continuously improving my skills through real-world projects."
                  skills={[
                    { skill: "HTML5", percentage: 95 },
                    { skill: "CSS3", percentage: 85 },
                    { skill: "Javascript", percentage: 90 },
                    { skill: "React", percentage: 90 }
                  ]}
                  theme={theme}
                  setTheme={setTheme}
                />
              </section>

              <section id="education">
                <Education
                  h2="Education and Experience"
                  p="Education & Experience"
                  Features={[
                    {
                      title: "Self- Taught Frontend Developer", desc: "Started learning web development independently, mastering HTML, CSS, and JavaScript through online resources and personal projects. "
                    },
                    { title: "React Developer", desc: "Dived into React, learning components, hooks, React Router, and state management while building real-world projects. " },
                    { title: "Bootstrap & Responsive Design", desc: "Learned Bootstrap framework and responsive design principles, building multiple projects with clean and mobile-friendly layouts." },
                    { title: "Tailwind CSS & Modern UI", desc: "Adopted Tailwind CSS and Framer Motion to build modern, animated, and polished user interfaces." }
                  ]}
                  work="Contact me if you'd like a professional, user-friendly website. "
                  decsription="That brilliant idea in your head, let's make it a reality and a breathtaking one."
                  tocontact="Contact"
                  theme={theme}
                  setTheme={setTheme}
                />
              </section>

              <section id="projects">
                <Projects
                  Contact="Contact"
                  h2="Let’s Discuss Your"
                  Project="Project"
                  toGitHub="View GitHub"
                  theme={theme}
                  setTheme={setTheme}
                />
              </section>

              <section id="contact">
                <Contact
                  Contact="Contact"
                  h2="Let’s Discuss Your"
                  Project="Project"
                  Message="Send Message"
                  theme={theme}
                  setTheme={setTheme}
                />
              </section>

              <Footer
                CopyRights="@ 2026. All Rights Reserved"
                dev="Develpoment by Hadi"
                theme={theme}
                setTheme={setTheme}
              />

            </div>
          } />

          <Route path="/ProjectInfo" element={<ProjectInfo />} />

          {/* مسار الخطأ: يعيد أي رابط غير معرف للرئيسية */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

      </div>
  );
}

export default App;