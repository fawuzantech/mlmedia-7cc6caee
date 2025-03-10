
import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or questions about our services? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-masslawry-blue/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-masslawry-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">For immediate assistance</p>
              <a href="tel:+1234567890" className="text-masslawry-blue hover:text-masslawry-orange transition-colors">+1 (234) 567-890</a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-masslawry-blue/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-masslawry-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">For quotes and inquiries</p>
              <a href="mailto:info@masslawry.com" className="text-masslawry-blue hover:text-masslawry-orange transition-colors">info@masslawry.com</a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-masslawry-blue/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-masslawry-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our office location</p>
              <address className="not-italic text-masslawry-blue">123 Creative St, Design City, 12345</address>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-2 text-masslawry-blue" />
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-masslawry-blue"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-masslawry-blue"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-masslawry-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-masslawry-blue"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Digital Printing">Digital Printing</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Branding">Branding</option>
                        <option value="Web Solutions">Web Solutions</option>
                        <option value="Photography">Photography</option>
                        <option value="3D Signs">3D Signs</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-masslawry-blue"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-masslawry-blue text-white rounded-lg hover:bg-masslawry-darkblue transition-colors shadow-md w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="bg-gradient-to-br from-masslawry-blue to-masslawry-darkblue flex items-center justify-center text-white p-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Let's Start a Project Together</h3>
                  <p className="mb-6">
                    Looking for creative solutions for your business? Our team is ready to help you bring your ideas to life.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Business Hours</h4>
                        <p className="text-sm opacity-80">Monday-Friday: 9am-6pm</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Response Time</h4>
                        <p className="text-sm opacity-80">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
