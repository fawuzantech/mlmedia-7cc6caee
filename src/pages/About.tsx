
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Masslawry</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're a creative agency dedicated to bringing your ideas to life through exceptional design, printing, and digital solutions.
            </p>
          </div>
          
          <div className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-masslawry-blue to-masslawry-orange"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, Masslawry began as a small printing service with a vision to provide high-quality creative solutions to businesses of all sizes. Over the years, we've grown into a full-service creative agency, expanding our offerings to include graphic design, web development, branding, photography, and 3D fabrication.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been driven by a passion for creativity and a commitment to excellence. We believe that great design has the power to transform businesses and create meaningful connections with audiences.
              </p>
              <p className="text-gray-700">
                Today, we're proud to serve clients across various industries, helping them communicate their brand message effectively through multiple channels and mediums.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-masslawry-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Creativity</h3>
                <p className="text-gray-600">We approach every project with fresh ideas and innovative solutions that help our clients stand out.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-masslawry-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">We are committed to delivering the highest quality in everything we do, from concept to execution.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-masslawry-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Partnership</h3>
                <p className="text-gray-600">We build lasting relationships with our clients, working collaboratively to achieve their goals.</p>
              </div>
            </div>
          </div>
          
  <div className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
  <div className="grid md:grid-cols-4 gap-6">
    
    {/* Team Member 1 */}
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img src="/uploads/member1.jpg" alt="John Doe" className="h-48 w-full object-cover bg-gray-200" />
      <div className="p-4">
        <h3 className="font-bold mb-1">John Doe</h3>
        <p className="text-sm text-gray-600 mb-2">Creative Director</p>
      </div>
    </div>

    {/* Team Member 2 */}
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img src="/uploads/member2.jpg" alt="Jane Smith" className="h-48 w-full object-cover bg-gray-200" />
      <div className="p-4">
        <h3 className="font-bold mb-1">Jane Smith</h3>
        <p className="text-sm text-gray-600 mb-2">Marketing Lead</p>
      </div>
    </div>

    {/* Team Member 3 */}
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img src="/uploads/member3.jpg" alt="Alice Johnson" className="h-48 w-full object-cover bg-gray-200" />
      <div className="p-4">
        <h3 className="font-bold mb-1">Alice Johnson</h3>
        <p className="text-sm text-gray-600 mb-2">Product Manager</p>
      </div>
    </div>

  </div>
</div>

          
          <div className="text-center">
            <Link 
              to="/contact"
              className="px-6 py-3 bg-masslawry-blue text-white rounded-lg hover:bg-masslawry-darkblue transition-colors shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
