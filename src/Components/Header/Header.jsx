import Vector1 from "../../../public/Vector 1.png"
import CV from "../../../public/Hadi Al-Salloum.pdf"
import Vector3 from "../../../public/Vector 3.png"
import BlurGradient from "../../../public/Blur Gradient.png"
import HadiPhoto from "../../../public/Hadi.png"
import squers from "../../../public/squers.svg"
import { motion } from "framer-motion"
import { FaArrowUp } from "react-icons/fa"
const Header = ({ span, MyName, tech, description, download }) => {
    return (
        <div>
            <section
                id="home"
                className="w-full h-auto md:h-137.5 px-6 md:px-17.5 py-12.5 my-17.5 flex flex-col md:flex-row items-center justify-between text-primary dark:text-white bg-white dark:bg-gray-900 relative overflow-hidden"
                // خلفية الـ SVG الزخرفية من الأسفل
                style={{
                    backgroundImage: `url('${Vector1}'), url('${Vector3}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom'
                }}
            >

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 2.5 }}
                    className="w-full md:w-1/2 flex flex-col gap-4 py-12  order-2 md:order-1 items-center md:items-start text-center md:text-left rounded-3xl"
                    // خلفية التدرج خلف النص
                    style={{
                        backgroundImage: `url('${BlurGradient}')`,
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    {/* العنوان الرئيسي */}
                    <h1 className="text-3xl lg:text-5xl font-bold leading-snug ml-5">
                        <span className="font-normal">{span}</span>{MyName}<br />{tech}
                    </h1>

                    <p className="w-full max-w-90 ml-5 text-[16px]  md:text-[12px] leading-[150%] tracking-normal text-[#43495B] dark:text-gray-300">
                        {description}
                    </p>

                    {/* زر تحميل الـ CV  */}
                    <a
                        href={CV}
                        download={CV}
                        className="bg-white/60 mt-6 md:mt-7.5 px-6 py-3 ml-5 rounded-lg w-fit text-primary dark:text-white hover:bg-primary hover:text-[#0C96E2] dark:hover:bg-white dark:hover:text-[#0C96E2] transition-all duration-300"
                    >
                        {download}
                    </a>
                </motion.div >
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center items-center order-2  ">

                    {/* الخلفية squers */}
                    <img
                        src={squers}
                        alt=""
                        className="w-65 sm:w-[320px] md:w-90 lg:w-105 top-6 relative z-0  "
                    />

                    <img
                        src={HadiPhoto}
                        alt="Hadi"
                        className=" w-[80%] sm:w-57.5 md:w-65 lg:w-75 absolute top-6 z-10 drop-shadow-2xl "
                    />

                </motion.div>

            </section>
            {/* الخط يلي اخر شي */}
            <div className="relative flex items-center ">
                <hr className="w-full border-t-4  border-dotted border-[#1D2130] dark:border-white" />
                {/* الدائرة ضمن الخط */}
                <div className="absolute left-1/2 -translate-x-1/2 bg-white p-1 rounded-full border border-[#1D2130] ">
                    <div className="w-3 h-3 border border-[#1D2130] rounded-full"></div>
                </div>
            </div>
            {/* الزر هاد بضل ثابت بكل الportfolio وبرجعني لالول الموقع */}
            <a
                href="#home"
                className=" fixed left-6 bottom-6  bg-[#0C96E2] z-20 w-12 h-12 flex items-center justify-center rounded-xl shadow-lg hover:scale-110 transition"
            >
                <FaArrowUp className="text-white text-lg" />
            </a>
        </div>
    );
};

export default Header;

  