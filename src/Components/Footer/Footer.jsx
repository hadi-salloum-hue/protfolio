import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";



const Social = [
    {
        icon: <FaFacebookF className="text-[#0C96E2]" />,
        href: "https://www.facebook.com/share/17uRbXsUSb/"
    },

    {
        icon: <FaInstagram className="text-[#0C96E2]" />,
        href: " https://www.instagram.com/hadi2003salloum?igsh=MWwxbGhhZ2h2NDd4dg=="
    },

    {
        icon: <LiaTelegramPlane className="text-[#0C96E2]" />,
        href: "https://t.me/Hadi_AL_Salloum"
    },
    {
        icon: <FaLinkedinIn className="text-[#0C96E2]" />,
        href: "#"
    },
];

const Footer = ({ CopyRights, dev }) => {
    return (
        <div className="w-full flex flex-col  md:flex-row items-center justify-between gap-2 mt-3 md:mt-0 px-6 md:px-17.5 py-6 text-primary dark:text-white bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">

            <a href="">{CopyRights}</a>
            <a href="">{dev}</a>

            <div className="flex items-center gap-4">
                {Social.map((item, index) => (
                    <a key={index} href={item.href} className="text-xl">
                        {item.icon}
                    </a>
                ))}
            </div>

        </div>
    );
};

export default Footer;