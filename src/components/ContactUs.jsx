const ContactUs = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-full max-w-[500px] bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className='text-md p-6 text-black'>Contact Us to reach out to us </p>
        <form className="flex flex-col">
          <input
            type="text"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email"
          />
          <input
            type="number"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Phone Number"
          />

          <input
            type="date"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Date of Birth"
          />
          <textarea
            name="message"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Message"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-black to-slate-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
