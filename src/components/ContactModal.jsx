import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mkgjnbnr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        e.target.reset();
        onClose();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#020202] bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleOutsideClick}
      >
        <motion.div
          className="relative bg-[#EEEFEC] p-8 rounded-lg shadow-lg max-w-4xl w-full mx-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          ref={modalRef}
        >
          <h2 className="text-3xl font-semibold text-[#020202] mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#020202] mb-1" htmlFor="name">Your Name</label>
              <motion.input
                className="w-full px-4 py-2 bg-[#D5D6D5] rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#C0C0AF]"
                placeholder="Enter your name"
                type="text"
                name="name"
                required
                whileFocus={{ scale: 1.05 }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#020202] mb-1" htmlFor="email">Your Email</label>
              <motion.input
                className="w-full px-4 py-2 bg-[#D5D6D5] rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#C0C0AF]"
                placeholder="Enter your email"
                name="email"
                type="email"
                required
                whileFocus={{ scale: 1.05 }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#020202] mb-1" htmlFor="message">Your Message</label>
              <motion.textarea
                className="w-full px-4 py-2 bg-[#D5D6D5] rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#C0C0AF]"
                rows="6"
                placeholder="Enter your message"
                name="message"
                required
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
            </div>
            <motion.button
              className="w-full bg-[#C0C0AF] text-[#020202] py-3 px-6 rounded-2xl transition duration-300"
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
          <motion.button
            className="absolute top-4 right-4 text-[#020202] hover:text-[#C0C0AF] transition duration-300"
            onClick={onClose}
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            ✖
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;
