import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/233242084800"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Home Button */}
      <motion.button
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/")}
        aria-label="Back to Home"
      >
        <Home size={24} />
      </motion.button>
    </div>
  );
};

export default FloatingButtons; 