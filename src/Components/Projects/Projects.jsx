import { RxDoubleArrowRight } from "react-icons/rx";
import Cards from '../Cards/Cards';

const Projects = ({ Contact, Project, h2, toGitHub }) => {
  return (
    <section className="py-20 px-6 md:px-16 dark:bg-gray-900">
      <div className="flex justify-between items-center mb-14">
        <div>
          <p className="text-blue-500 font-medium">{Contact}</p>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            {h2} <span className="text-blue-500">{Project}</span>
          </h2>
        </div>

        <a
          className="flex items-center gap-1 w-auto md:w-auto  text-center text-white bg-[#0C96E2] hover:bg-[#0a7cc0] transition px-8 py-3 rounded-lg font-medium shadow-lg hover:scale-105 duration-500"
          href="https://github.com/hadi-salloum-hue"
          target="_blank"
          rel="noreferrer"
        >
          {toGitHub}
          <RxDoubleArrowRight className=' hidden  lg:block w-5 h-5' />
        </a>
      </div>

      <Cards />
    </section>
  )
}

export default Projects