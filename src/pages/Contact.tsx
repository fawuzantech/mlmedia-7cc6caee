import { Phone, MessageSquare, Mail, ArrowRight } from "lucide-react"

const ChatWithUs = () => {
  const phoneNumber = "+233242084800" // Replace with your WhatsApp number
  const whatsappURL = `https://wa.me/${phoneNumber}`

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Chat with Us
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Have questions about our services? Need a quote? Our team is ready to assist you through WhatsApp or
              email.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp Option */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">WhatsApp Chat</h3>
              <p className="text-gray-600 mb-6 text-center">
                Connect with us instantly via WhatsApp for quick responses and real-time assistance.
              </p>
              <div className="flex justify-center">
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md"
                >
                  Start Chat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-center text-gray-600">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                <span>We usually reply within a few minutes!</span>
              </div>
            </div>

            {/* Email Option */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Email Us</h3>
              <p className="text-gray-600 mb-6 text-center">
                Send us a detailed message and we'll get back to you within 24 hours.
              </p>
              <div className="flex justify-center">
                <a
                  href="mailto:masslawry@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md"
                >
                  Send Email
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center text-gray-600">
                <p className="font-medium">masslawry@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatWithUs

