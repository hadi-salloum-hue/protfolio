import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion"

const contactInfo = [
    {
        icon: <FaPhoneAlt />,
        title: "Call me",
        value: "+963933442824",
    },
    {
        icon: <FaEnvelope />,
        title: "Email me",
        value: "hhood5916@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        value: "Damascus, Syria",
    },
];
const inputs = [
    { type: "text", placeholder: "Full name", grid: true },
    { type: "email", placeholder: "Your email", grid: true },
    { type: "text", placeholder: "Phone number", grid: false },
];

const textareas = [
    { rows: 6, placeholder: "Message" }
];

const Contact = ({Contact,h2,Project,Message}) => {
    return (
        <section className=" py-20 px-6 md:px-16 dark:bg-gray-900">

            {/* Title */}
            <div className="mb-14">
                <p className="text-blue-500 font-medium">{Contact}</p>

                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                    {h2} <span className="text-blue-500">{Project}</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <motion.div
                    className="flex flex-col gap-6 sm:gap-8 md:gap-10"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >

                    {contactInfo.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-xl dark:bg-gray-900"
                        >

                            <div className="bg-blue-500 text-white p-3 sm:p-4 rounded-lg text-lg sm:text-xl shrink-0">
                                {item.icon}
                            </div>

                            <div className="warp-break-words">
                                <p className="text-sm sm:text-base text-gray-600">
                                    {item.title}
                                </p>
                                <p className="font-medium text-sm sm:text-base text-gray-800 dark:text-white">
                                    {item.value}
                                </p>
                            </div>

                        </div>
                    ))}

                </motion.div>

                {/* RIGHT SIDE FORM */}


                <motion.form className="flex flex-col gap-6 "
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>

                    {/* inputs داخل grid */}
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="grid md:grid-cols-2 gap-6 ">
                        {inputs
                            .filter((item) => item.grid)
                            .map((item, index) => (
                                <input
                                    key={index}
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    className=" w-full p-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500"
                                />
                            ))}
                    </motion.div>

                    {/* input خارج grid */}
                    {inputs
                        .filter((item) => !item.grid)
                        .map((item, index) => (
                            <input
                                key={index}
                                type={item.type}
                                placeholder={item.placeholder}
                                className="w-full p-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500 dark:text-white dark:border-gray-400 dark:bg-gray-900"
                            />
                        ))}

                    {textareas.map((item, index) => (
                        <textarea
                            key={index}
                            rows={item.rows}
                            placeholder={item.placeholder}
                            className="w-full p-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500 dark:text-white dark:border-gray-600 dark:bg-transparent"
                        />
                    ))}

                    <a
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg w-fit transition  hover:scale-105  duration-500"
                    >
                        {Message}
                    </a>

                </motion.form>
            </div>

        </section>
    );
};

export default Contact;