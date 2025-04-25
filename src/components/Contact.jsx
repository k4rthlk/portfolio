const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white dark:bg-gray-800"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-100 dark:text-gray-200">
        Let's Connect
      </h2>
      <div className="max-w-lg mx-auto text-center">
        <p className="text-gray-300 dark:text-gray-200 mb-6">
          If you would like to work with me or have any questions, feel free to
          leave your feedback or message below!
        </p>
        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xqaqaayz"  // Replace with your Formspree URL or server-side action URL
          method="POST"
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-left font-semibold text-gray-200"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-600 hover:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-left font-semibold text-gray-200"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-600 hover:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-left font-semibold text-gray-200"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Enter the subject"
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-600 hover:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-left font-semibold text-gray-200"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Write your message here"
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-600 hover:border-blue-500 transition-colors duration-300"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
