import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const projectElements = document.querySelectorAll(".project");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger when 50% of the element is in the viewport

    projectElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect(); // Clean up the observer when the component unmounts
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-100">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="project bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-500 opacity-0 hover:scale-105 hover:translate-y-2">
          <h3 className="text-xl font-semibold text-gray-200">BANKIFY</h3>
          <p className="mt-2 text-gray-300">
            Full-stack banking application built using Spring Boot, Hibernate,
            JPA, and MySQL for robust backend operations, coupled with Thymeleaf
            for a dynamic frontend. The platform enables secure user
            authentication via Spring Security, supporting encrypted password
            storage and role-based access control. Designed for scalability, the
            architecture separates concerns between the service layer (business
            logic), repository layer (database operations), and REST controllers
            (API endpoints), making it extensible for future features like loan
            processing or multi-currency support.
          </p>
        </div>

        {/* Project 2 */}
        <div className="project bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-500 opacity-0 hover:scale-105 hover:translate-y-2">
          <h3 className="text-xl font-semibold text-gray-200">FITMATE</h3>
          <p className="mt-2 text-gray-300">
            An intelligent fitness platform built with Django, React, and MySQL,
            offering role-based access for admins, trainers, and users. It
            leverages machine learning to generate personalized diet and workout
            plans, along with real-time progress dashboards. The app includes
            e-commerce functionality for supplement sales and automated trainer
            assignments, creating a seamless fitness ecosystem. The robust
            backend (Django REST API) pairs with React's dynamic frontend for
            optimal performance, while Python/Scikit-learn powers the ML
            recommendations.
          </p>
        </div>

        {/* Project 3 */}
        <div className="project bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-500 opacity-0 hover:scale-105 hover:translate-y-2">
          <h3 className="text-xl font-semibold text-gray-200">CUSTOM TEES</h3>
          <p className="mt-2 text-gray-300">
            E-commerce platform built with Angular, MySQL, and vanilla JS,
            enabling users to design and order custom T-shirts with a real-time
            preview feature. The system includes an admin dashboard for order
            and inventory management, streamlining operations. Designed for
            usability, the interface offers a seamless customization-to-checkout
            flow, demonstrating strong frontend capabilities in Angular and CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
