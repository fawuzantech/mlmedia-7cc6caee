import { Phone, MessageSquare } from "lucide-react";

const ChatWithUs = () => {
  const phoneNumber = "+233242084800"; // Replace with your WhatsApp number
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chat with Us on WhatsApp</h1>
          <p className="text-lg text-gray-600 mb-8">
            Need assistance? Have questions? Click below to start a conversation.
          </p>

          <div className="flex flex-col items-center space-y-6">
            {/* WhatsApp Button */}
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all flex items-center space-x-3 shadow-md"
            >
              <Phone className="w-5 h-5 text-white" />
              <span>Start Chat</span>
            </a>

            {/* Optional: Support Info */}
            <div className="flex items-center text-gray-700">
              <MessageSquare className="w-5 h-5 mr-2 text-green-600" />
              <span>We usually reply within a few minutes!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWithUs;
