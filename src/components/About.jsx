const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900 text-center text-white dark:bg-gray-800"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-100 dark:text-gray-200 fade-up">
        About Me
      </h2> 
      <div className="max-w-lg mx-auto fade-up">
        <img
          src="/src/assets/image.png"
          alt="Profile"
          className="rounded-full w-40 h-40 mx-auto mb-6 shadow-lg transform transition-all duration-500 ease-out hover:scale-105"
        />
        
        {/* Your name styled better */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-4">
          Karthik Suresh
        </h2>

        <p className="text-xl text-gray-300 dark:text-gray-200 fade-up">
          I'm a passionate Full Stack Developer with experience in building web
          applications using React, Spring Boot, and other modern technologies. I
          love creating scalable solutions that make people's lives easier.
        </p>
      </div>
    </section>
  );
};

export default About;
