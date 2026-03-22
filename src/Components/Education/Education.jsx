import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion"
import RightTop from "../../../public/RightTop.svg"
import LeftBottom from "../../../public/LeftBottom.svg"
import bgEdu from "../../../public/BgEdu.png"
import { LiaArrowCircleDownSolid } from "react-icons/lia";

const Feature = ({ title, desc }) => {
  return (
    <div className="relative pl-5">

      {/* الخط */}
      <div
        className="absolute left-3 top-0 h-full border-l-2 border-dashed"
        style={{ borderLeft: "3px dashed gray-900" }}
      ></div>

      {/* الدائرة */}
      <div className="absolute left-1.5  w-4 h-4 bg-blue-500 rounded-full border-2 dark:border-white border-gray-900"></div>

      <dt className="text-[22px] lg:text-[25px] font-bold dark:text-white ml-8">
        {title}
      </dt>

      <dd className="mt-2 text-sm lg:text-base text-gray-400 ml-8">
        {desc}
      </dd>

    </div>
  )
}

const Education = ({ h2, p, Features, tocontact, work, decsription }) => {
  return (

    <section className="relative dark:bg-gray-900 py-10 sm:py-24  lg:py-[0%] px-4 sm:px-6 lg:px-10 overflow-hidden">

      {/* الصورة أعلى اليمين */}
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={RightTop}
        alt=""
        className="hidden lg:block  absolute top-60 right-10 w-32 lg:w-40"
      />

      {/* الصورة أسفل اليسار */}
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={LeftBottom}
        alt=""
        className="hidden lg:block relative  bottom-0 top-142 w-32 lg:w-40"
      />

      <div className="mx-auto max-w-350">

        {/* العنوان */}
        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-[20px] mb-4  font-semibold text-indigo-400">
            {h2}
          </h2>

          <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold dark:text-white">
            {p}
          </p>

        </div>

        {/* العناصر */}
        <div className="mt-16 lg:mt-20">

          <dl className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12">

            {Features.map((item, index) => (
              <Feature
                key={index}
                title={item.title}
                desc={item.desc}
              />
            ))}

          </dl>

        </div>

      </div>

      {/*زر السهم*/}
      <motion.a
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        href="#home"
        className="hidden lg:flex relative bottom-7 top-5 left-[95%] bg-[#0C96E2] w-12 h-12 items-center justify-center rounded-xl shadow-lg hover:scale-110 transition overflow-hidden"
      >
        <FaArrowUp className="text-white text-lg" />
      </motion.a>



      <motion.div
        className="my-10 md:my-10 mx-auto px-4 md:px-6 xl:mt-40"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="relative w-full sm:w-[90%] md:w-[75%] rounded-4xl px-6 py-10 md:px-16 md:py-20 overflow-hidden mx-auto "
          style={{ backgroundColor: "#0C96E2" }}
        >

          {/* صورة الخلفية */}
          <img
            src={bgEdu}
            alt="bg image"
            className="absolute inset-2 rounded-[20px]  w-full h-full object-cover"
          />

          {/* المحتوى */}
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6 text-center md:text-left">

            <div className="flex flex-col gap-4 max-w-xl">

              {/* العنوان */}
              <motion.h2
                className="text-2xl sm:text-xl md:text-3xl font-bold text-white"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {work}
              </motion.h2>

              {/* الوصف */}
              <motion.p
                className="text-white text-sm sm:text-base"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {decsription}
              </motion.p>

            </div>

            {/* الزر */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white bg-[#0C96E2] hover:bg-[#0a7cc0] px-8 py-3 rounded-lg font-medium shadow-lg hover:scale-105 transition w-fit"
              >
                {tocontact}
                <LiaArrowCircleDownSolid className="hidden sm:block w-5 h-5" />
              </a>
            </motion.div>

          </div>
        </div>
      </motion.div>

    </section>
  )
}

export default Education