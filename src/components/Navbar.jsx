import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-7xl flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src="src/assets/brr.png" alt="Logo" className="w-20 h-10 mr-4" />
        </div>

        {/* Navbar Links with popping animation */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="inline-block transition-all duration-300 ease-out 
                         hover:text-blue-400 cursor-pointer
                         hover:scale-105 hover:-translate-y-0.5
                         active:scale-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="inline-block transition-all duration-300 ease-out 
                         hover:text-blue-400 cursor-pointer
                         hover:scale-105 hover:-translate-y-0.5
                         active:scale-100"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="inline-block transition-all duration-300 ease-out 
                         hover:text-blue-400 cursor-pointer
                         hover:scale-105 hover:-translate-y-0.5
                         active:scale-100"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="inline-block transition-all duration-300 ease-out 
                         hover:text-blue-400 cursor-pointer
                         hover:scale-105 hover:-translate-y-0.5
                         active:scale-100"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Z2Xr9nToOUJZtsyUzG-b3RDez61l3hjn/view?usp=sharing" // Replace with your actual link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-all duration-300 ease-out 
               hover:text-blue-400 cursor-pointer
               hover:scale-105 hover:-translate-y-0.5
               active:scale-100"
            >
              Resume
            </a>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-block transition-all duration-300 ease-out 
                         hover:text-blue-400 cursor-pointer
                         hover:scale-105 hover:-translate-y-0.5
                         active:scale-100"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
