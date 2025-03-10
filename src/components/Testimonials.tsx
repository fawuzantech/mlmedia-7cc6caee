
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, TechStart",
      content: "Working with Masslawry was a game-changer for our brand. Their attention to detail and creative approach truly elevated our marketing materials. The team was responsive, professional, and delivered exceptional results.",
      rating: 5,
      image: "/lovable-uploads/d33ea231-5f72-4688-8bab-b767808235d2.png" 
    },
    {
      id: 2,
      name: "Daniel Mensah",
      role: "CEO, GreenGrow Ventures",
      content: "The quality of work from Masslawry is outstanding. From our logo design to our 3D signage, everything was executed with precision and creativity. They understood our vision perfectly and brought it to life even better than we imagined.",
      rating: 5,
      image: "/lovable-uploads/615e1682-4ec3-4b80-9068-56d371fa90d6.png"
    },
    {
      id: 3,
      name: "Amina Sayeed",
      role: "Event Coordinator, Global Conferences",
      content: "Masslawry delivered our event materials on an extremely tight deadline without sacrificing quality. Their printing services are top-notch, and the team went above and beyond to ensure everything was perfect for our international conference.",
      rating: 5,
      image: "/lovable-uploads/58388015-ac09-41ff-bdab-454600db3a85.png"
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-masslawry-blue/10 text-masslawry-blue text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Hear what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-8 -left-8 text-masslawry-orange opacity-20">
            <Quote size={80} />
          </div>
          
          <div className="glass-card p-8 md:p-12 relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={cn(
                  "transition-all duration-700 ease-expo-out",
                  currentIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
                )}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-masslawry-orange text-masslawry-orange" />
                      ))}
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-colors",
                      currentIndex === index ? "bg-masslawry-blue" : "bg-gray-300"
                    )}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
