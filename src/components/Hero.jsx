const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center text-center text-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900"
    >
      <div className="px-6 md:px-12 animate-fadeIn">
        {/* Main Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-100 dark:text-gray-200 transform transition-all duration-500 ease-out hover:scale-105">
          Hi, I'm Karthik
        </h1>

        {/* Introduction */}
        <p className="text-lg sm:text-xl mb-6 text-gray-200 dark:text-gray-300 transform transition-all duration-500 ease-out hover:scale-105">
          A Full Stack Developer specializing in React, Spring Boot, and building beautiful UIs.
        </p>

        {/* Additional Information */}
        <p className="mt-6 text-sm sm:text-base text-gray-300 dark:text-gray-400">
          Let's collaborate and build something amazing together. Feel free to explore my work below!
        </p>

        {/* Points Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto transform transition-all duration-500 ease-out hover:scale-105">
            <h3 className="font-semibold text-lg text-gray-200">Full Stack Development</h3>
            <p className="mt-2 text-gray-300">
              Experience in building scalable and efficient full-stack applications using modern technologies like React, Node.js, and Spring Boot.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto transform transition-all duration-500 ease-out hover:scale-105">
            <h3 className="font-semibold text-lg text-gray-200">UI/UX Design</h3>
            <p className="mt-2 text-gray-300">
              Passionate about creating beautiful and user-friendly interfaces with a focus on responsive design and performance.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto transform transition-all duration-500 ease-out hover:scale-105">
            <h3 className="font-semibold text-lg text-gray-200">Collaborative Projects</h3>
            <p className="mt-2 text-gray-300">
              Strong team player, experienced in collaborating on projects with cross-functional teams to deliver high-quality products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
