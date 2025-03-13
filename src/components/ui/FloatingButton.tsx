import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react"; // Using lucide-react icons (Install it: `npm install lucide-react`)

const FloatingButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate("/")}
    >
      <Home size={24} />
    </motion.button>
  );
};

export default FloatingButton;
