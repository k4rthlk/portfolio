const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-100">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* React */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img src="/src/assets/react.svg" alt="React" className="w-16 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-200">React</h3>
        </div>
        
        {/* Java */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img src="/src/assets/java.svg" alt="Java" className="w-16 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-200">Java</h3>
        </div>
        
        {/* Spring Boot */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img src="/src/assets/spring.png" alt="Spring Boot" className="w-16 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-200">Spring Boot</h3>
        </div>
        
        {/* JavaScript */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img src="/src/assets/js.png" alt="JavaScript" className="w-16 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-200">JavaScript</h3>
        </div>
        
        {/* Python */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img src="/src/assets/Python.png" alt="Python" className="w-16 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-200">Python</h3>  
        </div>
        
        {/* Django */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img src="/src/assets/dj.png" alt="Django" className="w-16 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-200">Django</h3>
        </div>
        
        {/* Angular */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img src="/src/assets/an.png" alt="Angular" className="w-16 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-200">Angular</h3>
        </div>
        
        {/* MySQL */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <img src="/src/assets/sq.png" alt="MySQL" className="w-16 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-200">MySQL</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
