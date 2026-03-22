import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import  BlueMenu from "../../../public/MenuBlue.png"
import DarkMenu from "../../../public/MenuDark.png"

const NavBar = ({ theme, setTheme, name }) => {
//للموبايل مشان القائمة
    const [isOpen, setIsOpen] = useState(false);

    // قائمة روابط التنقل
    const NavItem = [
        { title: "Home", to: "#home" },
        { title: "About me", to: "#aboutme" },
        { title: "Education", to: "#education" },
        { title: "Projects", to: "#projects" },
        { title: "Contact", to: "#contact" },
    ];

    //  القسم النشط حالياً
    const [active, setActive] = useState("");

    // مراقبة الأقسام لتحديد اي قسم عالشاشة 
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach((section) => observer.observe(section));

        // تنظيف المراقب عند إزالة الكومبوننت
        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full h-18 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-17 pt-5 text-primary dark:text-white">

                <h1 className="text-2xl font-bold">{name}</h1>

                <div className="hidden md:flex items-center gap-6">
                    {NavItem.map((item, index) => (
                        <a
                            key={index}
                            href={item.to}
                            className={`text-sm hover:text-accent ${item.to === `#${active}` ? "text-[#0C96E2]" : ""
                                }`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="text-2xl cursor-pointer"
                >
                    {theme === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
                </button>

                {/* زر فتح/إغلاق القائمة -خاصة بالشاشات الصغيرة */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {theme === "dark" ? (
                        <img src= {BlueMenu} className="w-6 h-6" alt="menu" />
                    ) : (
                        <img src={DarkMenu} className="w-6 h-6" alt="menu" />
                    )}
                </button>

            </div>

            {/* منيو الموبايل - يظهر فقط لما isOpen تكون true */}
            {isOpen && (
                <div className="md:hidden fixed right-0 mt-5 w-[35%] bg-white dark:bg-gray-900 dark:text-white flex flex-col text-center gap-4 px-4 pb-3 shadow-lg">
                    {NavItem.map((item, index) => (
                        <a
                            key={index}
                            href={item.to}
                            className={`text-sm hover:text-accent ${item.to === `#${active}` ? "text-[#0C96E2]" : ""
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavBar;