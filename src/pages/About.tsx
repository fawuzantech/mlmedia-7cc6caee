"use client"

import { Link } from "react-router-dom"
import { ArrowRight, Award, Lightbulb, Users } from "lucide-react"

const About = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500">
              About Masslawry
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're a creative agency dedicated to bringing your ideas to life through exceptional design, printing, and
              digital solutions.
            </p>
          </div>

          {/* Our Story Section */}
          <div className="mb-20 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500"></div>
              <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?creative,design')] opacity-20 bg-cover bg-center"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Our Journey</h2>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Founded in 2011, Masslawry began as a small printing service with a vision to provide high-quality
                  creative solutions to businesses of all sizes. Over the years, we've grown into a full-service
                  creative agency, expanding our offerings to include graphic design, web development, branding,
                  photography, and 3D fabrication.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our journey has been driven by a passion for creativity and a commitment to excellence. We believe
                  that great design has the power to transform businesses and create meaningful connections with
                  audiences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we're proud to serve clients across various industries, helping them communicate their brand
                  message effectively through multiple channels and mediums.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Values</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              These core principles guide everything we do and help us deliver exceptional results for our clients.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Creativity</h3>
                <p className="text-gray-600 leading-relaxed">
                  We approach every project with fresh ideas and innovative solutions that help our clients stand out in
                  today's competitive marketplace.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-500">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to delivering the highest quality in everything we do, from concept to execution,
                  ensuring our clients receive outstanding results.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Partnership</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build lasting relationships with our clients, working collaboratively to achieve their goals and
                  helping them grow their businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              The talented individuals behind our creative solutions
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Team Member 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://source.unsplash.com/600x800/?professional,woman"
                    alt="Susana Bonney"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4">
                      <p className="text-white/90 text-sm">
                        10+ years of experience in creative direction and brand strategy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">Susana Bonney</h3>
                  <p className="text-blue-600 font-medium mb-3">Creative Director</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://source.unsplash.com/600x800/?professional,man"
                    alt="Benjamin Gyannor"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4">
                      <p className="text-white/90 text-sm">Expert in digital marketing strategies and brand growth</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">Benjamin Gyannor</h3>
                  <p className="text-blue-600 font-medium mb-3">Marketing Lead</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://source.unsplash.com/600x800/?professional,person"
                    alt="Nyaaba"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4">
                      <p className="text-white/90 text-sm">Specializes in product development and client management</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">Nyaaba</h3>
                  <p className="text-blue-600 font-medium mb-3">Product Manager</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Join Our Team Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-md overflow-hidden flex flex-col justify-center items-center text-center p-8 text-white">
                <h3 className="font-bold text-xl mb-4">Join Our Team</h3>
                <p className="mb-6">We're always looking for talented individuals to join our creative family</p>
                <Link
                  to="/careers"
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  View Openings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-orange-500 p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to bring your ideas to life?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Let's collaborate to create something amazing together. Our team is ready to help you achieve your
              creative vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-md"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

