import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import Cards from "../Components/Cards/Cards";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { Projects } from "../Components/Cards/Cards";
import Footer from "../Components/Footer/Footer";

const ProjectInfo = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);

    // متغير جديد لتحديد عدد العناصر حسب حجم الشاشة
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const displayedProjects = Projects;

    // --- دالة لتحديث عدد العناصر عند تغيير حجم الشاشة ---
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1); // شاشات صغيرة: عنصر واحد
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2); // شاشات وسط: عنصرين
            } else {
                setItemsPerPage(3); // شاشات كبيرة: 3 عناصر
            }
        };

        // استدعاء الدالة عند التحميل وعند تغيير الحجم
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //  Slider  
    const nextSlide = () => {
        // نتوقف عندما يتبقى عدد من العناصر يساوي itemsPerPage
        if (currentSlide < displayedProjects.length - itemsPerPage) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    /* التحقق من وجود بيانات المشروع */
    if (!location.state || !location.state.projectData) {
        navigate("/", { replace: true });
        return null;
    }

    const { projectData } = location.state;

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F172A] py-2 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* معلومات المشروع الرئيسي */}
                <div className="flex justify-between mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 lg:flex-row flex-col dark:border-gray-700">
                    <div className="lg:w-2/3 relative bg-gray-100 dark:bg-gray-900 group rounded-2xl">
                        <img
                            src={projectData.img}
                            alt={projectData.title}
                            className="w-full h-full object-cover min-h-100"
                        />
                    </div>

                    <div className="lg:w-1/3 p-8 lg:p-10 flex flex-col justify-center bg-white dark:bg-[#0F172A]">
                        <div className="flex justify-between">
                            <div className="mb-2">
                                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                    {projectData.title}
                                </h1>
                                <span className="text-blue-500 font-semibold tracking-wide uppercase text-xs">
                                    {projectData.date}
                                </span>
                            </div>
                            <a href={projectData.Demo} className="dark:text-blue-500 text-gray-900" target="_blank" rel="noreferrer noopener">
                                <FaArrowUpRightFromSquare className="h-auto w-7 pt-4" />
                            </a>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                            {projectData.description}
                        </p>

                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase mb-4">Tech Stack</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 dark:text-gray-300 font-medium">Framework</span>
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-bold">
                                    {projectData.framework}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 dark:text-gray-300 font-medium">Libraries</span>
                                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-bold">
                                    {projectData.library || "N/A"}
                                </span>
                            </div>
                        </div>

                        <a
                            href={projectData.github}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center justify-center gap-2 mt-10 text-white bg-[#0C96E2] hover:bg-[#0a7cc0] transition px-6 py-3 rounded-lg font-medium shadow-lg hover:scale-105 duration-500"
                        >
                            <FaGithub /> Github Repo
                        </a>
                    </div>
                </div>
            </div>

            {/*  زر العودة للصفحة الرئيسية */}
            <div className="flex justify-end m-10">
                <Link to="/" className="inline-flex items-center gap-2 text-white bg-[#0C96E2] hover:bg-[#0a7cc0] transition px-6 py-3 rounded-lg font-medium shadow-lg hover:scale-105 duration-500">
                    <FaArrowLeft className="mr-2" /> Back to Home
                </Link>
            </div>

            {/* الخط الفاصل */}
            <div className="relative flex items-center">
                <hr className="w-full border-t-4 border-dotted border-[#1D2130] dark:border-white" />
                <div className="absolute left-1/2 -translate-x-1/2 bg-white p-1 rounded-full border border-[#1D2130]">
                    <div className="w-3 h-3 border border-[#1D2130] rounded-full"></div>
                </div>
            </div>

            {/* قسم المشاريع مع السلايدر */}
            <div className="flex justify-between items-center mb-14 mt-14 ml-4 sm:ml-12 mr-4 sm:mr-12">
                <div>
                    <p className="text-blue-500 font-medium">Portfolio</p>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        The Best <span className="text-blue-500">Projects</span>
                    </h2>
                </div>
                <div className="flex ">
                    <button
                        onClick={prevSlide}
                        className="p-3 hover:cursor-pointer hover:text-gray-800 text-blue-500 text-3xl"
                    >
                        <IoIosArrowDropleft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 hover:cursor-pointer hover:text-gray-800 text-blue-500 text-3xl"
                    >
                        <IoIosArrowDropright />
                    </button>
                </div>
            </div>

            {/* ******************************************************************* */}
            <div className="relative w-full overflow-hidden mt-8">
                <div
                    className="flex gap-6 transition-transform duration-500 ease-in-out"
                    style={{
                        width: `calc(100% + ${(displayedProjects.length - 1) * 24}px)`,
                        // استخدام itemsPerPage في الحساب ليتناسب مع الشاشة
                        transform: `translateX(-${currentSlide * (100 / itemsPerPage)}%)`
                    }}
                >
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
                        >
                            <Cards
                                projects={[project]}
                                PjojectInfoCss="grid grid-cols-1 w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* ******************************************************************* */}

            {/* نقاط التنقل */}
            <div className="flex justify-center mt-8 mb-4 gap-2">
                {/* عدد النقاط يتغير بناءً على itemsPerPage */}
                {Array.from({ length: Math.max(0, displayedProjects.length - itemsPerPage + 1) }).map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 w-2 rounded-full transition-all cursor-pointer ${currentSlide === idx ? 'bg-blue-500 w-6' : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                    >
                    </div>
                ))}
            </div>
            <Footer />
        </div >
    );
};

export default ProjectInfo;