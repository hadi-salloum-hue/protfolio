import aboutLeft from "../../../public/aboutLeft.png"
import { motion } from "framer-motion"

const MySkills = ({ skill, percentage }) => {
    return (
        <div className="flex flex-col gap-2 mb-6">

            <span className="font-semibold text-lg text-primary dark:text-white">{skill}</span>

            {/* الشريط الرمادي الخلفي */}
            <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">

                {/* الشريط الأزرق اللي يمتلئ حسب النسبة */}
                <div
                    className="h-full bg-[#0C96E1] rounded-full relative"
                    style={{ width: `${percentage}%` }}
                >
                    {/* دائرة عرض النسبة*/}
                    <div className="absolute -right-5 -top-9 flex flex-col items-center">
                        <span className="text-xs bg-[#0C96E1] text-white px-2 py-0.5 rounded-sm">
                            {percentage}%
                        </span>
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#0C96E1]" />
                    </div>

                    <div
                        className="absolute -right-3 -top-2 w-6 h-6 rounded-full bg-white border-[3px] border-[#0C96E1]"
                        style={{ boxShadow: '0px 4px 7px 0px #00000033' }}
                    />
                </div>
            </div>
        </div>
    )
}
const AboutMe = ({ AboutMe, desc, skills }) => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between mt-12  md:mt-20 px-6 md:px-20 gap-10">
            {/* الصورة */}
            <motion.div
                initial={{ y: -200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex justify-center"
            >
                <img
                    src={aboutLeft}
                    alt="frontend"
                    className="w-[80%] md:w-full max-w-md"
                />
            </motion.div>

            {/* النص */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
            >
                <h1 className="font-bold text-3xl md:text-4xl text-[#1D2130] mb-5 dark:text-white">
                    {AboutMe}
                </h1>

                <p className="text-base md:text-[14px] text-[#1D2130] dark:text-white mb-6 ">
                    {desc}
                </p>

                {skills.map((item, index) => (
                    <MySkills
                        key={index}
                        skill={item.skill}
                        percentage={item.percentage}
                    />
                ))}
            </motion.div>

        </section>
    )
}

export default AboutMe
